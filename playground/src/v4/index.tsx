import React, { useState } from 'react';
import { TextField, Select, MenuItem, Button, Container, Grid, Box, Typography } from '@material-ui/core';
import { ValidationGroup, Validate, AutoDisabler } from '../component-lib';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { Autocomplete } from '@material-ui/lab';
import DateFnsUtils from '@date-io/date-fns';
import locator from 'test-locator';
import { DISABLER_BUTTON_AWAYS_OFF, DISABLER_BUTTON_DYNAMIC, DISABLER_INPUT, SETTINGS_INITIAL_NOISY, SETTINGS_INITIAL_NOISY_GROUP, SETTINGS_INITIAL_SILENT, TEXTFIELD_CUSTOM, TEXTFIELD_CUSTOM_INPUT, TEXTFIELD_REGEX, TEXTFIELD_REGEX_INPUT, TEXTFIELD_REQUIRED, TEXTFIELD_REQUIRED_INPUT, TEXTFIELD_UNIQUE, TEXTFIELD_UNIQUE_INPUT } from '../locators';

const V4 = () => {
    const [date, setDate]: [string | null | undefined, Function] = useState(null);

    // const handleDateChange = (date: MaterialUiPickersDate, value?: string | null | undefined) => {
    //     setDate(date);
    // };

    // const optionA = { name: 'Option A' };
    // const optionB = { name: 'Option B' };
    // const optionC = { name: 'Option C' };
    // const autocompleteOptions = [optionA, optionB, optionC];

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Container>
                <Typography variant="h5">Validation mode seetings</Typography>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <Typography variant="h6">initialValidation</Typography>
                        <ValidationGroup>
                            <Box style={{ border: '1px solid #000'}} p={1}>
                                <Box mb={2}>
                                    <Typography variant="caption">Textfield required - initial silent</Typography>
                                </Box>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Validate name="Textfield required" required id={SETTINGS_INITIAL_SILENT}>
                                            <TextField label="This field is required" fullWidth variant="outlined" size="small" required/>
                                        </Validate>
                                    </Grid>
                                </Grid>
                            </Box>
                        </ValidationGroup>
                        <ValidationGroup>
                            <Box style={{ border: '1px solid #000'}} p={1} mt={2}>
                                <Box mb={2}>
                                    <Typography variant="caption">Textfield required - initial noisy</Typography>
                                </Box>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Validate name="Textfield required" required id={SETTINGS_INITIAL_NOISY} initialValidation="noisy">
                                            <TextField label="This field is required" fullWidth variant="outlined" size="small" required/>
                                        </Validate>
                                    </Grid>
                                </Grid>
                            </Box>
                        </ValidationGroup>
                        <ValidationGroup initialValidation="noisy">
                            <Box style={{ border: '1px solid #000'}} p={1} mt={2}>
                                <Box mb={2}>
                                    <Typography variant="caption">Textfield required - initial noisy by ValidationGroup</Typography>
                                </Box>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Validate name="Textfield required" required id={SETTINGS_INITIAL_NOISY_GROUP}>
                                            <TextField label="This field is required" fullWidth variant="outlined" size="small" required/>
                                        </Validate>
                                    </Grid>
                                </Grid>
                            </Box>
                        </ValidationGroup>
                        </Grid>
                        <Grid item xs={6}>
                        <Typography variant="h6">validation</Typography>
                        <ValidationGroup>
                            <Box style={{ border: '1px solid #000'}} p={1}>
                                <Box mb={2}>
                                    <Typography variant="caption">Textfield required - noisy</Typography>
                                </Box>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Validate name="Textfield required" required id={locator(['textfield', 'required', 'noisy'])}>
                                            <TextField id={locator(['textfield', 'required', 'noisy'], 'input')} label="This field is required" fullWidth variant="outlined" size="small" required />
                                        </Validate>
                                    </Grid>
                                </Grid>
                            </Box>
                        </ValidationGroup>
                        <ValidationGroup>
                            <Box style={{ border: '1px solid #000'}} p={1} mt={2}>
                                <Box mb={2}>
                                    <Typography variant="caption">Textfield required - silent</Typography>
                                </Box>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Validate name="Textfield required" required id={locator(['textfield', 'required', 'silent'])} validation="silent">
                                            <TextField id={locator(['textfield', 'required', 'silent'], 'input')} label="This field is required" fullWidth variant="outlined" size="small" required />
                                        </Validate>
                                    </Grid>
                                </Grid>
                            </Box>
                        </ValidationGroup>
                        <ValidationGroup validation="silent">
                            <Box style={{ border: '1px solid #000'}} p={1} mt={2}>
                                <Box mb={2}>
                                    <Typography variant="caption">Textfield required - silent by ValidationGroup</Typography>
                                </Box>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Validate name="Textfield required" required id={locator(['textfield', 'required', 'silent', 'by-group'])}>
                                            <TextField id={locator(['textfield', 'required', 'silent', 'by-group'], 'input')} label="This field is required" fullWidth variant="outlined" size="small" required />
                                        </Validate>
                                    </Grid>
                                </Grid>
                            </Box>
                        </ValidationGroup>
                    </Grid>
                </Grid>
                <Typography variant="h5">AutoDisablers</Typography>
                <ValidationGroup>
                    <Box style={{ border: '1px solid #000'}} p={1} mt={2}>
                        <Box mb={2}>
                            <Typography variant="caption">AutoDisbalers</Typography>
                        </Box>
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <Validate name="Textfield required" required id={locator(['textfield', 'required', 'disabler'])} initialValidation="noisy">
                                    <TextField id={DISABLER_INPUT} label="This field is required" fullWidth variant="outlined" size="small" required/>
                                </Validate>
                            </Grid>
                            <Grid item>
                                <AutoDisabler>
                                    <Button id={DISABLER_BUTTON_DYNAMIC} variant="outlined">Disabled if group invalid</Button>
                                </AutoDisabler>
                            </Grid>
                            <Grid item>
                                <AutoDisabler>
                                    <Button id={DISABLER_BUTTON_AWAYS_OFF} variant="outlined" disabled>Always disabled by button prop</Button>
                                </AutoDisabler>
                            </Grid>
                        </Grid>
                    </Box>
                </ValidationGroup>
                <Typography variant="h5">TextField</Typography>
                <ValidationGroup>
                    <Box style={{ border: '1px solid #000'}} p={1} mt={2}>
                        <Box mb={2}>
                            <Typography variant="caption">TextField required</Typography>
                        </Box>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Validate name="Textfield required" required id={TEXTFIELD_REQUIRED} initialValidation="noisy">
                                    <TextField id={TEXTFIELD_REQUIRED_INPUT} label="TextField" fullWidth variant="outlined" size="small" required/>
                                </Validate>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Validate name="Textfield unique" unique={['a']} id={TEXTFIELD_UNIQUE} initialValidation="noisy">
                                    <TextField id={TEXTFIELD_UNIQUE_INPUT} label="TextField" fullWidth variant="outlined" size="small" required/>
                                </Validate>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Validate name="Textfield regex" regex={/[0-9]/} id={TEXTFIELD_REGEX} initialValidation="noisy">
                                    <TextField id={TEXTFIELD_REGEX_INPUT} label="TextField" fullWidth variant="outlined" size="small" required/>
                                </Validate>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Validate name="Textfield custom" custom={[(value: string) => value === 'b', 'failed']} id={TEXTFIELD_CUSTOM} initialValidation="noisy">
                                    <TextField id={TEXTFIELD_CUSTOM_INPUT} label="TextField" fullWidth variant="outlined" size="small" required/>
                                </Validate>
                            </Grid>
                        </Grid>
                    </Box>
                </ValidationGroup>
            </Container>
        </MuiPickersUtilsProvider>
    );
};

V4.displayName = 'V4';
export default V4;

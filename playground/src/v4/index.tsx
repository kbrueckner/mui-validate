import React, { useState } from 'react';
import { TextField, Select, MenuItem, Button, Container, Grid, Box, Typography } from '@material-ui/core';
import { ValidationGroup, Validate, AutoDisabler } from '../component-lib';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { Autocomplete } from '@material-ui/lab';
import DateFnsUtils from '@date-io/date-fns';
import locator from 'test-locator';
import { SETTINGS_INITIAL_NOISY, SETTINGS_INITIAL_NOISY_GROUP, SETTINGS_INITIAL_SILENT } from '../locators';

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
                                    <TextField id={locator(['textfield', 'required', 'disabler'], 'input')} label="This field is required" fullWidth variant="outlined" size="small" required/>
                                </Validate>
                            </Grid>
                            <Grid item>
                                <AutoDisabler>
                                    <Button id={locator(['textfield', 'required', 'disabler'], 'button')} variant="outlined">Disabled if group invalid</Button>
                                </AutoDisabler>
                            </Grid>
                            <Grid item>
                                <AutoDisabler>
                                    <Button id={locator(['textfield', 'required', 'disabler', 'always-off'], 'button')} variant="outlined" disabled>Always disabled by button prop</Button>
                                </AutoDisabler>
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

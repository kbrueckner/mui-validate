import React, { useRef, useState } from 'react';
import { TextField, Select, MenuItem, Button, Container, Grid, Box, Typography, Autocomplete, FormControl, InputLabel, FormHelperText } from '@mui/material';
import { ValidationGroup, Validate, AutoDisabler, ErrorList, AutoHide } from '../component-lib';
// import { DatePicker } from '@mui/lab';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {
    AUTOCOMPLETE_CUSTOM, AUTOCOMPLETE_CUSTOM_INITIAL, AUTOCOMPLETE_CUSTOM_INPUT,
    AUTOCOMPLETE_REGEX, AUTOCOMPLETE_REGEX_INPUT, AUTOCOMPLETE_REQUIRED,
    AUTOCOMPLETE_REQUIRED_INPUT, AUTOCOMPLETE_UNIQUE, AUTOCOMPLETE_UNIQUE_INPUT,
    DISABLER_BUTTON_AWAYS_OFF, DISABLER_BUTTON_DYNAMIC, DISABLER_INPUT, PICKER_CUSTOM,
    PICKER_CUSTOM_INPUT, PICKER_REGEX, PICKER_REGEX_INPUT, PICKER_REQUIRED,
    PICKER_REQUIRED_INPUT, PICKER_UNIQUE, PICKER_UNIQUE_INPUT, SELECT_CUSTOM,
    SELECT_CUSTOM_INPUT, SELECT_CUSTOM_INPUT_OPTION_A, SELECT_CUSTOM_INPUT_OPTION_B,
    SELECT_REGEX, SELECT_REGEX_INPUT, SELECT_REGEX_INPUT_OPTION_A,
    SELECT_REGEX_INPUT_OPTION_B, SELECT_REQUIRED, SELECT_REQUIRED_INPUT,
    SELECT_REQUIRED_INPUT_OPTION_A, SELECT_REQUIRED_INPUT_OPTION_EMPTY, SELECT_UNIQUE,
    SELECT_UNIQUE_INPUT, SELECT_UNIQUE_INPUT_OPTION_A, SELECT_UNIQUE_INPUT_OPTION_B,
    SETTINGS_INITIAL_NOISY, SETTINGS_INITIAL_NOISY_GROUP, SETTINGS_INITIAL_SILENT,
    TEXTFIELD_CUSTOM, TEXTFIELD_CUSTOM_INPUT, TEXTFIELD_REGEX, TEXTFIELD_REGEX_INPUT,
    TEXTFIELD_REQUIRED, TEXTFIELD_REQUIRED_INPUT, TEXTFIELD_SELECT_CUSTOM,
    TEXTFIELD_SELECT_CUSTOM_INPUT, TEXTFIELD_SELECT_CUSTOM_INPUT_OPTION_A,
    TEXTFIELD_SELECT_CUSTOM_INPUT_OPTION_B, TEXTFIELD_SELECT_REGEX, TEXTFIELD_SELECT_REGEX_INPUT,
    TEXTFIELD_SELECT_REGEX_INPUT_OPTION_A, TEXTFIELD_SELECT_REGEX_INPUT_OPTION_B,
    TEXTFIELD_SELECT_REQUIRED, TEXTFIELD_SELECT_REQUIRED_INPUT,
    TEXTFIELD_SELECT_REQUIRED_INPUT_OPTION_A, TEXTFIELD_SELECT_REQUIRED_INPUT_OPTION_EMPTY,
    TEXTFIELD_SELECT_UNIQUE, TEXTFIELD_SELECT_UNIQUE_INPUT, TEXTFIELD_SELECT_UNIQUE_INPUT_OPTION_A,
    TEXTFIELD_SELECT_UNIQUE_INPUT_OPTION_B, TEXTFIELD_UNIQUE, TEXTFIELD_UNIQUE_INPUT,
    SETTINGS_NOISY, SETTINGS_NOISY_INPUT, SETTINGS_SILENT, SETTINGS_SILENT_GROUP,
    SETTINGS_SILENT_GROUP_INPUT, SETTINGS_SILENT_INPUT,
    ERRORLIST1, ERRORLIST2, ERRORLIST_INPUT1, ERRORLIST_INPUT2,
    DISABLER_DISPLAY_ERRORLIST, DISABLER_DISPLAY_INPUT, DISABLER_DISPLAY_BUTTON, DISABLER_DISPLAY_CONTROL, DISABLER_DISPLAY_BUTTON_2,
    DISABLER_DISPLAY_2_ERRORLIST, DISABLER_DISPLAY_2_INPUT, DISABLER_DISPLAY_2_BUTTON, DISABLER_DISPLAY_2_CONTROL, DISABLER_DISPLAY_2_BUTTON_2, FIXES_LABEL_TEST,
    TEXTFIELD_LINKED_1, TEXTFIELD_LINKED_2, TEXTFIELD_LINKED_3, TEXTFIELD_LINKED_1_INPUT, TEXTFIELD_LINKED_2_INPUT, TEXTFIELD_LINKED_3_INPUT,
    TEXTFIELD_LINKED_EXAMPLE_1, TEXTFIELD_LINKED_EXAMPLE_2, TEXTFIELD_LINKED_EXAMPLE_1_INPUT, TEXTFIELD_LINKED_EXAMPLE_2_INPUT,
    UNREG_UNREGISTER_BUTTON, UNREG_REGISTER_BUTTON, UNREG_CHECK_BUTTON,
} from './locators';

const V5 = () => {
    const [dateRequired, setDateRequired]: [string | null | undefined, Function] = useState(null);
    const handleDateRequiredChange = (date: unknown, value: string | null | undefined) => {
        setDateRequired(date);
    };

    const [dateUnique, setDateUnique]: [string | null | undefined, Function] = useState(null);
    const handleDateUniqueChange = (date: unknown, value?: string | null | undefined) => {
        setDateUnique(date);
    };

    const [dateRegex, setDateRegex]: [string | null | undefined, Function] = useState(null);
    const handleDateRegexChange = (date: unknown, value?: string | null | undefined) => {
        setDateRegex(date);
    };

    const [dateCustom, setDateCustom]: [string | null | undefined, Function] = useState(null);
    const handleDateCustomChange = (date: unknown, value?: string | null | undefined) => {
        setDateCustom(date);
    };

    const [selectIssueVal, setSelectIssueVal]: [string, Function] = useState('');

    const [linkedValue, setLinkedValue]: [string, Function] = useState('');
    const linkedRef1 = useRef();
    const linkedRef2 = useRef();

    const [linkedValueExample, setLinkedValueExample]: [string, Function] = useState('');
    const linkedRefExample = useRef();

    const [registered, setRegistered]: [boolean, Function] = useState(true);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Container>
                <Typography variant="h5">Unregister validation</Typography>
                <ValidationGroup initialValidation='noisy'>
                    <Box style={{ border: '1px solid #000'}} p={1}>
                        <Box mb={2}>
                            <Typography variant="caption">Unregister a validation from validation group after initial registration</Typography>
                        </Box>
                        <Grid container spacing={1}>
                            <Grid item xs={3}>
                                { registered ? (
                                <Validate name="registeredTextfield" required>
                                    <TextField label="This field is required" fullWidth variant="outlined" size="small" required />
                                </Validate>
                                ) : <div>nothing registered</div> }
                            </Grid>
                            <Grid item xs={3}>
                                <Validate name="registeredTextfieldFixValue" required>
                                    <TextField label="This field is required" fullWidth variant="outlined" size="small" value="fix value" required />
                                </Validate>
                            </Grid>
                            <Grid item xs={5}>
                                <Button id={UNREG_UNREGISTER_BUTTON} variant="outlined" onClick={() => setRegistered(false)}>Unregister</Button>
                                <Button id={UNREG_REGISTER_BUTTON} variant="outlined" onClick={() => setRegistered(true)}>Register</Button>
                            </Grid>
                            <Grid item xs={1}>
                                <AutoDisabler>
                                    <Button id={UNREG_CHECK_BUTTON} variant="outlined">test</Button>
                                </AutoDisabler>
                            </Grid>
                        </Grid>
                    </Box>
                </ValidationGroup>
                <Typography variant="h5">Linked validations</Typography>
                <ValidationGroup initialValidation='noisy'>
                    <Box style={{ border: '1px solid #000'}} p={1}>
                        <Box mb={2}>
                            <Typography variant="caption">Re-trigger validation via linked component</Typography>
                        </Box>
                        <Grid container spacing={1}>
                            <Grid item xs={3}>
                                <Validate name="tf1" required id={TEXTFIELD_LINKED_1} reference={linkedRef1}>
                                    <TextField label="This field is required" fullWidth variant="outlined" size="small" required value={linkedValue} onChange={(evt) => setLinkedValue(evt.target.value)} id={TEXTFIELD_LINKED_1_INPUT} />
                                </Validate>
                            </Grid>
                            <Grid item xs={3}>
                                <Validate name="tf2" required id={TEXTFIELD_LINKED_2} reference={linkedRef2}>
                                    <TextField label="This field is required" fullWidth variant="outlined" size="small" required value={linkedValue} onChange={(evt) => setLinkedValue(evt.target.value)} id={TEXTFIELD_LINKED_2_INPUT} />
                                </Validate>
                            </Grid>
                            <Grid item xs={6}>
                                <Validate name="tf3" required id={TEXTFIELD_LINKED_3} triggers={[linkedRef2, linkedRef1]}>
                                    <TextField label="Textfield 3 - duplicates value to Textfield 1 and 2" fullWidth variant="outlined" size="small" required onChange={(evt) => {setLinkedValue(evt.target.value)}} id={TEXTFIELD_LINKED_3_INPUT} />
                                </Validate>
                            </Grid>
                        </Grid>
                    </Box>
                </ValidationGroup>
                <ValidationGroup initialValidation='noisy'>
                    <Box style={{ border: '1px solid #000'}} p={1}>
                        <Box mb={2}>
                            <Typography variant="caption">Linked validation from README example</Typography>
                        </Box>
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <Validate name="tf1" custom={[() => !!linkedValueExample, 'Textfield 2 is empty']} id={TEXTFIELD_LINKED_EXAMPLE_1} reference={linkedRefExample}>
                                    <TextField label="Validation relies on field 2 input" fullWidth variant="outlined" size="small" id={TEXTFIELD_LINKED_EXAMPLE_1_INPUT} />
                                </Validate>
                            </Grid>
                            <Grid item xs={6}>
                                <Validate name="tf2" id={TEXTFIELD_LINKED_EXAMPLE_2} triggers={linkedRefExample}>
                                    <TextField label="This field is required for validation of first field" fullWidth variant="outlined" size="small" required value={linkedValueExample} onChange={(evt) => setLinkedValueExample(evt.target.value)} id={TEXTFIELD_LINKED_EXAMPLE_2_INPUT} />
                                </Validate>
                            </Grid>
                        </Grid>
                    </Box>
                </ValidationGroup>
                <Typography variant="h5">Fixes</Typography>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <ValidationGroup>
                            <Box style={{ border: '1px solid #000'}} p={1}>
                                <Box mb={2}>
                                    <Typography variant="caption">Issue with surrounding FromControl</Typography>
                                </Box>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <FormControl fullWidth>
                                            <InputLabel 
                                                required 
                                                id={FIXES_LABEL_TEST}
                                            >select something else than test</InputLabel>
                                            <Validate 
                                                name="labelIssueFix" 
                                                inputType="select"
                                                required={true}
                                            >
                                                <Select
                                                    value={selectIssueVal}
                                                    required
                                                    fullWidth
                                                    name="some test"
                                                    labelId={FIXES_LABEL_TEST}
                                                    label="select something else than test"
                                                    onChange={(event) => setSelectIssueVal(event.target.value)}
                                                >
                                                    <MenuItem value="">test - test - test</MenuItem>
                                                    <MenuItem value="something else is selected">something else</MenuItem>
                                                </Select>
                                            </Validate>
                                            <AutoHide validationName="labelIssueFix">
                                                <FormHelperText>Hide based on validation result</FormHelperText>
                                            </AutoHide>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Box>
                        </ValidationGroup>
                    </Grid>
                </Grid>
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
                                        <Validate name="Textfield required" required id={SETTINGS_NOISY}>
                                            <TextField id={SETTINGS_NOISY_INPUT} label="This field is required" fullWidth variant="outlined" size="small" required />
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
                                        <Validate name="Textfield required" required id={SETTINGS_SILENT} validation="silent">
                                            <TextField id={SETTINGS_SILENT_INPUT} label="This field is required" fullWidth variant="outlined" size="small" required />
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
                                        <Validate name="Textfield required" required id={SETTINGS_SILENT_GROUP}>
                                            <TextField id={SETTINGS_SILENT_GROUP_INPUT} label="This field is required" fullWidth variant="outlined" size="small" required />
                                        </Validate>
                                    </Grid>
                                </Grid>
                            </Box>
                        </ValidationGroup>
                    </Grid>
                </Grid>
                <Typography variant="h5">ErrorList</Typography>
                <ValidationGroup>
                    <Box style={{ border: '1px solid #000'}} p={1} mt={2}>
                        <Box mb={2}>
                            <Typography variant="caption">ErrorList</Typography>
                        </Box>
                        <Box mb={2}>
                            <Grid container spacing={1}>
                                <Grid item id={ERRORLIST1}>
                                    <ErrorList title="Detected errors" alwaysVisible />
                                </Grid>
                                <Grid item id={ERRORLIST2}>
                                    <ErrorList title="Detected errors - hidden if no errors" />
                                </Grid>
                            </Grid>
                        </Box>
                        <Grid container spacing={1}>
                            <Grid item>
                                <Validate name="Textfield1" required regex={/test/} initialValidation="noisy">
                                    <TextField id={ERRORLIST_INPUT1} label="This field is required" fullWidth variant="outlined" size="small" required/>
                                </Validate>
                            </Grid>
                            <Grid item>
                                <Validate name="Textfield2" required initialValidation="noisy">
                                    <TextField id={ERRORLIST_INPUT2} label="This field is required" fullWidth variant="outlined" size="small" required/>
                                </Validate>
                            </Grid>
                        </Grid>
                    </Box>
                </ValidationGroup>
                <Typography variant="h5">AutoDisablers</Typography>
                <ValidationGroup>
                    <Box style={{ border: '1px solid #000'}} p={1} mt={2}>
                        <Box mb={2}>
                            <Typography variant="caption">AutoDisbalers</Typography>
                        </Box>
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <Validate name="Textfield required" required initialValidation="noisy">
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
                <Typography variant="h5">AutoDisablers (firstDisplayErrors)</Typography>
                <ValidationGroup>
                    <Box style={{ border: '1px solid #000'}} p={1} mt={2}>
                        <Box mb={2}>
                            <Typography variant="caption">AutoDisbalers (firstDisplayErrors) - First displays errors then disables if group invalid</Typography>
                        </Box>
                        <Grid container spacing={1}>
                            <Grid xs={4} item id={DISABLER_DISPLAY_ERRORLIST}>
                                <ErrorList title="Detected errors" alwaysVisible />
                            </Grid>
                            <Grid item xs={4}>
                                <Validate name="Textfield required" required id={DISABLER_DISPLAY_CONTROL}>
                                    <TextField id={DISABLER_DISPLAY_INPUT} label="This field is required" fullWidth variant="outlined" size="small" required/>
                                </Validate>
                            </Grid>
                            <Grid item>
                                <AutoDisabler firstDisplayErrors>
                                    <Button id={DISABLER_DISPLAY_BUTTON} variant="outlined">Button</Button>
                                </AutoDisabler>
                            </Grid>
                            <Grid item>
                                <AutoDisabler firstDisplayErrors>
                                    <Button id={DISABLER_DISPLAY_BUTTON_2} variant="outlined">Button</Button>
                                </AutoDisabler>
                            </Grid>
                        </Grid>
                    </Box>
                </ValidationGroup>
                <ValidationGroup>
                    <Box style={{ border: '1px solid #000'}} p={1} mt={2}>
                        <Box mb={2}>
                            <Typography variant="caption">AutoDisbalers (firstDisplayErrors) - Disable button after an error message is shown</Typography>
                        </Box>
                        <Grid container spacing={1}>
                            <Grid xs={4} item id={DISABLER_DISPLAY_2_ERRORLIST}>
                                <ErrorList title="Detected errors" alwaysVisible />
                            </Grid>
                            <Grid item xs={4}>
                                <Validate name="Textfield required" required id={DISABLER_DISPLAY_2_CONTROL}>
                                    <TextField id={DISABLER_DISPLAY_2_INPUT} label="This field is required" fullWidth variant="outlined" size="small" required/>
                                </Validate>
                            </Grid>
                            <Grid item>
                                <AutoDisabler firstDisplayErrors>
                                    <Button id={DISABLER_DISPLAY_2_BUTTON} variant="outlined">Button</Button>
                                </AutoDisabler>
                            </Grid>
                            <Grid item>
                                <AutoDisabler firstDisplayErrors>
                                    <Button id={DISABLER_DISPLAY_2_BUTTON_2} variant="outlined">Button</Button>
                                </AutoDisabler>
                            </Grid>
                        </Grid>
                    </Box>
                </ValidationGroup>
                <Typography variant="h5">TextField</Typography>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
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
                            </Box>
                        </ValidationGroup>
                        <ValidationGroup>
                            <Box style={{ border: '1px solid #000'}} p={1} mt={2}>
                                <Box mb={2}>
                                    <Typography variant="caption">TextField unique</Typography>
                                </Box>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Validate name="Textfield unique" unique={['a']} id={TEXTFIELD_UNIQUE} initialValidation="noisy">
                                            <TextField id={TEXTFIELD_UNIQUE_INPUT} label="TextField" fullWidth variant="outlined" size="small"/>
                                        </Validate>
                                    </Grid>
                                </Grid>
                            </Box>
                        </ValidationGroup>
                    </Grid>
                    <Grid item xs={6}>
                        <ValidationGroup>
                            <Box style={{ border: '1px solid #000'}} p={1} mt={2}>
                                <Box mb={2}>
                                    <Typography variant="caption">TextField regex</Typography>
                                </Box>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Validate name="Textfield regex" regex={/[0-9]/} id={TEXTFIELD_REGEX} initialValidation="noisy">
                                            <TextField id={TEXTFIELD_REGEX_INPUT} label="TextField" fullWidth variant="outlined" size="small"/>
                                        </Validate>
                                    </Grid>
                                </Grid>
                            </Box>
                        </ValidationGroup>
                        <ValidationGroup>
                            <Box style={{ border: '1px solid #000'}} p={1} mt={2}>
                                <Box mb={2}>
                                    <Typography variant="caption">TextField custom</Typography>
                                </Box>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Validate name="Textfield custom" custom={[(value: string) => value === 'b', 'failed']} id={TEXTFIELD_CUSTOM} initialValidation="noisy">
                                            <TextField id={TEXTFIELD_CUSTOM_INPUT} label="TextField" fullWidth variant="outlined" size="small"/>
                                        </Validate>
                                    </Grid>
                                </Grid>
                            </Box>
                        </ValidationGroup>
                    </Grid>
                </Grid>
                <Typography variant="h5">TextField Select</Typography>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <ValidationGroup>
                            <Box style={{ border: '1px solid #000'}} p={1} mt={2}>
                                <Box mb={2}>
                                    <Typography variant="caption">TextField (select) required</Typography>
                                </Box>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Validate name="Textfield required" required id={TEXTFIELD_SELECT_REQUIRED} initialValidation="noisy">
                                            <TextField id={TEXTFIELD_SELECT_REQUIRED_INPUT} select label="TextField" fullWidth variant="outlined" size="small" required>
                                                <MenuItem id={TEXTFIELD_SELECT_REQUIRED_INPUT_OPTION_EMPTY} value="">Empty</MenuItem>
                                                <MenuItem id={TEXTFIELD_SELECT_REQUIRED_INPUT_OPTION_A} value="A">Option A</MenuItem>
                                            </TextField>
                                        </Validate>
                                    </Grid>
                                </Grid>
                            </Box>
                        </ValidationGroup>
                        <ValidationGroup>
                            <Box style={{ border: '1px solid #000'}} p={1} mt={2}>
                                <Box mb={2}>
                                    <Typography variant="caption">TextField (select) unique</Typography>
                                </Box>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Validate name="Textfield unique" unique={['B']} id={TEXTFIELD_SELECT_UNIQUE} initialValidation="noisy">
                                            <TextField id={TEXTFIELD_SELECT_UNIQUE_INPUT} select label="TextField" fullWidth variant="outlined" size="small">
                                                <MenuItem id={TEXTFIELD_SELECT_UNIQUE_INPUT_OPTION_A} value="A">Option A</MenuItem>
                                                <MenuItem id={TEXTFIELD_SELECT_UNIQUE_INPUT_OPTION_B} value="B">Option B</MenuItem>
                                            </TextField>
                                        </Validate>
                                    </Grid>
                                </Grid>
                            </Box>
                        </ValidationGroup>
                    </Grid>
                    <Grid item xs={6}>
                        <ValidationGroup>
                            <Box style={{ border: '1px solid #000'}} p={1} mt={2}>
                                <Box mb={2}>
                                    <Typography variant="caption">TextField (select) regex</Typography>
                                </Box>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Validate name="Textfield regex" regex={/[0-9]/} id={TEXTFIELD_SELECT_REGEX} initialValidation="noisy">
                                            <TextField id={TEXTFIELD_SELECT_REGEX_INPUT} select label="TextField" fullWidth variant="outlined" size="small">
                                                <MenuItem id={TEXTFIELD_SELECT_REGEX_INPUT_OPTION_A} value="123">Option A</MenuItem>
                                                <MenuItem id={TEXTFIELD_SELECT_REGEX_INPUT_OPTION_B} value="B">Option B</MenuItem>
                                            </TextField>
                                        </Validate>
                                    </Grid>
                                </Grid>
                            </Box>
                        </ValidationGroup>
                        <ValidationGroup>
                            <Box style={{ border: '1px solid #000'}} p={1} mt={2}>
                                <Box mb={2}>
                                    <Typography variant="caption">TextField (select) custom</Typography>
                                </Box>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Validate name="Textfield custom" custom={[(value: string) => value === 'A', 'failed']} id={TEXTFIELD_SELECT_CUSTOM} initialValidation="noisy">
                                            <TextField id={TEXTFIELD_SELECT_CUSTOM_INPUT} select label="TextField" fullWidth variant="outlined" size="small">
                                                <MenuItem id={TEXTFIELD_SELECT_CUSTOM_INPUT_OPTION_A} value="A">Option A</MenuItem>
                                                <MenuItem id={TEXTFIELD_SELECT_CUSTOM_INPUT_OPTION_B} value="B">Option B</MenuItem>
                                            </TextField>
                                        </Validate>
                                    </Grid>
                                </Grid>
                            </Box>
                        </ValidationGroup>
                    </Grid>
                </Grid>
                <Typography variant="h5">Select</Typography>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <ValidationGroup>
                            <Box style={{ border: '1px solid #000'}} p={1} mt={2}>
                                <Box mb={2}>
                                    <Typography variant="caption">Select required</Typography>
                                </Box>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Validate name="Textfield required" required id={SELECT_REQUIRED} initialValidation="noisy">
                                            <Select id={SELECT_REQUIRED_INPUT} label="TextField" fullWidth variant="outlined" inputProps={{size: "small"}} required>
                                                <MenuItem id={SELECT_REQUIRED_INPUT_OPTION_EMPTY} value="">Empty</MenuItem>
                                                <MenuItem id={SELECT_REQUIRED_INPUT_OPTION_A} value="A">Option A</MenuItem>
                                            </Select>
                                        </Validate>
                                    </Grid>
                                </Grid>
                            </Box>
                        </ValidationGroup>
                        <ValidationGroup>
                            <Box style={{ border: '1px solid #000'}} p={1} mt={2}>
                                <Box mb={2}>
                                    <Typography variant="caption">Select unique</Typography>
                                </Box>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Validate name="Textfield unique" unique={['B']} id={SELECT_UNIQUE} initialValidation="noisy">
                                            <Select id={SELECT_UNIQUE_INPUT} label="TextField" fullWidth variant="outlined">
                                                <MenuItem id={SELECT_UNIQUE_INPUT_OPTION_A} value="A">Option A</MenuItem>
                                                <MenuItem id={SELECT_UNIQUE_INPUT_OPTION_B} value="B">Option B</MenuItem>
                                            </Select>
                                        </Validate>
                                    </Grid>
                                </Grid>
                            </Box>
                        </ValidationGroup>
                    </Grid>
                    <Grid item xs={6}>
                        <ValidationGroup>
                            <Box style={{ border: '1px solid #000'}} p={1} mt={2}>
                                <Box mb={2}>
                                    <Typography variant="caption">Select regex</Typography>
                                </Box>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Validate name="Textfield regex" regex={/[0-9]/} id={SELECT_REGEX} initialValidation="noisy">
                                            <Select id={SELECT_REGEX_INPUT} label="TextField" fullWidth variant="outlined">
                                                <MenuItem id={SELECT_REGEX_INPUT_OPTION_A} value="123">Option A</MenuItem>
                                                <MenuItem id={SELECT_REGEX_INPUT_OPTION_B} value="B">Option B</MenuItem>
                                            </Select>
                                        </Validate>
                                    </Grid>
                                </Grid>
                            </Box>
                        </ValidationGroup>
                        <ValidationGroup>
                            <Box style={{ border: '1px solid #000'}} p={1} mt={2}>
                                <Box mb={2}>
                                    <Typography variant="caption">Select custom</Typography>
                                </Box>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Validate name="Textfield custom" custom={[(value: string) => value === 'A', 'failed']} id={SELECT_CUSTOM} initialValidation="noisy">
                                            <Select id={SELECT_CUSTOM_INPUT} label="TextField" fullWidth variant="outlined">
                                                <MenuItem id={SELECT_CUSTOM_INPUT_OPTION_A} value="A">Option A</MenuItem>
                                                <MenuItem id={SELECT_CUSTOM_INPUT_OPTION_B} value="B">Option B</MenuItem>
                                            </Select>
                                        </Validate>
                                    </Grid>
                                </Grid>
                            </Box>
                        </ValidationGroup>
                    </Grid>
                </Grid>
                <Typography variant="h5">Autocomplete</Typography>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <ValidationGroup>
                            <Box style={{ border: '1px solid #000'}} p={1} mt={2}>
                                <Box mb={2}>
                                    <Typography variant="caption">Autocomplete required</Typography>
                                </Box>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Validate name="Autocomplete required" required id={AUTOCOMPLETE_REQUIRED} initialValidation="noisy">
                                            <Autocomplete
                                                id={AUTOCOMPLETE_REQUIRED_INPUT}
                                                autoComplete
                                                autoHighlight
                                                fullWidth
                                                options={['', 'B']}
                                                // eslint-disable-next-line
                                                renderInput={(params: any) => (
                                                    <TextField
                                                        {...params}
                                                        name="autocomplete"
                                                        size="small"
                                                        variant="outlined"
                                                        label="Autocomplete"
                                                        required
                                                    />
                                                )}
                                            />
                                        </Validate>
                                    </Grid>
                                </Grid>
                            </Box>
                        </ValidationGroup>
                        <ValidationGroup>
                            <Box style={{ border: '1px solid #000'}} p={1} mt={2}>
                                <Box mb={2}>
                                    <Typography variant="caption">Autocomplete unique</Typography>
                                </Box>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Validate name="Autocomplete unique" unique={['B']} id={AUTOCOMPLETE_UNIQUE} initialValidation="noisy">
                                            <Autocomplete
                                                id={AUTOCOMPLETE_UNIQUE_INPUT}
                                                autoComplete
                                                autoHighlight
                                                fullWidth
                                                options={['A', 'B']}
                                                // eslint-disable-next-line
                                                renderInput={(params: any) => (
                                                    <TextField
                                                        {...params}
                                                        name="autocomplete"
                                                        size="small"
                                                        variant="outlined"
                                                        label="Autocomplete"
                                                    />
                                                )}
                                            />
                                        </Validate>
                                    </Grid>
                                </Grid>
                            </Box>
                        </ValidationGroup>
                        <ValidationGroup>
                            <Box style={{ border: '1px solid #000'}} p={1} mt={2}>
                                <Box mb={2}>
                                    <Typography variant="caption">Autocomplete regex</Typography>
                                </Box>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Validate name="Autocomplete regex" regex={/[0-9]/} id={AUTOCOMPLETE_REGEX} initialValidation="noisy">
                                            <Autocomplete
                                                id={AUTOCOMPLETE_REGEX_INPUT}
                                                autoComplete
                                                autoHighlight
                                                fullWidth
                                                options={['123', 'B']}
                                                // eslint-disable-next-line
                                                renderInput={(params: any) => (
                                                    <TextField
                                                        {...params}
                                                        name="autocomplete"
                                                        size="small"
                                                        variant="outlined"
                                                        label="Autocomplete"
                                                    />
                                                )}
                                            />
                                        </Validate>
                                    </Grid>
                                </Grid>
                            </Box>
                        </ValidationGroup>
                    </Grid>
                    <Grid item xs={6}>
                        <ValidationGroup>
                            <Box style={{ border: '1px solid #000'}} p={1} mt={2}>
                                <Box mb={2}>
                                    <Typography variant="caption">Autocomplete custom</Typography>
                                </Box>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Validate name="Textfield custom" custom={[(value: string) => value === 'A', 'failed']} id={AUTOCOMPLETE_CUSTOM} initialValidation="noisy">
                                            <Autocomplete
                                                id={AUTOCOMPLETE_CUSTOM_INPUT}
                                                autoComplete
                                                autoHighlight
                                                fullWidth
                                                options={[{ name: 'A' }, { name: 'B' }]}
                                                getOptionLabel={(option: any) => option.name}
                                                // eslint-disable-next-line
                                                renderInput={(params: any) => (
                                                    <TextField
                                                        {...params}
                                                        name="autocomplete"
                                                        size="small"
                                                        variant="outlined"
                                                        label="Autocomplete"
                                                    />
                                                )}
                                            />
                                        </Validate>
                                    </Grid>
                                </Grid>
                            </Box>
                        </ValidationGroup>
                        <ValidationGroup>
                            <Box style={{ border: '1px solid #000'}} p={1} mt={2}>
                                <Box mb={2}>
                                    <Typography variant="caption">Autocomplete custom - initial validation (valid)</Typography>
                                </Box>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Validate name="Textfield custom initial" custom={[(value: string) => value === 'A', 'failed']} id={AUTOCOMPLETE_CUSTOM_INITIAL} initialValidation="noisy">
                                            <Autocomplete
                                                autoComplete
                                                autoHighlight
                                                fullWidth
                                                value={{ name: 'A' }}
                                                options={[{ name: 'A' }, { name: 'B' }]}
                                                getOptionLabel={(option: any) => option.name}
                                                // eslint-disable-next-line
                                                renderInput={(params: any) => (
                                                    <TextField
                                                        {...params}
                                                        name="autocomplete"
                                                        size="small"
                                                        variant="outlined"
                                                        label="Autocomplete"
                                                    />
                                                )}
                                            />
                                        </Validate>
                                    </Grid>
                                </Grid>
                            </Box>
                        </ValidationGroup>
                    </Grid>
                </Grid>
                <Typography variant="h5">Pickers</Typography>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <ValidationGroup>
                            <Box style={{ border: '1px solid #000'}} p={1} mt={2}>
                                <Box mb={2}>
                                    <Typography variant="caption">DatePicker required</Typography>
                                </Box>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Validate name="DatePicker required" required id={PICKER_REQUIRED} initialValidation="noisy">
                                            <DatePicker
                                                inputFormat="dd.MM.yyyy"
                                                mask="__.__.____"
                                                label={'Valid to'}
                                                value={dateRequired}
                                                onChange={handleDateRequiredChange}
                                                renderInput={(params: any) => <TextField {...params} id={PICKER_REQUIRED_INPUT} />}
                                            />
                                        </Validate>
                                    </Grid>
                                </Grid>
                            </Box>
                        </ValidationGroup>
                        <ValidationGroup>
                            <Box style={{ border: '1px solid #000'}} p={1} mt={2}>
                                <Box mb={2}>
                                    <Typography variant="caption">DatePicker unique</Typography>
                                </Box>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Validate name="DatePicker unique" unique={['2021-11-10T23:00:00.000Z']} id={PICKER_UNIQUE} initialValidation="noisy">
                                            <DatePicker
                                                inputFormat="dd.MM.yyyy"
                                                mask="__.__.____"
                                                label={'Valid to'}
                                                value={dateUnique}
                                                onChange={handleDateUniqueChange}
                                                renderInput={(params: any) => <TextField {...params} id={PICKER_UNIQUE_INPUT} />}
                                            />
                                        </Validate>
                                    </Grid>
                                </Grid>
                            </Box>
                        </ValidationGroup>
                    </Grid>
                    <Grid item xs={6}>
                        <ValidationGroup>
                            <Box style={{ border: '1px solid #000'}} p={1} mt={2}>
                                <Box mb={2}>
                                    <Typography variant="caption">DatePicker regex</Typography>
                                </Box>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Validate name="DatePicker reegex" regex={/2020-11-10T23:00:00\.000Z/} id={PICKER_REGEX} initialValidation="noisy">
                                            <DatePicker
                                                inputFormat="dd.MM.yyyy"
                                                mask="__.__.____"
                                                label={'Valid to'}
                                                value={dateRegex}
                                                onChange={handleDateRegexChange}
                                                renderInput={(params: any) => <TextField {...params} id={PICKER_REGEX_INPUT} />}
                                            />
                                        </Validate>
                                    </Grid>
                                </Grid>
                            </Box>
                        </ValidationGroup>
                        <ValidationGroup>
                            <Box style={{ border: '1px solid #000'}} p={1} mt={2}>
                                <Box mb={2}>
                                    <Typography variant="caption">DatePicker custom</Typography>
                                </Box>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Validate name="DatePicker custom" custom={[(value: string) => value === '2020-11-10T23:00:00.000Z', 'failed']} id={PICKER_CUSTOM} initialValidation="noisy">
                                            <DatePicker
                                                inputFormat="dd.MM.yyyy"
                                                mask="__.__.____"
                                                label={'Valid to'}
                                                value={dateCustom}
                                                onChange={handleDateCustomChange}
                                                renderInput={(params: any) => <TextField {...params} id={PICKER_CUSTOM_INPUT} />}
                                            />
                                        </Validate>
                                    </Grid>
                                </Grid>
                            </Box>
                        </ValidationGroup>
                    </Grid>
                </Grid>
            </Container>
        </LocalizationProvider>
    );
};

V5.displayName = 'V5';
export default V5;

import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { AutoDisabler, ErrorList, Validate, ValidationGroup } from "../../component-lib";
import {
    DISABLER_BUTTON_AWAYS_OFF, DISABLER_BUTTON_DYNAMIC, DISABLER_DISPLAY_2_BUTTON,
    DISABLER_DISPLAY_2_BUTTON_2, DISABLER_DISPLAY_2_CONTROL, DISABLER_DISPLAY_2_ERRORLIST,
    DISABLER_DISPLAY_2_INPUT, DISABLER_DISPLAY_BUTTON, DISABLER_DISPLAY_BUTTON_2,
    DISABLER_DISPLAY_CONTROL, DISABLER_DISPLAY_ERRORLIST, DISABLER_DISPLAY_INPUT, DISABLER_INPUT,
} from "./locators";

const AutoDisablers = () => {

    return <Box>
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
    </Box>
};

AutoDisablers.displayName = 'AutoDisablers';
export default AutoDisablers;

import { Box, Grid, TextField, Typography } from "@mui/material";
import { Validate, ValidationGroup } from "../../component-lib";
import {
    SETTINGS_INITIAL_NOISY, SETTINGS_INITIAL_NOISY_GROUP, SETTINGS_INITIAL_SILENT,
    SETTINGS_NOISY, SETTINGS_NOISY_INPUT, SETTINGS_SILENT, SETTINGS_SILENT_GROUP,
    SETTINGS_SILENT_GROUP_INPUT, SETTINGS_SILENT_INPUT,
} from "./locators";

const ValidationModeSettings = () => {

    return <Box>
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
    </Box>
};

ValidationModeSettings.displayName = 'ValidationModeSettings';
export default ValidationModeSettings;

import { Box, Grid, MenuItem, Select, Typography } from "@mui/material";
import { Validate, ValidationGroup } from "../../component-lib";
import {
    SELECT_CUSTOM, SELECT_CUSTOM_INPUT, SELECT_CUSTOM_INPUT_OPTION_A, SELECT_CUSTOM_INPUT_OPTION_B,
    SELECT_REGEX_INPUT, SELECT_REGEX_INPUT_OPTION_A, SELECT_REGEX_INPUT_OPTION_B, SELECT_REQUIRED,
    SELECT_REQUIRED_INPUT, SELECT_REQUIRED_INPUT_OPTION_A, SELECT_REQUIRED_INPUT_OPTION_EMPTY,
    SELECT_UNIQUE, SELECT_UNIQUE_INPUT, SELECT_UNIQUE_INPUT_OPTION_A, SELECT_UNIQUE_INPUT_OPTION_B,
    SELECT_REGEX,
} from "./locators";

const Selects = () => {
    return <Box>
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
    </Box>
};

Selects.displayName = 'Selects';
export default Selects;

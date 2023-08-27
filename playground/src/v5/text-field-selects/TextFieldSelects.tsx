import { Box, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { Validate, ValidationGroup } from "../../component-lib";
import {
    TEXTFIELD_SELECT_CUSTOM, TEXTFIELD_SELECT_CUSTOM_INPUT, TEXTFIELD_SELECT_CUSTOM_INPUT_OPTION_A,
    TEXTFIELD_SELECT_CUSTOM_INPUT_OPTION_B, TEXTFIELD_SELECT_REGEX, TEXTFIELD_SELECT_REGEX_INPUT,
    TEXTFIELD_SELECT_REGEX_INPUT_OPTION_A, TEXTFIELD_SELECT_REGEX_INPUT_OPTION_B, TEXTFIELD_SELECT_REQUIRED,
    TEXTFIELD_SELECT_REQUIRED_INPUT, TEXTFIELD_SELECT_REQUIRED_INPUT_OPTION_A, TEXTFIELD_SELECT_REQUIRED_INPUT_OPTION_EMPTY,
    TEXTFIELD_SELECT_UNIQUE, TEXTFIELD_SELECT_UNIQUE_INPUT, TEXTFIELD_SELECT_UNIQUE_INPUT_OPTION_A,
    TEXTFIELD_SELECT_UNIQUE_INPUT_OPTION_B,
} from "./locators";

const TextFieldSelects = () => {
    return <Box>
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
    </Box>
};

TextFieldSelects.displayName = 'TextFieldSelects';
export default TextFieldSelects;

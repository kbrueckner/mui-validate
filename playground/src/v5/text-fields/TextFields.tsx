import { Box, Grid, TextField, Typography } from "@mui/material";
import { Validate, ValidationGroup } from "../../component-lib";
import { TEXTFIELD_CUSTOM, TEXTFIELD_CUSTOM_INPUT, TEXTFIELD_REGEX, TEXTFIELD_REGEX_INPUT, TEXTFIELD_REQUIRED, TEXTFIELD_REQUIRED_INPUT, TEXTFIELD_UNIQUE, TEXTFIELD_UNIQUE_INPUT } from "./locators";

const TextFields = () => {
    return <Box>
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
    </Box>
};

TextFields.displayName = 'TextFields';
export default TextFields;

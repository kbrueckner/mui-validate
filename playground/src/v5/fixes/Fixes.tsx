import { Box, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { useState } from "react";
import { AutoHide, Validate, ValidationGroup } from "../../component-lib";
import { FIXES_LABEL_TEST } from "./locators";

const Fixes = () => {
    const [selectIssueVal, setSelectIssueVal]: [string, Function] = useState('');
    
    return <Box>
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
    </Box>;
}

Fixes.displayName = 'Fixes';
export default Fixes;

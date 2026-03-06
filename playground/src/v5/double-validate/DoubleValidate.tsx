import { Box, Grid, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { Validate, ValidationGroup, Validation, ValidateRef } from "../../component-lib";
import { TEXTFIELD_DOUBLE_VALIDATE_1, TEXTFIELD_DOUBLE_VALIDATE_1_INPUT } from "./locators";

const DoubleValidate = () => {
    const outerValidate = useRef<ValidateRef>(null);
    const [value, setValue] = useState('');

    return <Box>
        <Typography variant="h5">Double Validate</Typography>
        <ValidationGroup>
            <Box style={{ border: '1px solid #000'}} p={1}>
                <Box mb={2}>
                    <Typography variant="caption">Wrapped into 2 Validate Components</Typography>
                </Box>
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <Validate name="required-outer" required id={TEXTFIELD_DOUBLE_VALIDATE_1} reference={outerValidate}>
                            <Validate
                                name="empty-inner"
                                custom={[() => value === '', 'Value must be empty']}
                                after={(validationResult: Validation, value: string) => {
                                    outerValidate.current?.validate(value);
                                }}
                            >
                                <TextField
                                    label="This field is required"
                                    fullWidth
                                    variant="outlined"
                                    size="small"
                                    required
                                    id={TEXTFIELD_DOUBLE_VALIDATE_1_INPUT}
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                />
                            </Validate>
                        </Validate>
                    </Grid>
                </Grid>
            </Box>
        </ValidationGroup>
    </Box>;
};

DoubleValidate.displayName = 'DoubleValidate';
export default DoubleValidate;

import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { AutoDisabler, Validate, ValidationGroup } from "../../component-lib";
import { UNREG_CHECK_BUTTON, UNREG_REGISTER_BUTTON, UNREG_UNREGISTER_BUTTON } from "./locators";

const UnregisterValidation = () => {
    const [registered, setRegistered]: [boolean, Function] = useState(true);

    return <Box>
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
    </Box>
};

UnregisterValidation.displayName = 'UnregisterValidation';
export default UnregisterValidation;

import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useRef, useState, useEffect } from "react";
import { AutoDisabler, Validate, ValidationGroup } from "../../component-lib";
import { UNREG_CHECK_BUTTON, UNREG_REGISTER_2_BUTTON, UNREG_REGISTER_BUTTON,
    UNREG_UNREGISTER_2_BUTTON, UNREG_UNREGISTER_BUTTON, UNREG_CHECK_2_BUTTON } from "./locators";

const UnregisterValidation = () => {
    const [registered, setRegistered]: [boolean, Function] = useState(true);
    
    const [registered2, setRegistered2]: [boolean, Function] = useState(true);
    const [valField1, setValField1]: [{ value?: string }, Function] = useState({ value: '' });
    const linkedRef1 = useRef();
    const linkedRef2 = useRef();
    useEffect(() => {
        if (!registered2) {
            setValField1({});
        } else {
            setValField1({ value: '' });
        }
    }, [registered2]);

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
        <Box mt={2} />
        <Typography variant="h5">Unregister validation with cross validation</Typography>
        <ValidationGroup initialValidation='noisy'>
            <Box style={{ border: '1px solid #000'}} p={1}>
            <Box mb={2}>
                    <Typography variant="caption">Unregister a validation from validation group after initial registration (with cross triggering)</Typography>
                </Box>
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        { registered2 ? (
                        <Validate name="registeredTextfield" required reference={linkedRef1} triggers={linkedRef2}>
                            <TextField label="This field is required" fullWidth variant="outlined" size="small" required value={valField1.value} onChange={(evt) => setValField1({ value: evt.target.value })} />
                        </Validate>
                        ) : <div>nothing registered</div> }
                    </Grid>
                    <Grid item xs={3}>
                        <Validate name="registeredTextfieldFixValue" custom={[() => valField1.value === undefined || valField1.value === '123', 'Field 1 not filled']} reference={linkedRef2}>
                            <TextField label="This field relies on field 1" fullWidth variant="outlined" size="small" value="fix value" required />
                        </Validate>
                    </Grid>
                    <Grid item xs={5}>
                        <Button id={UNREG_UNREGISTER_2_BUTTON} variant="outlined" onClick={() => setRegistered2(false)}>Unregister</Button>
                        <Button id={UNREG_REGISTER_2_BUTTON} variant="outlined" onClick={() => setRegistered2(true)}>Register</Button>
                    </Grid>
                    <Grid item xs={1}>
                        <AutoDisabler>
                            <Button id={UNREG_CHECK_2_BUTTON} variant="outlined">test</Button>
                        </AutoDisabler>
                    </Grid>
                </Grid>        
            </Box>
        </ValidationGroup>
    </Box>
};

UnregisterValidation.displayName = 'UnregisterValidation';
export default UnregisterValidation;

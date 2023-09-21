import { Box, Grid, TextField, Typography } from "@mui/material";
import { ErrorList, Validate, ValidationGroup } from "../../component-lib";
import { ERRORLIST1, ERRORLIST2, ERRORLIST_INPUT1, ERRORLIST_INPUT2 } from "./locators";

const ErrorLists = () => {
    return <Box>
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
                            <ErrorList title="Detected errors - hidden if no errors (cutom error message rendering)" renderErrorMessage={(name, message) => `${name} >> ${message}`} />
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
    </Box>
};

ErrorLists.displayName = 'ErrorLists';
export default ErrorLists;

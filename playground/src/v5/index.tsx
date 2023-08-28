import { Button, Box, Grid } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';

const V5 = () => {
    return (
        <>
            <Grid container spacing={1} mt={2}>
                <Grid item><NavLink to="/unregister-validation"><Button variant="outlined">Unregister Validation</Button></NavLink></Grid>
                <Grid item><NavLink to="/linked-validations"><Button variant="outlined">Linked Validations</Button></NavLink></Grid>
                <Grid item><NavLink to="/fixes"><Button variant="outlined">Fixes</Button></NavLink></Grid>
                <Grid item><NavLink to="/validation-mode-settings"><Button variant="outlined">Validation Mode Settings</Button></NavLink></Grid>
                <Grid item><NavLink to="/errorlists"><Button variant="outlined">Errorlists</Button></NavLink></Grid>
                <Grid item><NavLink to="/autodisablers"><Button variant="outlined">Autodisablers</Button></NavLink></Grid>
                <Grid item><NavLink to="/textfields"><Button variant="outlined">Textfields</Button></NavLink></Grid>
                <Grid item><NavLink to="/textfield-selects"><Button variant="outlined">Textfield Selects</Button></NavLink></Grid>
                <Grid item><NavLink to="/selects"><Button variant="outlined">Selects</Button></NavLink></Grid>
                <Grid item><NavLink to="/autocompletes"><Button variant="outlined">Autocompletes</Button></NavLink></Grid>
                <Grid item><NavLink to="/pickers"><Button variant="outlined">Pickers</Button></NavLink></Grid>
            </Grid>
            <Box mt={5}>
                <Outlet />
            </Box>
        </>
    );
};

V5.displayName = 'V5';
export default V5;

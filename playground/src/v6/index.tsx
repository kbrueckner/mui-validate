import { Button, Box, Grid } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';

const V5 = () => {
    return (
        <>
            <Grid container spacing={1} mt={2}>
                <Grid item><NavLink to="/v6/pickers"><Button variant="outlined">Pickers</Button></NavLink></Grid>
            </Grid>
            <Box mt={5}>
                <Outlet />
            </Box>
        </>
    );
};

V5.displayName = 'V5';
export default V5;

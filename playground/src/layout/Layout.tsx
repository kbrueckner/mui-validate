import { Box } from "@mui/material";
import { Outlet } from 'react-router-dom';
import Nav from "./nav";

const Layout = () => <>
    <Nav />
    <Box mt={5}>
        <Outlet />
    </Box>
</>;

Layout.displayName = 'Layout';
export default Layout;

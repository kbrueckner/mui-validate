import { Grid, Button } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

const NAV_CONFIG = [
    { link: '/unregister-validation', text: 'Unregister Validation' },
    { link: '/linked-validations', text: 'Linked Validations' },
    { link: '/fixes', text: 'Fixes' },
    { link: '/validation-mode-settings', text: 'Validation Mode Settings' },
    { link: '/errorlists', text: 'Errorlists' },
    { link: '/autodisablers', text: 'Autodisablers' },
    { link: '/textfields', text: 'Textfields' },
    { link: '/textfield-selects', text: 'Textfield Selects' },
    { link: '/selects', text: 'Selects' },
    { link: '/autocompletes', text: 'Autocompletes' },
    { link: '/pickers', text: 'Pickers' },
    { link: '/double-validate', text: 'Double Validate' },
    { link: '/v6/pickers', text: 'Pickers (V6)' },
];

const Nav = () => {
    const { pathname } = useLocation();

    const createLink = (link: string, text: string) => <Grid item key={link}>
        <NavLink to={link}>
            <Button variant={link === pathname ? 'contained' : "outlined"}>{ text }</Button>
        </NavLink>
    </Grid>;

    return <Grid container spacing={1} mt={2}>
        { NAV_CONFIG.map((linkElem) => createLink(linkElem.link, linkElem.text)) }
    </Grid>;
};

Nav.displayText = 'Nav';
export default Nav;

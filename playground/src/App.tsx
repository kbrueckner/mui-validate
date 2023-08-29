import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import UnregisterValidation from './v5/unregister-validation';
import LinkedValidations from './v5/linked-validations';
import Fixes from './v5/fixes';
import ValidationModeSettings from './v5/validation-mode-settings';
import ErrorLists from './v5/error-lists';
import AutoDisablers from './v5/auto-disablers';
import TextFieldSelects from './v5/text-field-selects';
import TextFields from './v5/text-fields';
import Selects from './v5/selects';
import Autocompletes from './v5/autocompletes';
import Pickers from './v5/pickers';
import PickersV6 from './v6/pickers';
import Layout from "./layout";

const App = () => {
    return <ThemeProvider theme={createTheme()}>
        <CssBaseline />
        <Container>
            <RouterProvider router={
                createBrowserRouter(
                createRoutesFromElements(
                    <>
                        <Route path="/" element={<Layout />}>
                            <Route path="unregister-validation" element={<UnregisterValidation />} />
                            <Route path="linked-validations" element={<LinkedValidations />} />
                            <Route path="fixes" element={<Fixes />} />
                            <Route path="validation-mode-settings" element={<ValidationModeSettings />} />
                            <Route path="errorlists" element={<ErrorLists />} />
                            <Route path="autodisablers" element={<AutoDisablers />} />
                            <Route path="textfields" element={<TextFields />} />
                            <Route path="textfield-selects" element={<TextFieldSelects />} />
                            <Route path="selects" element={<Selects />} />
                            <Route path="autocompletes" element={<Autocompletes />} />
                            <Route path="pickers" element={<Pickers />} />
                        </Route>
                        <Route path="v6" element={<Layout />}>
                            <Route path="pickers" element={<PickersV6 />} />
                        </Route>
                    </>
                )
            )} />
        </Container>
    </ThemeProvider>;
};

export default App;

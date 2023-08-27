import { Container } from '@mui/material';
import UnregisterValidation from './unregister-validation';
import LinkedValidations from './linked-validations';
import Fixes from './fixes';
import ValidationModeSettings from './validation-mode-settings';
import ErrorLists from './error-lists';
import AutoDisablers from './auto-disablers';
import TextFields from './text-fields';
import TextFieldSelects from './text-field-selects';
import Selects from './selects';
import Autocompletes from './autocompletes';
import Pickers from './pickers';

const V5 = () => {
    return (
        <Container>
            <UnregisterValidation />
            <LinkedValidations />
            <Fixes />
            <ValidationModeSettings />
            <ErrorLists />
            <AutoDisablers />
            <TextFields />
            <TextFieldSelects />
            <Selects />
            <Autocompletes />
            <Pickers />
        </Container>
    );
};

V5.displayName = 'V5';
export default V5;

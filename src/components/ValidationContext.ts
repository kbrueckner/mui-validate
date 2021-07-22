import React from 'react';
import { ValidationInfo } from '../type';

const context = React.createContext<ValidationInfo>({
    validations: {},
    setValidations: (): void => { },
    allValid: true,
});

context.displayName = 'ValidationContext';
export default context;

import React, { useContext } from 'react';
import { ValidationInfo } from '../type';

const context = React.createContext<ValidationInfo>({
    validations: {},
    setValidations: (): void => {},
    allValid: true,
    initialValidation: 'silent',
});

context.displayName = 'ValidationContext';
export default context;

export const useValidation = (): ValidationInfo => useContext(context);

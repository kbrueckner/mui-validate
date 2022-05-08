// eslint-disable-next-line import/no-unresolved
import React, { useContext } from 'react';
import { ValidationInfo } from '../type';

const context = React.createContext<ValidationInfo>({
    validations: {},
    setValidations: (): void => {},
    updateValidation: (): void => {},
    allValid: true,
    initialValidation: 'silent',
    validation: 'noisy',
    initialState: {},
    autoDisablersWereTriggered: false,
    setAutoDisablersWereTriggered: (): void => {},
});

context.displayName = 'ValidationContext';
export default context;

export const useValidation = (): ValidationInfo => useContext(context);

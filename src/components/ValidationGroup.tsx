import React, { useState } from 'react';
import ValidationContext from './ValidationContext';
import { ValidationMode, Validation, ValidationCollection } from '../type';

type Props = {
    children: JSX.Element;
    initialValidation?: ValidationMode;
    validation?: ValidationMode;
};

const validateAll = (validation: ValidationCollection): boolean => !Object.values(validation).some((field: Validation) => !field.valid);

const ValidationGroup = ({ children, initialValidation = 'silent', validation = 'noisy' }: Props): JSX.Element => {
    const [validations, setValidations]: [ValidationCollection, (validationsIn: ValidationCollection) => void] = useState({});
    const allValid = validateAll(validations);

    return (
        <ValidationContext.Provider value={{
            validations, setValidations, allValid, initialValidation, validation,
        }}
        >
            {children}
        </ValidationContext.Provider>
    );
};

ValidationGroup.displayName = 'ValidationGroup';
export default ValidationGroup;

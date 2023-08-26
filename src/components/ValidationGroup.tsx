// eslint-disable-next-line
import React, { useState } from 'react';
import ValidationContext from './ValidationContext';
import { ValidationMode, Validation, ValidationCollection } from '../type';

export type ValidationGroupProps = {
    children: JSX.Element;
    initialValidation?: ValidationMode;
    validation?: ValidationMode;
    initialState?: ValidationCollection;
};

const validateAll = (validation: ValidationCollection): boolean => !Object.values(validation).some((field: Validation) => !field.valid);

const ValidationGroup = ({
    children, initialValidation = 'silent', validation = 'noisy', initialState = {},
}: ValidationGroupProps): JSX.Element => {
    const [validations, setValidations]: [ValidationCollection, (validationsIn: ValidationCollection) => void] = useState(initialState);
    const [autoDisablersWereTriggered, setAutoDisablersWereTriggered] = useState(false);
    const allValid = validateAll(validations);

    const updateValidation = (key: string, val: Validation): void => {
        setValidations({
            ...validations,
            [key]: val,
        });
    };

    const removeValidation = (key: string): void => {
        const newValidations: ValidationCollection = JSON.parse(JSON.stringify(validations));
        delete newValidations[key];
        setValidations({
            ...newValidations,
        });
    };

    return (
        <ValidationContext.Provider value={{
            validations,
            setValidations,
            allValid,
            initialValidation,
            validation,
            updateValidation,
            initialState,
            autoDisablersWereTriggered,
            setAutoDisablersWereTriggered,
            removeValidation,
        }}
        >
            {children}
        </ValidationContext.Provider>
    );
};

ValidationGroup.displayName = 'ValidationGroup';
export default ValidationGroup;

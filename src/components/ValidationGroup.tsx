// eslint-disable-next-line
import React, { Dispatch, SetStateAction, useMemo, useState } from 'react';
import ValidationContext from './ValidationContext';
import {
    ValidationMode, Validation, ValidationCollection, ValidationInfo,
} from '../type';

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
    const [validations, setValidations]: [ValidationCollection, Dispatch<SetStateAction<ValidationCollection>>] = useState(initialState);
    const [autoDisablersWereTriggered, setAutoDisablersWereTriggered] = useState(false);
    const allValid = validateAll(validations);

    const updateValidation = (key: string, val: Validation): void => {
        setValidations((prevValidations: ValidationCollection): ValidationCollection => ({
            ...prevValidations,
            [key]: val,
        }));
    };

    const removeValidation = (key: string): void => {
        setValidations((prevValidations: ValidationCollection): ValidationCollection => {
            const newValidations: ValidationCollection = JSON.parse(JSON.stringify(prevValidations));
            delete newValidations[key];
            return {
                ...newValidations,
            };
        });
    };

    const validationContextVaule: ValidationInfo = useMemo((): ValidationInfo => ({
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
    }), [validations, allValid, autoDisablersWereTriggered]);

    return (
        <ValidationContext.Provider value={
            validationContextVaule
        }
        >
            {children}
        </ValidationContext.Provider>
    );
};

ValidationGroup.displayName = 'ValidationGroup';
export default ValidationGroup;

import { useState } from 'react';
import ValidationContext from './ValidationContext';
import { InitialValidationMode, Validation, ValidationCollection } from '../type';

type Props = {
    children: JSX.Element;
    initialValidation?: InitialValidationMode;
};

const validateAll = (validation: ValidationCollection): boolean => !Object.values(validation).some((field: Validation) => !field.valid);

const ValidationGroup = ({ children, initialValidation = 'silent' }: Props): JSX.Element => {
    const [validations, setValidations]: [ValidationCollection, (validations: ValidationCollection) => void] = useState({});
    const allValid = validateAll(validations);

    return (
        <ValidationContext.Provider value={{ validations, setValidations, allValid, initialValidation }}>
            {children}
        </ValidationContext.Provider>
    );
};

ValidationGroup.displayName = 'ValidationGroup';
export default ValidationGroup;

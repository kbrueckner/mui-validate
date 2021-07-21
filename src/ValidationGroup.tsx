import React, { useState } from 'react';
import ValidationContext from './ValidationContext';
import { allValid as validateAll } from './';
import { ValidationCollection } from './type';

type Props = {
    children: JSX.Element;
};

const ValidationGroup = ({ children }: Props): JSX.Element => {
    const [validations, setValidations]: [ValidationCollection, (validations: ValidationCollection) => void] = useState({});
    const allValid = validateAll(validations);

    return (
        <ValidationContext.Provider value={{ validations, setValidations, allValid }}>
            {children}
        </ValidationContext.Provider>
    );
};

ValidationGroup.displayName = 'ValidationGroup';
export default ValidationGroup;

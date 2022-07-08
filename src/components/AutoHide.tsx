// eslint-disable-next-line import/no-unresolved
import React from 'react';
import { useValidation } from './ValidationContext';

export type AutoHideProps = {
    children: JSX.Element;
    validationName: string;
};

const AutoHide = ({ children, validationName }: AutoHideProps): JSX.Element | null => {
    const { validations } = useValidation();

    const display = validationName && validations[validationName] && (validations[validationName].valid || !validations[validationName].display);

    if (display) {
        return children;
    }
    return null;
};

AutoHide.displayName = 'AutoHide';
export default AutoHide;

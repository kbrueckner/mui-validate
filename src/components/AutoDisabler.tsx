// eslint-disable-next-line import/no-unresolved
import React from 'react';
import { useValidation } from './ValidationContext';
import { ValidationCollection } from '../type';

export type AutoDisablerProps = {
    children: JSX.Element;
    firstDisplayErrors?: boolean;
};

const AutoDisabler = ({ children, firstDisplayErrors = false }: AutoDisablerProps): JSX.Element => {
    const {
        allValid, validations, setValidations, autoDisablersWereTriggered, setAutoDisablersWereTriggered,
    } = useValidation();

    const calculatedDisabled = !allValid // precondition is that there is at least 1 error
        && ( // additionally
            !firstDisplayErrors // firstDisplayErrors is not set to true
            || (firstDisplayErrors && ( // or it is set true
                autoDisablersWereTriggered // and a disabler button was already hit
                || Object.values(validations).some((validation) => validation.valid === false && validation.display === true) // or any error is visible
            ))
        );

    return React.cloneElement(children, {
        onClick: !autoDisablersWereTriggered ? () => {
            // if firstDisplayErrors set display all error messages
            if (firstDisplayErrors) {
                setValidations((prevValidations: ValidationCollection) => {
                    const newValidations = { ...prevValidations };
                    Object.keys(newValidations).forEach((key: string) => {
                        newValidations[key].display = true;
                    });
                    return newValidations;
                });
            }
            setAutoDisablersWereTriggered(true);
            // if allValid then trigger the actual onClick event if present
            if (allValid && children.props.onClick) { children.props.onClick(); }
        } : children.props.onClick,
        disabled: calculatedDisabled || children.props.disabled,
    });
};

AutoDisabler.displayName = 'AutoDisabler';
export default AutoDisabler;

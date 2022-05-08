// eslint-disable-next-line import/no-unresolved
import React, { useState } from 'react';
import { useValidation } from './ValidationContext';

export type AutoDisablerProps = {
    children: JSX.Element;
    firstDisplayErrors?: boolean;
};

const AutoDisabler = ({ children, firstDisplayErrors = false }: AutoDisablerProps): JSX.Element => {
    const { allValid, validations, setValidations } = useValidation();
    const [wasFirstDisablerHitTriggered, setWasFirstDisablerHitTriggered]: [boolean, Function] = useState(false);

    const calculatedDisabled = !allValid // precondition is that there is at least 1 error
        && ( // additionally
            !firstDisplayErrors // firstDisplayErrors is not set to true
            || (firstDisplayErrors && ( // or it is set true
                wasFirstDisablerHitTriggered // and a disabler button was already hit
                || Object.values(validations).some((validation) => validation.valid === false && validation.display === true) // or any error is visible
            ))
        );

    return React.cloneElement(children, {
        onClick: !wasFirstDisablerHitTriggered ? () => {
            // if firstDisplayErrors set display all error messages
            if (firstDisplayErrors) {
                const newValidations = { ...validations };
                Object.keys(newValidations).forEach((key: string) => {
                    newValidations[key].display = true;
                });
                setValidations(newValidations);
            }
            setWasFirstDisablerHitTriggered(true);
            // if allValid then trigger the actual onClick event if present
            if (allValid && children.props.onClick) { children.props.onClick(); }
        } : children.props.onClick,
        disabled: calculatedDisabled || children.props.disabled,
    });
};

AutoDisabler.displayName = 'AutoDisabler';
export default AutoDisabler;

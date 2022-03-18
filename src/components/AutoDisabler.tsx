// eslint-disable-next-line import/no-unresolved
import React from 'react';
import { useValidation } from './ValidationContext';

export type AutoDisablerProps = {
    children: JSX.Element;
};

const AutoDisabler = ({ children }: AutoDisablerProps): JSX.Element => {
    const { allValid } = useValidation();

    return React.cloneElement(children, {
        disabled: !allValid || children.props.disabled,
    });
};

AutoDisabler.displayName = 'AutoDisabler';
export default AutoDisabler;

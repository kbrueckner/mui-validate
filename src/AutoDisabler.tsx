import React from 'react';
import { useValidation } from './';

type Props = {
    children: JSX.Element;
};

const AutoDisabler = ({ children }: Props): JSX.Element => {
    const { allValid } = useValidation();

    return React.cloneElement(children, {
        disabled: !allValid || children.props.disabled,
    });
};

AutoDisabler.displayName = 'AutoDisabler';
export default AutoDisabler;

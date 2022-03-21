// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Typography } from '../mui-loader';
import { useValidation } from './ValidationContext';

type TypographyVariant = 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'inherit'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2';

export type ErrorListProps = {
    title?: string;
    titleAlwaysOn?: boolean;
    noErrorsText?: string;
    titleVariant?: TypographyVariant;
    messageVariant?: TypographyVariant;
};

const ErrorList = ({
    title, titleAlwaysOn = false, noErrorsText = 'There are no errors detected', titleVariant = 'subtitle1', messageVariant = 'caption',
}: ErrorListProps): JSX.Element | null => {
    const { validations } = useValidation();
    const errors = Object.entries(validations).filter((dataset) => !dataset[1].valid);
    return (
        <div className="error-list" data-error-count={errors.length}>
            { (errors.length > 0 || titleAlwaysOn) && <Typography variant={titleVariant} className="error-list__title">{ title }</Typography> }
            { errors.map(([name, validation]) => (
                <Typography key={name} component="p" className="error-list__error-message" color="error" variant={messageVariant}>{`${name}: ${validation.message}`}</Typography>
            ))}
            { titleAlwaysOn && errors.length === 0 && <Typography component="p" className="error-list__no-errors-message" variant={messageVariant}>{ noErrorsText }</Typography> }
        </div>
    );
};

ErrorList.displayName = 'ErrorList';
export default ErrorList;

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

type TypographyColor = 'inherit'
    | 'primary'
    | 'secondary'
    | 'textPrimary'
    | 'textSecondary'
    | 'error';

export type ErrorListProps = {
    title?: string;
    alwaysVisible?: boolean;
    noErrorsText?: string;
    titleVariant?: TypographyVariant;
    errorVariant?: TypographyVariant;
    titleColor?: TypographyColor;
    errorColor?: TypographyColor;
};

const ErrorList = ({
    title, alwaysVisible = false, noErrorsText = 'No errors detected', titleVariant = 'subtitle1', errorVariant = 'caption',
    titleColor = 'inherit', errorColor = 'error',
}: ErrorListProps): JSX.Element | null => {
    const { validations } = useValidation();
    const errors = Object.entries(validations).filter((dataset) => !dataset[1].valid && dataset[1].display);
    return (
        <div className="error-list" data-error-count={errors.length}>
            { (errors.length > 0 || alwaysVisible) && <Typography variant={titleVariant} className="error-list__title" color={titleColor}>{ title }</Typography> }
            { errors.map(([name, validation]) => (
                validation.messages.map((message) => (
                    <Typography key={name} component="p" className="error-list__error-message" color={errorColor} variant={errorVariant}>{`${name}: ${message.text}`}</Typography>
                ))
            ))}
            { alwaysVisible && errors.length === 0 && <Typography component="p" className="error-list__no-errors-message" color={titleColor} variant={errorVariant}>{ noErrorsText }</Typography> }
        </div>
    );
};

ErrorList.displayName = 'ErrorList';
export default ErrorList;

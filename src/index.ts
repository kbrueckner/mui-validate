import { useContext } from 'react';
import ValidationContext from './components/ValidationContext';
import { Validation, ValidationInfo, ValidationCollection } from './type';
import VG from './components/ValidationGroup';
import V from './components/Validate';
import AD from './components/AutoDisabler';

export * as ERROR_MESSAGE from './definitions/error-messages';
export * from './type';

export const ValidationGroup = VG;
export const Validate = V;
export const AutoDisabler = AD;

export const useValidation = (): ValidationInfo => useContext(ValidationContext);
export const allValid = (validation: ValidationCollection): boolean =>
    !Object.values(validation).some((field: Validation) => !field.valid);

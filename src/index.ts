import { useContext } from 'react';
import ValidationContext from './ValidationContext';
import { Validation, ValidationInfo, ValidationCollection } from './type';
import VG from './ValidationGroup';
import V from './Validate';
import AD from './AutoDisabler';

export * as ERROR_MESSAGE from './error-messages';
export * from './type';

export * as ValidationContext from './ValidationContext';

export const ValidationGroup = VG;
export const Validate = V;
export const AutoDisabler = AD;

export const useValidation = (): ValidationInfo => useContext(ValidationContext);
export const allValid = (validation: ValidationCollection): boolean =>
    !Object.values(validation).some((field: Validation) => !field.valid);

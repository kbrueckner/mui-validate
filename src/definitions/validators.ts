import { CustomValidationFunction } from '../type';
import ERROR_MESSAGE from './error-messages';

const required = (value: string): boolean => value !== '' && value !== null && value !== undefined;

const unique = (value: string, compareList: string[]): boolean => !compareList.map((val: string) => val.toLowerCase()).includes(value.toLowerCase());

const regex = (value: string, regexp: RegExp): boolean => regexp.test(value);

const custom = (value: string, fn: CustomValidationFunction): boolean => fn(value);

export default {
    required: {
        test: required,
        errorMessage: ERROR_MESSAGE.REQUIRED,
    },
    unique: {
        test: unique,
        errorMessage: ERROR_MESSAGE.UNIQUE,
    },
    regex: {
        test: regex,
        errorMessage: ERROR_MESSAGE.REGEX,
    },
    custom: {
        test: custom,
        errorMessage: ERROR_MESSAGE.CUSTOM,
    },
};

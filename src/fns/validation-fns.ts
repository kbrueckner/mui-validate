import { Validation, ValidationRules } from '../type';
import validator from '../definitions/validators';

const validate = (value: string, rules: ValidationRules = {}): Validation => {
    const validation: Validation = { valid: true, message: undefined };
    const rulesIncluded = Object.keys(rules);

    if (rulesIncluded.includes('required') && !validator.required.test(value)) {
        validation.valid = false;
        validation.message = (Array.isArray(rules.required) && rules.required[1]) || validator.required.errorMessage;
    }

    if (rulesIncluded.includes('unique') && rules.unique && !validator.unique.test(
        value,
        // eslint-disable-next-line
        // @ts-ignore:next-line
        Array.isArray(rules.unique[0]) ? rules.unique[0] : rules.unique,
    )) {
        validation.valid = false;
        validation.message = (Array.isArray(rules.unique[0]) && rules.unique[1]) || validator.unique.errorMessage;
    }

    if (rulesIncluded.includes('regex') && rules.regex && !validator.regex.test(
        value,
        Array.isArray(rules.regex) ? rules.regex[0] : rules.regex,
    )) {
        validation.valid = false;
        validation.message = (Array.isArray(rules.regex) && rules.regex[1]) || validator.regex.errorMessage;
    }

    if (rulesIncluded.includes('custom') && rules.custom && !rules.custom[0](value)) {
        validation.valid = false;
        validation.message = rules.custom[1];
    }

    return validation;
};

export default validate;

import { Validation, ValidationRules } from './type';
import validator from './validators';

export const validate = (value: string, rules: ValidationRules = {}): Validation => {
    const validation: Validation = { valid: true, message: undefined };
    const rulesIncluded = Object.keys(rules);
    console.log(validation)
    if (rulesIncluded.includes('required') && !validator.required.test(value)) {
        validation.valid = false;
        validation.message = validator.required.errorMessage;
    }

    if (rulesIncluded.includes('unique') && rules.unique && !validator.unique.test(value, rules.unique)) {
        validation.valid = false;
        validation.message = validator.unique.errorMessage;
    }

    if (rulesIncluded.includes('regex') && rules.regex && !validator.regex.test(value, rules.regex)) {
        validation.valid = false;
        validation.message = validator.regex.errorMessage;
    }

    return validation;
};

import { Validation, ValidationRules } from '../type';
import validator from '../definitions/validators';

const validate = (value: string, rules: ValidationRules = {}): Validation => {
    const validation: Validation = { valid: true, messages: [], display: true };
    const rulesIncluded = Object.keys(rules);

    if (rulesIncluded.includes('required') && !validator.required.test(value)) {
        validation.messages.push({
            type: 'required',
            text: (Array.isArray(rules.required) && rules.required[1]) || validator.required.errorMessage,
        });
    }

    if (rulesIncluded.includes('unique') && rules.unique && !validator.unique.test(
        value,
        // eslint-disable-next-line
        // @ts-ignore:next-line
        Array.isArray(rules.unique[0]) ? rules.unique[0] : rules.unique,
    )) {
        validation.messages.push({
            type: 'unique',
            text: (Array.isArray(rules.unique[0]) && rules.unique[1]) || validator.unique.errorMessage,
        });
    }

    if (rulesIncluded.includes('regex') && rules.regex && !validator.regex.test(
        value,
        Array.isArray(rules.regex) ? rules.regex[0] : rules.regex,
    )) {
        validation.messages.push({
            type: 'regex',
            text: (Array.isArray(rules.regex) && rules.regex[1]) || validator.regex.errorMessage,
        });
    }

    if (rulesIncluded.includes('custom') && rules.custom && !validator.custom.test(
        value,
        Array.isArray(rules.custom) ? rules.custom[0] : rules.custom,
    )) {
        validation.messages.push({
            type: 'custom',
            text: (Array.isArray(rules.custom) && rules.custom[1]) || validator.custom.errorMessage,
        });
    }

    validation.valid = validation.messages.length === 0;

    return validation;
};

export default validate;

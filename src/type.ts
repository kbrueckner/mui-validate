export type Validation = {
    valid: boolean;
    message?: string;
}

export type ValidationCollection = {
    [key: string]: Validation;
};

export type ValidationRuleRequired = boolean | [boolean, string];

export type ValidationRuleUnique = string[] | [string[], string];

export type ValidationRuleRegex = RegExp | [RegExp, string];

export type ValidationRuleCustom = [(value: string) => boolean, string];

export type ValidationRules = {
    required?: ValidationRuleRequired;
    unique?: ValidationRuleUnique;
    regex?: ValidationRuleRegex;
    custom?: ValidationRuleCustom;
};

export type ValidationMode = 'silent' | 'noisy';

export type ValidationInfo = {
    validations: ValidationCollection;
    setValidations: (validations: ValidationCollection) => void;
    allValid: boolean;
    initialValidation: ValidationMode;
    validation: ValidationMode;
};

export type InputType = 'textfield' | 'select' | 'autocomplete' | 'picker';

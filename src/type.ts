export type ValidationMessageKey = 'required' | 'unique' | 'regex' | 'custom';

export type ValidationMessage = {
    type: ValidationMessageKey;
    text: string;
}

export type Validation = {
    valid: boolean;
    messages: ValidationMessage[];
    display: boolean;
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
    updateValidation: (key: string, value: Validation) => void;
    removeValidation: (key: string) => void;
    allValid: boolean;
    initialValidation: ValidationMode;
    validation: ValidationMode;
    initialState: ValidationCollection;
    autoDisablersWereTriggered: boolean;
    setAutoDisablersWereTriggered: (triggered: boolean) => void;
};

export type InputType = 'textfield' | 'select' | 'autocomplete' | 'picker';

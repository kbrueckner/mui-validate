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

export type CustomValidationFunction = (value: string) => boolean;

export type SingleValidationRuleCustom = CustomValidationFunction | [CustomValidationFunction, string];

export type ValidationRuleCustom = SingleValidationRuleCustom | SingleValidationRuleCustom[];

export type ValidationRules = {
    required?: ValidationRuleRequired;
    unique?: ValidationRuleUnique;
    regex?: ValidationRuleRegex;
    custom?: ValidationRuleCustom;
};

export type ValidationMode = 'silent' | 'noisy';

export type ValidationInfo = {
    validations: ValidationCollection;
    // setValidations: (validations: ValidationCollection) => void;
    setValidations: Function;
    updateValidation: (key: string, value: Validation) => void;
    removeValidation: (key: string) => void;
    allValid: boolean;
    initialValidation: ValidationMode;
    validation: ValidationMode;
    initialState: ValidationCollection;
    autoDisablersWereTriggered: boolean;
    setAutoDisablersWereTriggered: (triggered: boolean) => void;
};

export type InputType = 'textfield' | 'select' | 'autocomplete' | 'picker' | 'datepicker';

export type ValidateRef = undefined | null | {
    validate: () => void,
    name: string;
    value: string | Date | number | null | undefined;
};

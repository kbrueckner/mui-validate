export type Validation = {
    valid: boolean;
    message?: string;
}

export type ValidationCollection = {
    [key: string]: Validation;
};

export type ValidationRules = {
    required?: boolean;
    unique?: string[];
    regex?: RegExp;
};

export type ValidationInfo = {
    validations: ValidationCollection;
    setValidations: (validations: ValidationCollection) => void;
    allValid: boolean;
};

// eslint-disable-next-line
import React, { RefObject, useEffect, useImperativeHandle, useState } from 'react';
import { FormControl, FormHelperText, Box } from '../mui-loader';
import {
    ValidationRuleRegex, ValidationRuleRequired, ValidationRules,
    ValidationRuleUnique, Validation, ValidationRuleCustom, InputType,
    ValidationMode,
} from '../type';
import { useValidation } from './ValidationContext';
import validate from '../fns/validation-fns';
import { detectInputType, getValueFromAutocomplete } from '../fns/helper-fns';

export type ValidateProps = {
    name: string;
    id?: string;
    required?: ValidationRuleRequired;
    unique?: ValidationRuleUnique;
    regex?: ValidationRuleRegex;
    custom?: ValidationRuleCustom;
    after?: (result: Validation) => void;
    before?: () => void;
    inputType?: 'detect' | InputType;
    initialValidation?: ValidationMode;
    validation?: ValidationMode;
    children: JSX.Element & { fullWidth?: boolean; labelId?: string; };
    // eslint-disable-next-line
    reference?: RefObject<any>; // the name ref is reserved for html object referencing
    // eslint-disable-next-line
    triggers?: RefObject<any> | RefObject<any>[];
};

export type AdditionalProps = {
    onChange: Function;
    helperText?: string;
    error?: boolean;
};

const Validate = ({
    children, name, required, unique, regex, custom, after, before, triggers = [],
    initialValidation, validation, inputType = 'detect', id, reference = { current: {} },
}: ValidateProps): JSX.Element => {
    const [val, setVal]: [string, Function] = useState(children.props.value || '');

    // eslint-disable-next-line
    const {
        validations, updateValidation,
        initialValidation: initialValidationSetting,
        validation: validationSetting,
    } = useValidation();
    const initialValidationDerrived = initialValidation || initialValidationSetting;
    const validationDerrived = validation || validationSetting;
    const detectedInputType: InputType = inputType === 'detect' ? detectInputType(children.props) : inputType;

    useEffect(() => {
        if (children.props.value !== undefined) {
            let value = '';

            if (detectedInputType === 'autocomplete') {
                value = getValueFromAutocomplete(children.props.value, children);
            // eslint-disable-next-line
            }
            // picker
            else if (detectedInputType === 'picker') {
                if (children.props.value) {
                    try {
                        value = new Date(children.props.value).toISOString();
                    } catch (e) {
                        value = '';
                    }
                }
            // eslint-disable-next-line
            }
            // textfield and select
            else if (['textfield', 'select'].includes(detectedInputType)) {
                value = children.props.value;
            }
            console.log('new prop val', value);
            setVal(value);
        }
    }, [children.props.value]);

    // Validation rules which will be applied
    const validationRules: ValidationRules = {};
    if (required) { validationRules.required = required; }
    if (unique !== undefined) { validationRules.unique = unique; }
    if (regex !== undefined) { validationRules.regex = regex; }
    if (custom !== undefined) { validationRules.custom = custom; }

    // map triggerRefs into array if not already one
    const triggerRefsArray = Array.isArray(triggers) ? triggers : [triggers];

    // Initial validations during first child component rendering
    // all supported child types (so far) define an initial value in the component attribut 'value'
    if (validations[name] === undefined && Object.keys(validationRules).length > 0) {
        let value;
        if (detectedInputType === 'autocomplete') {
            value = getValueFromAutocomplete(children.props.value, children);
        } else {
            value = children.props.value || '';
        }
        const validationResult = validate(value, validationRules);
        if (initialValidationDerrived === 'silent') { validationResult.display = false; }
        updateValidation(name, validationResult);
    }

    const doValidation = (): Validation => {
        console.log(val, validationRules);
        const validationResult = validate(val, validationRules);
        if (validationDerrived === 'silent') { validationResult.display = false; }
        updateValidation(name, validationResult);

        // console.log(name, validationResult.valid, validations[name]?.valid);
        return validationResult;
    };

    // eslint-disable-next-line
    const getValue = (args: any[]): String => {
        // value to be found from underlying component
        let value = '';

        // autocomplete sends the attached option in the second parameter
        // in case no option is selected null is sent instead
        if (detectedInputType === 'autocomplete') {
            value = getValueFromAutocomplete(args[1], children);
        // eslint-disable-next-line
        }
        // picker send a date object or 'Invalid Date' as the first parameter
        else if (detectedInputType === 'picker') {
            if (args[0]) {
                try {
                    value = new Date(args[0]).toISOString();
                } catch (e) {
                    value = '';
                }
            }
        // eslint-disable-next-line
        }
        // textfield and select send a regular event as first parameter
        else if (['textfield', 'select'].includes(detectedInputType)) {
            const { value: eventValue = '' } = args[0].target;
            value = eventValue;
        }

        return value;
    };

    // eslint-disable-next-line
    const onChange = (...args: any[]): void => {
        if (children.props.onChange) {
            children.props.onChange(...args);
        }

        // before hook operations
        if (before) { before(); }

        setVal(getValue(args));
    };

    useEffect(() => {
        const validationResult = doValidation();

        // after hook operations
        if (after) { after(validationResult); }

        // triggerRef to trigger validations of linked validates
        // eslint-disable-next-line
        // @ts-ignore
        setTimeout(() => triggerRefsArray.forEach((tRef: RefObject<any>) => {
            tRef.current.validate();
            console.log(tRef);
        }), 50);
    }, [val]);

    useImperativeHandle(reference, () => ({
        validate: () => { console.log('cross triggered'); doValidation(); },
        name,
        // eslint-ignore-next-line
        // @ts-ignore
        value: children.props.value,
    }));

    const addedProps: AdditionalProps = {
        onChange,
    };

    type ValidationState = {
        hasError: boolean;
        displayError: boolean;
        message: string;
    };

    const [validationState, setValidationState]: [ValidationState, Function] = useState({
        hasError: false,
        displayError: false,
        message: '',
    });

    // testing
    useEffect(() => {
        console.log(name, validations[name]);
        // lookup if error exists
        const hasError = validations[name]?.valid === false;
        // lookup if error exists and shall be displayed
        const displayError = hasError && validations[name]?.display;
        // calculate the message to be displayed
        const message = displayError ? validations[name].messages[0].text : '';

        setValidationState({ hasError, displayError, message });
    }, [validations[name]]);

    // // lookup if error exists
    // const hasError = validations[name]?.valid === false;
    // // lookup if error exists and shall be displayed
    // const displayError = hasError && validations[name]?.display;
    // // calculate the message to be displayed
    // const message = displayError ? validations[name].messages[0].text : '';
    const { hasError, displayError, message } = validationState;

    // This block is specifically for TextFields
    if (displayError) {
        addedProps.helperText = '';
        addedProps.error = true;
    }

    // in case there is a labelId set on the validation child, we can assume
    // that it is inside a form control, thus we cannot wrap with an own control
    // but must reuse the existing one
    const { labelId } = children.props;
    const wrapperProps = {
        error: labelId ? undefined : displayError,
        style: {
            width: children.props.fullWidth === true ? '100%' : undefined,
            display: labelId ? 'inline-block' : undefined,
        },
        'data-has-error': hasError,
        'data-has-message': message !== '',
        id,
    };
    // Form control needs to always be present so that the alignment of the
    // helper text is correct
    const Wrapper = labelId ? Box : FormControl;
    // console.log('props', wrapperProps);
    return (
        <Wrapper
            {...wrapperProps}
        >
            {React.cloneElement(children, addedProps)}
            <FormHelperText error={displayError}>{message}</FormHelperText>
        </Wrapper>
    );
};

Validate.displayName = 'Validate';
export default Validate;

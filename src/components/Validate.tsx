// eslint-disable-next-line
import React, { RefObject, useEffect, useImperativeHandle, useLayoutEffect, useState } from 'react';
import { FormControl, FormHelperText, Box } from '@mui/material';
import {
    ValidationRuleRegex, ValidationRuleRequired, ValidationRules,
    ValidationRuleUnique, Validation, ValidationRuleCustom, InputType,
    ValidationMode,
} from '../type';
import { useValidation } from './ValidationContext';
import validate from '../fns/validation-fns';
import { detectInputType, getValueFromAutocomplete } from '../fns/helper-fns';

type ValidationState = {
    hasError: boolean;
    displayError: boolean;
    message: string;
};

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
    classes?: {
        root?: string;
        message?: string;
    }
};

export type AdditionalProps = {
    onChange: Function;
    helperText?: string;
    error?: boolean;
};

const Validate = ({
    children, name, required, unique, regex, custom, after, before, triggers = [], classes = {},
    initialValidation, validation, inputType = 'detect', id, reference = { current: {} },
}: ValidateProps): JSX.Element => {
    // val reflects the actual value, which is updated on every cvhange event
    // it needs to be persisted so that cross-triggers do have a calculation base
    const [val, setVal]: [string, Function] = useState(children.props.value || '');

    // state required for judging if initial validation is passed
    const [initialValidationPassed, setInitialValidationPassed]: [boolean, Function] = useState(false);

    // visualization state used to render the visual elements
    const [validationState, setValidationState]: [ValidationState, Function] = useState({
        hasError: false,
        displayError: false,
        message: '',
    });

    // eslint-disable-next-line
    const {
        validations, updateValidation,
        initialValidation: initialValidationSetting,
        validation: validationSetting,
    } = useValidation();
    const initialValidationDerrived = initialValidation || initialValidationSetting;
    const validationDerrived = validation || validationSetting;
    const detectedInputType: InputType = inputType === 'detect' ? detectInputType(children.props) : inputType;

    const ROOT_CLASS_NAME = `mui-validate__validate-root${classes?.root ? ` ${classes.root}` : ''}`;
    const MESSAGE_CLASS_NAME = `mui-validate__validate-message${classes?.message ? ` ${classes.message}` : ''}`;

    // wheneever ther incoming value changes the most recent value needs to be persisted into val
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

            setVal(value);
        }
    }, [children.props.value]);

    // Validation rules which will be applied
    const validationRules: ValidationRules = {};
    if (required) { validationRules.required = required; }
    if (unique !== undefined) { validationRules.unique = unique; }
    if (regex !== undefined) { validationRules.regex = regex; }
    if (custom !== undefined) { validationRules.custom = custom; }

    // Initial validations before first child component rendering
    // all supported child types (so far) define an initial value in the component attribut 'value'
    useLayoutEffect(() => {
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
    });

    // validate and return validation result
    const doValidation = (): Validation => {
        const validationResult = validate(val, validationRules);
        if (validationDerrived === 'silent' || (initialValidationDerrived === 'silent' && !initialValidationPassed)) { validationResult.display = false; }
        updateValidation(name, validationResult);

        // set initialValidationPassed if nort yet done
        if (!initialValidationPassed) {
            setInitialValidationPassed(true);
        }

        return validationResult;
    };

    // extract value from event paload
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

    // validate on every change of val
    // this appears after change event has been fired
    // or value is changed from outside for controlled components
    useEffect(() => {
        if (val === undefined) { return; }
        const validationResult = doValidation();

        // after hook operations
        if (after) { after(validationResult); }

        // map triggers into array if not already one
        const triggerRefsArray = Array.isArray(triggers) ? triggers : [triggers];

        // trigger validations of linked validates
        // we give us a little buffer time before the trigger so that all external value changhes
        // have already been processed before the -re-validation
        // eslint-disable-next-line
        // @ts-ignore
        setTimeout(() => triggerRefsArray.forEach((tRef: RefObject<any>) => {
            if (tRef.current && tRef.current.validate) { tRef.current.validate(); }
        }), 50);
    }, [val]);

    // enrich passed in reference object to make revalidation available
    useImperativeHandle(reference, () => ({
        validate: () => { doValidation(); },
        name,
        // eslint-disable-next-line
        // @ts-ignore
        value: children.props.value,
    }));

    const addedProps: AdditionalProps = {
        onChange,
    };

    // update visualization state on validation result change
    useEffect(() => {
        // lookup if error exists
        const hasError = validations[name]?.valid === false;
        // lookup if error exists and shall be displayed
        const displayError = hasError && validations[name]?.display;
        // calculate the message to be displayed
        const message = displayError ? validations[name].messages[0].text : '';

        setValidationState({ hasError, displayError, message });
    }, [validations]);

    // read the visualization state
    const { hasError, displayError, message } = validationState;

    // This block is specifically for TextFields
    if (displayError) {
        addedProps.helperText = undefined;
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
        'data-has-error': hasError.toString(),
        'data-has-message': message !== '',
        id,
        className: ROOT_CLASS_NAME,
    };
    // Form control needs to always be present so that the alignment of the
    // helper text is correct
    const Wrapper = labelId ? Box : FormControl;

    return (
        <Wrapper
            {...wrapperProps}
        >
            {React.cloneElement(children, addedProps)}
            { displayError && <FormHelperText error className={MESSAGE_CLASS_NAME}>{message}</FormHelperText> }
        </Wrapper>
    );
};

Validate.displayName = 'Validate';
export default Validate;

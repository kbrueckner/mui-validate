# MUI Validate

This validation module allows you to validate inputs for [Material-UI (v4)](https://www.npmjs.com/package/@material-ui/core) and [Material-UI (v5)](https://www.npmjs.com/package/@mui/material) input components such as TextField and Select.
Multiple inputs can be grouped together into a validation group.
Based on the validity of a validation group buttons in the group can be enabled/disabled automatically.
The current state of a validation group can be accessed via a react hook.

Goal of this project is to wrap Material-UI components with validators instead of creating them via validation components. The advantage of this is that you can stay Material-UI native while writing templates.

## How to use it

### Defining a validation group

In order to validate input components they must be wrapped into a ValidationGroup component. It is possible to wrap a single or multiple inputs into a single group.

```js
import { ValidationGroup } from 'mui-validate';

export default () => (
    <ValidationGroup>
        <>
            ...
            <TextField />
            ...
        </>
    </ValidationGroup>
)
```

The ValidationGroup component has the following attributes:

Attribute|Mandatory|Type|Default|Description
--|--|--|--|--
initialState|-|ValidationCollection|{}|Initial state passed in to the validation group. This is an optional attribute. The state will be updated/calculated automatically based on the Validate components inside the ValidationGroup.
initialValidation|-|'silent' \| 'noisy'|'silent'|In noisy mode all validated input elements in the group are highlighted and display the error messages, in silent mode they remain without highlighting and error messages. initialValidation is taken into consideration at initial component rendering before the value of the input component was updated.
validation|-|'silent' \| 'noisy'|'noisy'|In noisy mode all validated input elements in the group are highlighted and display the error messages, in silent mode they remain without highlighting and error messages. validation is taken into consideration after each update of the input components value.

### Add validation to input elements

#### Simple usage

```js
import { Validate } from 'mui-validate';

export default () => (
    <ValidationGroup>
        <>
            ...
            <Validate name="internal key 1" required>
                <TextField />
            </Validate>
            <Validate name="internal key 2" unique={['a', 'b']}>
                <TextField />
            </Validate>
            <Validate name="internal key 3" regex={/^\d{0,5}$/}>
                <TextField />
            </Validate>
            <Validate name="internal key 4" custom={[(value) => value === 'expected value', 'Custom validation failed!']}>
                <TextField />
            </Validate>
            ...
        </>
    </ValidationGroup>
)
```

#### Usage with custom error messages

To override default error messages just provide the validation rule together with the desired error message.
The format for this is an array with the first value being the validation rule and the second value represents the custom error message.

```js
import { Validate } from 'mui-validate';

export default () => (
    <ValidationGroup>
        <>
            ...
            <Validate name="internal key 1" required={[true, 'Custom message for required']}>
                <TextField />
            </Validate>
            <Validate name="internal key 2" unique={[['a', 'b'], 'Custom message for unique']}>
                <TextField />
            </Validate>
            <Validate name="internal key 3" regex={[/^\d{0,5}$/, 'Custom message for regex']}>
                <TextField />
            </Validate>
            ...
        </>
    </ValidationGroup>
)
```

#### Trigger linked Validate after validation of another Input Component

We might encounter the case where custom validations are depending on 2 or more input elements. Thus the linked inputs need to be (re-)validated together or trigger oneanother. This can be achieved via reference and triggers in combination as shown below. 

```js
import { useRef, useState } from 'react';
import { Validate } from 'mui-validate';

export default () => {
    const [linkedValue, setLinkedValue]: [string, Function] = useState('');
    const linkedRef = useRef();
    
    return (
        <ValidationGroup>
            <>
                ...
                <Validate name="internal key 1" custom={[() => !!linkedValue, 'Textfield 2 is empty']} reference={linkedRef}>
                    <TextField />
                </Validate>
                <Validate name="internal key 2" triggers={linkedRef}>
                    <TextField value={linkedValue} onChange={(evt) => setLinkedValue(evt.target.value)}} />
                </Validate>
                ...
            </>
        </ValidationGroup>
    );
}
```

The Validate component has the following attributes and validation rules:

Attribute|Mandatory|Type|Default|Description
--|--|--|--|--
name|x|string| |Unique internal identifier for the validation
inputType|-|'detect' \| 'textfield' \| 'select' \| 'autocomplete' \| 'picker'|'detect'|Type of the encapsulated input i.e. textfield or select, when set to detect it will be tried to find the right input type automatically which could be error prone.
required|-|bool \| [bool, string]|true|Tests for a value to be set
unique|-|string[] \| [string[], string]| |Checks the provided value to not be in a list of provided values
regex|-|regexp \| [regexp, string]| |Tests against a given regular expression
custom|-|[func, string]| |Array with first value to be a custom validation function (passed in argument is the input value, output must be a boolean representation of the validation success) and second value to be the error message which is displayed in failure case
before|-|func| |Hook for functionality triggered before validation
after|-|func| |Hook for functionality triggered after validation (with access to the validation result)
initialValidation|-|'silent' \| 'noisy'| |This overrides the definition made on ValidationGroup level. In noisy mode the validated input element is highlighted and displays the error message, in silent mode it remains without highlighting and error message.
validation|-|'silent' \| 'noisy'| |This overrides the definition made on ValidationGroup level. In noisy mode the validated input element is highlighted and displays the error message, in silent mode it remains without highlighting and error message.
reference|-|RefObject|-|React RefObject which enables cross validation triggering
triggers|-|RefObject \| RefObject[]|-|React RefObject(s) which will be automatically triggered for (re-)validation if current objects validation fiinished.

### Supported input elements and validators

Element|required|unique|regex|custom
--|--|--|--|--
TextField|x|x|x|x
Select|x|x|x|x
Autocomplete|x|x*|x*|x*
Pickers|x|x**|x**|x**

\* Value passed to the validation function will either be a simple string when options are filled with strings or the string value calculated by getOptionLabel for complex options.

** Value passed to the validation function is for valid dates the ISO string representation of the date or an empty string for invalid dates

## Automatically disable buttons based on validation state

To automatically disable a Material UI Button on validation failures the button can be wrapped into an AutoDisabler component.

```js
import { AutoDisabler } from 'mui-validate';

export default () => (
    <ValidationGroup>
        <>
            ...
            <AutoDisabler>
                <Button />
            </AutoDisabler>
            ...
        </>
    </ValidationGroup>
)
```

Attribute|Mandatory|Type|Default|Description
--|--|--|--|--
firstDisplayErrors|-|boolean|false|If set to true the button will be enabled on silent errors but on the first hit of the button it will disable and all error message which were in silent mode are shown immediately. If at least one error is noisy - means one error message is diplayed - the button will be disabled even if there was no first click on it yet.

## Automatically hide components based on validation state

To automatically hide elements on validation failures components can be wrapped into an AutoHide component.
A typical use case for that is FormHelperTexts in a FormControl which you only want to display when there is no validation error.

```js
import { AutoHide } from 'mui-validate';

export default () => (
    <ValidationGroup>
        <>
            ...
            <AutoHide validationName="validationKey">
                <FormHelperText>
                    This text is only displayed when the validation result is valid
                </FormHelperText>
            </AutoHide>
            ...
        </>
    </ValidationGroup>
)
```

Attribute|Mandatory|Type|Default|Description
--|--|--|--|--
validationName|x|string|-|Validation key as defined in the name field of Validate

## Show consolidated error list

The ErrorList renders all errors in list format at a single spot in addition to the corresponding error messages directly on the validated elements.

```js
import { ErrorList } from 'mui-validate';

export default () => (
    <ValidationGroup>
        <>
            ...
            <ErrorList />
            ...
        </>
    </ValidationGroup>
)
```

The ErrorList component has the following attributes:

Attribute|Mandatory|Type|Default|Description
--|--|--|--|--
title|-|string|-|Optional title displayed above the error listing.
alwaysVisible|-|boolean|false|In general the ErrorList is only rendered when there are errors detected. To permanently make it visible with a text indicating that there are no errors set alwaysVisible to true.
noErrorsText|-|string|'No errors detected'|Text displayed when no errors are detected - only rendered when alwaysVisible is set to true.
titleVariant|-|'body1' \| 'body2' \| 'button' \| 'caption' \| 'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6' \| 'inherit' \| 'overline' \| 'subtitle1' \| 'subtitle2'|'subtitle1'|Specifies the title typography variant based on Material UI Typography variant definitions.
errorVariant|-|'body1' \| 'body2' \| 'button' \| 'caption' \| 'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6' \| 'inherit' \| 'overline' \| 'subtitle1' \| 'subtitle2'|'caption'|Specifies the error messages typography variant based on Material UI Typography variant definitions.
titleColor|-|'inherit' \| 'primary' \| 'secondary' \| 'textPrimary' \| 'textSecondary' \| 'error'|'inherit'|Color definition for list title and no errors message
errorColor|-|'inherit' \| 'primary' \| 'secondary' \| 'textPrimary' \| 'textSecondary' \| 'error'|'error'|Color definition for error messages in the list

## Programatic access to validation context

If programatic access to the validation is required the hook useValidation() can be used.

```js
import { useValidation } from 'mui-validate';

export default () => {
    const {
        validations, setValidations, allValid, initialValidation, updateValidation,
        autoDisablersWereTriggered, setAutoDisablersWereTriggered
    } = useValidation();

    return (
        <SomeComponent />
    )
}
```

The returned object contains:

Attribute|Description
--|--
allValid|Boolean value to hold information if no issues occured in validation group
validations|Collection of all validations and their statuses
updateValidation|Setter for a single validation inside validations (recommended over setValidations)
setValidations|Setter to update validations object
initialValidation|Setting for initialValidation on group level
validation|Setting for validation on group level
autoDisablersWereTriggered|Indicator wheather at least one enabled AutoDisabler has been clicked
setAutoDisablersWereTriggered|Setter for AutoDisabler indicator

## Support the project

You can support this project by reporting issues which you encounter. Ideas for improvements or feature requests are also welcome.
Please raise them [here](https://github.com/kbrueckner/mui-validate/issues).

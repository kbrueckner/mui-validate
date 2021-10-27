# MUI Validate

This validation module allows you to validate inputs for [Material-UI](https://www.npmjs.com/package/@material-ui/core) input components such as TextField and Select.
Multiple inputs can be grouped together into a validation group.
Based on the validity of a validation group buttons in the group can be enabled/disabled automatically.
The current state of a validation group can be accessed via a react hook.

Goal of this project is to wrap Material-UI components with validators instead of creating them via validation components. The advantage of this is that you can stay Material-UI native while writing templates.

## How to use it

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
initialValidation|-|'silent' or 'noisy'|'silent'|In noisy mode all validated input elements in the group are highlighted and display the error messages, in silent mode they remain without highlighting and error messages.
validation|-|'silent' or 'noisy'|'noisy'|In noisy mode all validated input elements in the group are highlighted and display the error messages, in silent mode they remain without highlighting and error messages.

### Simple usage

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

### Custom error messages

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

The Validate component has the following attributes and validation rules:

Attribute|Mandatory|Type|Default|Description
--|--|--|--|--
name|x|string| |Unique internal identifier for the validation
inputType|-|'detect', 'textfield', 'select', 'autocomplete' or 'picker'|'detect'|Type of the encapsulated input i.e. textfield or select, when set to detect it will be tried to find the right input type automatically which could be error prone.
required|-|bool or [bool, string]|true|Tests for a value to be set
unique|-|string[] or [string[], string]| |Checks the provided value to not be in a list of provided values
regex|-|regexp or [regexp, string]| |Tests against a given regular expression
custom|-|[func, string]| |Array with first value to be a custom validation function (passed in argument is the input value, output must be a boolean representation of the validation success) and second value to be the error message which is displayed in failure case
before|-|func| |Hook for functionality triggered before validation
after|-|func| |Hook for functionality triggered after validation (with access to the validation result)
initialValidation|-|'silent' or 'noisy'| |This overrides the definition made on ValidationGroup level. In noisy mode the validated input element is highlighted and displays the error message, in silent mode it remains without highlighting and error message.
validation|-|'silent' or 'noisy'| |This overrides the definition made on ValidationGroup level. In noisy mode the validated input element is highlighted and displays the error message, in silent mode it remains without highlighting and error message.


To automatically disable a Material UI Button on validation failure the button can be wrapped into an AutoDisabler component.

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

## Supported input elements and validators
Element|required|unique|regex|custom
--|--|--|--|--
TextField|x|x|x|x
Select|x|x|x|x
Autocomplete|x|-|-|x
Pickers|x|-|-|x

On some element types not all default validators are supported. This is due to the fact that those types do not return just a single string value but complex objects. To achieve the same validation, write a custom validator.

## Programatic access

If programatic access to the validation is required the hook useValidation() can be used.

```js
import { useValidation } from 'mui-validate';

export default () => {
    const { validations, setValidations, allValid, initialValidation } = useValidation();

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
setValidations|Setter to update validations object
initialValidation|Setting for initialValidation on group level
validation|Setting for validation on group level

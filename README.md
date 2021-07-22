# MUI Validate

The validate module allows yout to validate inputs for Material UI input components such as TextField and Select.
Multiple inputs can be grouped together into a validation group.
Based on the validity of a validation group buttons in the group can be deactivated enabled/disabled automatically.
The current state of a validation group can be accessed via a react hook.

## How to use it

In order to validate input components they must be wrapped into a ValidationGroup component. It is possible to wrap a single or multiple inputs into a group.

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

Input components which shall be validated are wrapped within the Validate component.

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
            ...
        </>
    </ValidationGroup>
)
```

The Validate component has the following attributes and validation rules:
- name (mandatory) - unique internal identifier for the validation
- required (optional) - boolean value to mark the textfield as required
- unique (optional) - string array to check the textfield value against
- regex (optional) - regular expression to be tested against

To automatically disable a Material UI Button on validation failure the button can be wrapped into a AutoDisabler component.

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

## Custom error messages

To override default error messages just provide the validation rule together with the desired error message.
The format for this is an array wit hthe first value being the validation rule and the second value represents the custom error message.

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

## Programatic access

If programatic access to the validation is required the hook useValidation() can be used.

```js
import { useValidation } from 'mui-validate';

export default () => {
    const { validations, setValidations, allValid } = useValidation();

    return (
        <SomeComponent />
    )
}
```

The returned object contains:
- allValid - boolean value to hold information if no issues occured in validation group
- validations - the collection of all validations and their statuses
- setValidations - setter to update validations object

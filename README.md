# MUI Validate

## Overview

This validation module allows you to validate inputs for [Material-UI](https://www.npmjs.com/package/@mui/material) input components such as TextField and Select.
Multiple inputs can be grouped together into a validation group.
Based on the validity of a validation group buttons in the group can be enabled/disabled and elements can be hidden automatically.
The current state of a validation group can be accessed via a react hook.

Goal of this project is to wrap Material-UI components with validators instead of creating them via validation components. The advantage of this is that you can stay Material-UI native while writing templates.

## Getting started

### Installation

```javascript
npm install --save mui-validate
```

or

```javascript
yarn add mui-validate
```

### Peer dependencies

Peer dependencies for mui-validate are react and @mui/material.

```javascript
"peerDependencies": {
    "@mui/material": "5.x",
    "react": "^17.0.0 || ^18.0.0"
},
```

### Usage

The most basic example on how to use mui-validate is as follows.

```javascript
<ValidationGroup>
    <Validate name="Textfield required" required>
        <TextField />
    <Validate>
    <AutoDisabler>
        <Button>Click me</Button>
    </AutoDisabler>
</ValidationGroup>
```

How does it work in detail?

The ValidationGroup handles the state of 1 or more validations.

Each Validate will add listeners to the change event of the wrapped input components and validate against the defined rules - in the given example is checks if a value is set.

AutoDisabler disables the wrapped button if there is at least one validation failing.

For details and configuration options please refer to the corrosponding component documentation.

## Components

* [ValidationGroup](doc/components/ValidationGroup.md)
* [Validate](doc/components/Validate.md)

## Examples/Special Cases

* [Cross Validation](doc/examples/cross-validation.md) - Value change of an input component triggers re-validation of another input component









## How to use it





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
renderErrorMessage|-|(validationName: string, errorMessage: string) => string|'validationName: errorMessage'|Function to override default error list item message

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

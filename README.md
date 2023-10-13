# MUI Validate

## Overview

This validation module allows you to validate [Material-UI](https://www.npmjs.com/package/@mui/material) input components such as TextField and Select.
Multiple inputs can be grouped together into a validation group.
Based on the validity of a validation group, buttons in the group can be enabled/disabled and elements hidden automatically.
The state of a validation group is accessible via a react hook.

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
* [AutoDisabler](doc/components/AutoDisabler.md)
* [AutoHide](doc/components/AutoHide.md)
* [ErrorList](doc/components/ErrorList.md)

## Hooks

* [useValidation](doc/hooks/useValidation.md)

## Examples/Special Cases

* [Cross Validation](doc/examples/cross-validation.md) - Value change of an input component triggers re-validation of another input component

## Support the project

You can support this project by reporting issues which you encounter. Ideas for improvements or feature requests are also welcome.
Please raise them [here](https://github.com/kbrueckner/mui-validate/issues).

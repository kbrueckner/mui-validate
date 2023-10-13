[<< back to overview](../../README.md)

# AutoHide

To automatically hide elements on validation failures of a specific validation, components can be wrapped into an AutoHide component.
A typical use case for that is FormHelperTexts in a FormControl which you only want to display when there is no validation error.

## Usage

```javascript
<AutoHide validationName="validationKey">
    <FormHelperText>
        This text is only displayed when the validation result is valid
    </FormHelperText>
</AutoHide>
```

## Props

### validationName (mandatory)

Validation key as defined in the name prop of Validate

Type: string

#### Usage

```javascript
<AutoHide validationName="validationKey">
    ...
</AutoHide>
```

[<< back to overview](../../README.md)

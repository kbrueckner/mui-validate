[<< back to overview](../../README.md)

# AutoDisabler

To automatically disable a Material UI Button on validation failures the button can be wrapped into an AutoDisabler component.

## Usage

```javascript
<AutoDisabler>
    <Button />
</AutoDisabler>
```

## Props

### firstDisplayErrors (optional)

If set to true the button will be enabled on silent errors but on the first hit of the button it will disable and all error message which were in silent mode are shown immediately.

If at least one error is noisy - means one error message is diplayed - the button will be disabled even if there was no first click on it yet.

Type: boolean

Defaults to: false

#### Usage

```javascript
<AutoDisabler>
    ...
</AutoDisabler>
```

[<< back to overview](../../README.md)

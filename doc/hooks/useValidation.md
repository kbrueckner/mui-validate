[<< back to overview](../../README.md)

# useValidation

The useValidation hook gives programmatic access to the ValidationGroups state und essential functionality.

## Usage

```javascript
const validationState = useValidation();
```

## Props

### initialState

Holds information about the initial state the validation group was initialized with. It does not reflect the current state - refer to validations instead.

Type: ValidationCollection

#### Usage

```javascript
const { initialState } = useValidation();
```

### validations

Collection of all validations and their status.

Type: ValidationCollection

#### Usage

```javascript
const { validations } = useValidation();
```

### updateValidation

Setter for a single validation inside validations (recommended over setValidations).

Type: (key: string, value: Validation) => void

#### Usage

```javascript
const { updateValidation } = useValidation();
```

### removeValidation

Removes a validation from the ValidationCollection.

Type: (name: string) => void

#### Usage

```javascript
const { removeValidation } = useValidation();
```

### setValidations

Setter to update complete validations object.

Type: (validations: ValidationCollection) => void

#### Usage

```javascript
const { setValidations } = useValidation();
```

### allValid

Holds information about the overall validity state of the group.

Type: boolean

#### Usage

```javascript
const { allValid } = useValidation();
```

### initialValidation

Setting of initialValidation on group level

Type: 'silent' | 'noisy'

#### Usage

```javascript
const { initialValidation } = useValidation();
```

### validation

Setting of validation on group level

Type: 'silent' | 'noisy'

#### Usage

```javascript
const { validation } = useValidation();
```

### autoDisablersWereTriggered

Indicator whether at least one enabled AutoDisabler has been clicked.

Type: boolean

#### Usage

```javascript
const { autoDisablersWereTriggered } = useValidation();
```

### setAutoDisablersWereTriggered

Setter for AutoDisabler triggered indicator.

Type: (triggered: boolean) => void

#### Usage

```javascript
const { setAutoDisablersWereTriggered } = useValidation();
```

[<< back to overview](../../README.md)

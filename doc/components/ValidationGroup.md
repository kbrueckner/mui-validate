[<< back to overview](../../README.md)

# ValidationGroup

Validation groups logically group validations. Every validation component (Validate) inside a group reports its validity state to it. The validation groups hold the state which can be accessed via a hook.

## Usage

```javascript
<ValidationGroup>
    ...
</ValidationGroup>
```

## Props

### initialState (optional)

Initial state passed in to the validation group. This is an optional attribute. The state will be updated/calculated automatically based on the Validate components inside the ValidationGroup.

Type: ValidationCollection Object

Defaults to: {} (empty state object)

#### Usage

```javascript
<ValidationGroup initialState={myInitialState}>
    ...
</ValidationGroup>
```

### initialValidation (optional)

The initialValidation attribute controls whether errors during first validation will be visual or not. In noisy mode all validated input elements in the group are highlighted and display the error messages, in silent mode they remain without highlighting and error messages. initialValidation is taken into consideration at initial component rendering before the value of the input component was updated.

Type: 'silent' | 'noisy'

Defaults to: 'silent'

#### Usage

```javascript
<ValidationGroup initialValidation="noisy">
    ...
</ValidationGroup>
```

### validation (optional)

The validation attribute controls whether errors during every but the first validation will be visual or not. In noisy mode all validated input elements in the group are highlighted and display the error messages, in silent mode they remain without highlighting and error messages. validation is taken into consideration after each update of the input components value.

Type: 'silent' | 'noisy'

Defaults to: 'noisy'

#### Usage

```javascript
<ValidationGroup validation="silent">
    ...
</ValidationGroup>
```

[<< back to overview](../../README.md)

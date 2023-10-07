[<< back to overview](../../README.md)

# Validate

Validate listens to change events of the wraped input component. The new value will be evaluated against the defined rules. It is possible to validate against a single rule or a combination of rules.

Supported input elements and validation rules are:

Element|required|unique|regex|custom
--|--|--|--|--
TextField|x|x|x|x
Select|x|x|x|x
Autocomplete|x|x*|x*|x*
Pickers|x|x**|x**|x**

\* Value passed to the validation function will either be a simple string when options are filled with strings or the string value calculated by getOptionLabel for complex options.

** Value passed to the validation function is for valid dates the ISO string representation of the date or an empty string for invalid dates

## Usage

```javascript
// validate against vlue present
<Validate name="internal key 1" required>
    <TextField />
</Validate>

// validate against value not in provided value list
<Validate name="internal key 2" unique={['a', 'b']}>
    <TextField />
</Validate>

// validate against a regular expression
<Validate name="internal key 3" regex={/^\d{0,5}$/}>
    <TextField />
</Validate>

// validate against a custom rule definition
<Validate name="internal key 4" custom={[(value) => value === 'expected value', 'Custom validation failed!']}>
    <TextField />
</Validate>
```

## Props

### name (mandatory)

Unique internal identifier for the validation

Type: string

#### Usage

```javascript
<Validate name="my identifier">
    ...
</Validate>
```

### inputType (optional)

Type of the wraped input i.e. textfield or select, when set to detect it will be tried to find the right input type automatically which could be error prone.

Type: 'detect' | 'textfield' | 'select' | 'autocomplete' | 'picker' (MUI X 5) | 'datepicker' (MUI X 6)

Defaults to: 'detect'

#### Usage

```javascript
<Validate name="my identifier" inputType="textfield">
    ...
</Validate>
```

### required (optional)

Checks for a value to be set. In case of validation failure an error message will be printed on the wrapped input component.

The rule comes with a default error message which can be overwritten.

Type: boolean | [boolean, string]

Defaults to: undefined

#### Usage

```javascript
// check for value present with default error message
<Validate name="my identifier" required>
    ...
</Validate>

// check for value present with custom error message
<Validate name="my identifier" required={[true, "This is a custom error message"]}>
    ...
</Validate>
```

### unique (optional)

Checks the provided value to not be in a list of provided values. In case of validation failure an error message will be printed on the wrapped input component.

The rule comes with a default error message which can be overwritten.

Type: string[] | [string[], string]

Defaults to: undefined

#### Usage

```javascript
// check for value not in provided list with default error message
<Validate name="my identifier" unique={["a", "b"]}>
    ...
</Validate>

// check for value not in provided list with custom error message
<Validate name="my identifier" unique={[["a", "b"], "This is a custom error message"]}>
    ...
</Validate>
```

### regex (optional)

Tests against a given regular expression. In case of validation failure an error message will be printed on the wrapped input component.

The rule comes with a default error message which can be overwritten.

Type: RegExp | [RegExp, string]

Defaults to: undefined

#### Usage

```javascript
// test against a given regular expression with default error message
<Validate name="my identifier" regex={/^\d{0,5}$/}>
    ...
</Validate>

// test against a given regular expression with custom error message
<Validate name="my identifier" regex={[/^\d{0,5}$/, "This is a custom error message"]}>
    ...
</Validate>
```

### custom (optional)

Checks against a custom defined validation function. Paramater for the custom function is the value after a change in the input field. The function must return the success status of the validation in boolean representation.
In case of validation failure an error message will be printed on the wrapped input component.

Type: [(value: string) => boolean, string]

Defaults to: undefined

#### Usage

```javascript
<Validate name="my identifier" custom={[(value) => value === "expected value",  "This is a custom error message"]}>
    ...
</Validate>
```

### before (optional)

A hook for functionality triggered before validation.

Type: () => void

Defaults to: undefined

#### Usage

```javascript
<Validate name="my identifier" before={customHookFunction}>
    ...
</Validate>
```

### after (optional)

A hook for functionality triggered after validation (with access to the validation result).

Type: (result: Validation) => void

Defaults to: undefined

#### Usage

```javascript
<Validate name="my identifier" after={customHookFunction}>
    ...
</Validate>
```

### initialValidation (optional)

This overrides the definition made on ValidationGroup level. In noisy mode the validated input element is highlighted and displays the error message, in silent mode it remains without highlighting and error message.

Type: 'silent' | 'noisy'

Defaults to: 'silent'

#### Usage

```javascript
<Validate name="my identifier" initialValidation="noisy">
    ...
</Validate>
```

### validation (optional)

This overrides the definition made on ValidationGroup level. In noisy mode the validated input element is highlighted and displays the error message, in silent mode it remains without highlighting and error message.

Type: 'silent' | 'noisy'

Defaults to: 'noisy'

#### Usage

```javascript
<Validate name="my identifier" validation="silent">
    ...
</Validate>
```

### reference (optional)

React RefObject which enables cross validation triggering.

Type: RefObject

Defaults to: undefined

#### Usage

```javascript
// create ref object to enable cross validation
const validationRef = useRef();

<Validate name="my identifier" reference={validationRef}>
    ...
</Validate>
```

### triggers (optional)

React RefObject(s) which will be automatically triggered for (re-)validation if current input field validation finished (independent whether successful or not).

Type: RefObject | RefObject[]

Defaults to: undefined

#### Usage

```javascript
/*
   ref object to use for cross validation
   this reference has to be passed to another Validate which has a connected validation (see reference prop)
*/
const validationRef = useRef();

<Validate name="my identifier" triggers={validationRef}>
    ...
</Validate>
```

### id (optional)

Id passed to the CSS id attribute for the validation wrapper (root).

Type: string

Defaults to: undefined

#### Usage

```javascript
<Validate name="my identifier" id="myId">
    ...
</Validate>
```

### classes (optional)

Object to define custom classes for the validation wrapper (root) and error message element (message).

Type: { root?: string, message?: string }

Defaults to: undefined

#### Usage

```javascript
<Validate name="my identifier" classes={{ root: 'rootClass', message: 'messageClass' }}>
    ...
</Validate>
```

[<< back to overview](../../README.md)

[<< back to overview](../../README.md)

# ErrorList

The ErrorList renders all errors in list format at a single spot in addition to the corresponding error messages directly on the validated elements.

## Usage

```javascript
<ErrorList />
```

## Props

### title (optional)

Optional title displayed above the error listing.

Type: string

Defaults to: undefined

#### Usage

```javascript
<ErrorList title="List of issues" />
```

### alwaysVisible (optional)

In general the ErrorList is only rendered when there are errors detected. To permanently make it visible with a text indicating that there are no errors set alwaysVisible to true.

Type: boolean

Defaults to: false

#### Usage

```javascript
<ErrorList alwaysVisible />
```

### noErrorsText (optional)

Text displayed when no errors are detected - only rendered when alwaysVisible prop is set to true.

Type: string

Defaults to: 'No errors detected'

#### Usage

```javascript
<ErrorList noErrorsText="Custom no errors message" />
```

### titleVariant (optional)

Specifies the title typography variant based on Material UI Typography variant definitions.

Type: 'body1' | 'body2' | 'button' | 'caption' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'inherit' | 'overline' | 'subtitle1' | 'subtitle2'

Defaults to: 'subtitle1'

#### Usage

```javascript
<ErrorList titleVariant="h3" />
```

### errorVariant (optional)

Specifies the error messages typography variant based on Material UI Typography variant definitions.

Type: 'body1' | 'body2' | 'button' | 'caption' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'inherit' | 'overline' | 'subtitle1' | 'subtitle2'

Defaults to: 'caption'

#### Usage

```javascript
<ErrorList errorVariant="body2" />
```

### titleColor (optional)

Color definition for list title and no errors message based on Material UI color definitions.

Type: 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error'

Defaults to: 'inherit'

#### Usage

```javascript
<ErrorList titleColor="primary" />
```

### errorColor (optional)

Color definition for errors messages in the list based on Material UI color definitions.

Type: 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error'

Defaults to: 'error'

#### Usage

```javascript
<ErrorList errorColor="primary" />
```

### renderErrorMessage (optional)

Function to override default error list item message.

Type: (validationName: string, errorMessage: string) => string

Defaults to: (validationName: string, errorMessage: string) => `${validationName}: ${errorMessage}`

#### Usage

```javascript
<ErrorList renderErrorMessage={(validationName: string, errorMessage: string) => `<<${validationName}>> ${errorMessage}`} />
```

[<< back to overview](../../README.md)

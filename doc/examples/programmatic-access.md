# Programmatic access to Validate

The following complex example shows a TextField wrapped by 2 Validate components. Reasons for such a constallation can be various.

To demonstrate how to use programmatic access the outer Validate checks for a value set while the inner Validate wants it to be empty - this will provoke an error no matter if field filled or not.

```typescript
const outerValidate = useRef<ValidateRef>(null);
const [value, setValue] = useState('');

return <Validate name="required-outer" required reference={outerValidate}>
    <Validate
        name="empty-inner"
        custom={[() => value === '', 'Value must be empty']}
        after={(validationResult: Validation, valueUsed: string) => {
            outerValidate.current?.validate(valueUsed);
        }}
    >
        <TextField
            label="This field is required"
            fullWidth
            variant="outlined"
            size="small"
            required
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    </Validate>
</Validate>
```

In a case like that only the inner Validate would actually validate the value of TextField. To trigger the outer Validate we need the programmatic access as shown in the after hook of the inner Validate. It uses the ref passed into the outer Validate and triggers its validate function providing valueUsed to validate against.

This is just a showcase with contradictive Validates. Furthermore if you would want to apply the exact rules to the TextField, you could add both rules to the same Validate component.

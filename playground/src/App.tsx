import React, { useState } from 'react';
import { TextField, Select, MenuItem, Button, Container, Grid } from '@material-ui/core';
import { ValidationGroup, Validate, AutoDisabler } from './component-lib';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { Autocomplete } from '@material-ui/lab';
import DateFnsUtils from '@date-io/date-fns';

const App = () => {
    const [date, setDate]: [string | null | undefined, Function] = useState(null);

    const handleDateChange = (date: MaterialUiPickersDate, value?: string | null | undefined) => {
        setDate(date);
    };

    const autocompleteOptiosn = [
        { name: 'Option A' },
        { name: 'Option B' },
        { name: 'Option C' },
    ];

    return (
        <ValidationGroup>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Container>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Validate name="required" required before={() => console.log('Validating now')} after={console.log}>
                                <TextField label="This field is required" fullWidth />
                            </Validate>
                        </Grid>
                        <Grid item>
                            <Validate name="unique" unique={['a', 'b']}>
                                <TextField label='Unique (not "a" or "b")' />
                            </Validate>
                        </Grid>
                        <Grid item>
                            <Validate name="regex" regex={/^\d{0,5}$/}>
                                <TextField label="Numeric, max. 5 chars" />
                            </Validate>
                        </Grid>
                        <Grid item>
                            <Validate name="custom" custom={[(value) => value === 'Test', 'Custom error']}>
                                <TextField label="Input equals 'Test'" />
                            </Validate>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item>
                            <Validate name="requiredTextfieldSelect" required>
                                <TextField select>
                                    <MenuItem value="">Empty</MenuItem>
                                    <MenuItem value="A">Option A</MenuItem>
                                    <MenuItem value="B">Option B</MenuItem>
                                </TextField>
                            </Validate>
                        </Grid>
                        <Grid item>
                            <Validate name="requiredSelect" required>
                                <Select>
                                    <MenuItem value="">Empty</MenuItem>
                                    <MenuItem value="A">Option A</MenuItem>
                                    <MenuItem value="B">Option B</MenuItem>
                                </Select>
                            </Validate>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item>
                            <Validate
                                name="validTo"
                                required
                            >
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    inputVariant="outlined"
                                    format="dd.MM.yyyy"
                                    label={'Valid to'}
                                    value={date}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    style={{ width: 195 }}
                                    size="small"
                                    required
                                />
                            </Validate>
                        </Grid>
                        <Grid item xs={4}>
                            <Validate name="autocomplete" required>
                                <Autocomplete
                                    autoComplete
                                    autoHighlight
                                    fullWidth
                                    options={autocompleteOptiosn}
                                    getOptionLabel={(option: any) => option.name}
                                    // eslint-disable-next-line
                                    renderInput={(params: any) => (
                                        <TextField
                                            {...params}
                                            name="autocomplete"
                                            size="small"
                                            variant="outlined"
                                            label="Autocomplete"
                                            required
                                        />
                                    )}
                                />
                            </Validate>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item>
                            <AutoDisabler>
                                <Button variant="outlined">Auto disabled if not all fields valid</Button>
                            </AutoDisabler>
                        </Grid>
                    </Grid>
                </Container>
            </MuiPickersUtilsProvider>
        </ValidationGroup>
    );
};

export default App;

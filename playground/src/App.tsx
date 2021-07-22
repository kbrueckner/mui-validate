import React from 'react';
import { TextField, Select, MenuItem, Button } from '@material-ui/core';
import { ValidationGroup, Validate, AutoDisabler } from './component-lib';

const App = () => (
    <ValidationGroup>
        <>
            <div>
                <Validate name="required" required>
                    <TextField label="This field is required" fullWidth />
                </Validate>
                <Validate name="unique" unique={['a', 'b']}>
                    <TextField label='Unique (not "a" or "b")' />
                </Validate>
                <Validate name="regex" regex={/^\d{0,5}$/}>
                    <TextField label="numeric, max. 5 chars" />
                </Validate>
            </div>
            <div>
                <Validate name="requiredTextfieldSelect" required>
                    <TextField select>
                        <MenuItem value="">Empty</MenuItem>
                        <MenuItem value="A">Option A</MenuItem>
                        <MenuItem value="B">Option B</MenuItem>
                    </TextField>
                </Validate>
                <Validate name="requiredSelect" required>
                    <Select>
                        <MenuItem value="">Empty</MenuItem>
                        <MenuItem value="A">Option A</MenuItem>
                        <MenuItem value="B">Option B</MenuItem>
                    </Select>
                </Validate>
            </div>
            <div>
                <AutoDisabler>
                    <Button variant="outlined">Auto disabled if not all fields valid</Button>
                </AutoDisabler>
            </div>
        </>
    </ValidationGroup>
);

export default App;

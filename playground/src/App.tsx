import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { ValidationGroup, Validate, AutoDisabler } from './component-lib';

const App = () => (
    <ValidationGroup>
        <>
            <Validate name="required" required>
                <TextField label="This field is required" />
            </Validate>
            <Validate name="unique" unique={['a', 'b']}>
                <TextField label='Unique (not "a" or "b")' />
            </Validate>
            <Validate name="regex" regex={/^\d{1,5}$/}>
                <TextField label="numeric, max. 5 chars" />
            </Validate>
            <AutoDisabler>
                <Button variant="outlined">Auto disabled if not all fields valid</Button>
            </AutoDisabler>
        </>
    </ValidationGroup>
);

export default App;

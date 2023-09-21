import { Box, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Validate, ValidationGroup } from "../../component-lib";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers-6";
import { AdapterDateFns } from '@mui/x-date-pickers-6/AdapterDateFns';
import {
    PICKER_CUSTOM, PICKER_CUSTOM_INPUT, PICKER_REGEX, PICKER_REGEX_INPUT, PICKER_REQUIRED,
    PICKER_REQUIRED_INPUT, PICKER_UNIQUE, PICKER_UNIQUE_INPUT,
} from "./locators";

const Pickers = () => {
    const [dateRequired, setDateRequired]: [Date | null, Function] = useState(null);
    const handleDateRequiredChange = (date: Date | null) => {
        setDateRequired(date);
    };

    const [dateUnique, setDateUnique]: [Date | null, Function] = useState(null);
    const handleDateUniqueChange = (date: Date | null) => {
        setDateUnique(date);
    };

    const [dateRegex, setDateRegex]: [Date | null, Function] = useState(null);
    const handleDateRegexChange = (date: Date | null) => {
        setDateRegex(date);
    };

    const [dateCustom, setDateCustom]: [Date | null, Function] = useState(null);
    const handleDateCustomChange = (date: Date | null) => {
        setDateCustom(date);
    };
    
    return <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box>
            <Typography variant="h5">Pickers (V6)</Typography>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <ValidationGroup>
                        <Box style={{ border: '1px solid #000'}} p={1} mt={2}>
                            <Box mb={2}>
                                <Typography variant="caption">DatePicker required</Typography>
                            </Box>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <Validate name="DatePicker required" required id={PICKER_REQUIRED} initialValidation="noisy">
                                        <DatePicker
                                            format="dd.MM.yyyy"
                                            label={'Valid to'}
                                            value={dateRequired}
                                            onChange={handleDateRequiredChange}
                                            slotProps={{
                                                field: { id: PICKER_REQUIRED_INPUT }
                                            }}
                                        />
                                    </Validate>
                                </Grid>
                            </Grid>
                        </Box>
                    </ValidationGroup>
                    <ValidationGroup>
                        <Box style={{ border: '1px solid #000'}} p={1} mt={2}>
                            <Box mb={2}>
                                <Typography variant="caption">DatePicker unique</Typography>
                            </Box>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <Validate name="DatePicker unique" unique={['2021-11-10T23:00:00.000Z']} id={PICKER_UNIQUE} initialValidation="noisy">
                                        <DatePicker
                                            format="dd.MM.yyyy"
                                            label={'Valid to'}
                                            value={dateUnique}
                                            onChange={handleDateUniqueChange}
                                            slotProps={{
                                                field: { id: PICKER_UNIQUE_INPUT }
                                            }}
                                        />
                                    </Validate>
                                </Grid>
                            </Grid>
                        </Box>
                    </ValidationGroup>
                </Grid>
                <Grid item xs={6}>
                    <ValidationGroup>
                        <Box style={{ border: '1px solid #000'}} p={1} mt={2}>
                            <Box mb={2}>
                                <Typography variant="caption">DatePicker regex</Typography>
                            </Box>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <Validate name="DatePicker reegex" regex={/2020-11-10T23:00:00\.000Z/} id={PICKER_REGEX} initialValidation="noisy">
                                        <DatePicker
                                            format="dd.MM.yyyy"
                                            label={'Valid to'}
                                            value={dateRegex}
                                            onChange={handleDateRegexChange}
                                            slotProps={{
                                                field: { id: PICKER_REGEX_INPUT }
                                            }}
                                        />
                                    </Validate>
                                </Grid>
                            </Grid>
                        </Box>
                    </ValidationGroup>
                    <ValidationGroup>
                        <Box style={{ border: '1px solid #000'}} p={1} mt={2}>
                            <Box mb={2}>
                                <Typography variant="caption">DatePicker custom</Typography>
                            </Box>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <Validate name="DatePicker custom" custom={[(value: string) => value === '2020-11-10T23:00:00.000Z', 'failed']} id={PICKER_CUSTOM} initialValidation="noisy">
                                        <DatePicker
                                            format="dd.MM.yyyy"
                                            label={'Valid to'}
                                            value={dateCustom}
                                            onChange={handleDateCustomChange}
                                            slotProps={{
                                                field: { id: PICKER_CUSTOM_INPUT }
                                            }}
                                        />
                                    </Validate>
                                </Grid>
                            </Grid>
                        </Box>
                    </ValidationGroup>
                </Grid>
            </Grid>
        </Box>
    </LocalizationProvider>;
};

Pickers.displayName = 'Pickers';
export default Pickers;

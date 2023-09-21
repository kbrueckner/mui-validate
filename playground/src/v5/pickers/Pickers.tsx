import { Box, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Validate, ValidationGroup } from "../../component-lib";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {
    PICKER_CUSTOM, PICKER_CUSTOM_INPUT, PICKER_REGEX, PICKER_REGEX_INPUT, PICKER_REQUIRED,
    PICKER_REQUIRED_INPUT, PICKER_UNIQUE, PICKER_UNIQUE_INPUT,
} from "./locators";

const Pickers = () => {
    const [dateRequired, setDateRequired]: [string | null | undefined, Function] = useState(null);
    const handleDateRequiredChange = (date: unknown, value: string | null | undefined) => {
        setDateRequired(date);
    };

    const [dateUnique, setDateUnique]: [string | null | undefined, Function] = useState(null);
    const handleDateUniqueChange = (date: unknown, value?: string | null | undefined) => {
        setDateUnique(date);
    };

    const [dateRegex, setDateRegex]: [string | null | undefined, Function] = useState(null);
    const handleDateRegexChange = (date: unknown, value?: string | null | undefined) => {
        setDateRegex(date);
    };

    const [dateCustom, setDateCustom]: [string | null | undefined, Function] = useState(null);
    const handleDateCustomChange = (date: unknown, value?: string | null | undefined) => {
        setDateCustom(date);
    };
    
    return <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box>
            <Typography variant="h5">Pickers</Typography>
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
                                            inputFormat="dd.MM.yyyy"
                                            mask="__.__.____"
                                            label={'Valid to'}
                                            value={dateRequired}
                                            onChange={handleDateRequiredChange}
                                            renderInput={(params: any) => <TextField {...params} id={PICKER_REQUIRED_INPUT} />}
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
                                            inputFormat="dd.MM.yyyy"
                                            mask="__.__.____"
                                            label={'Valid to'}
                                            value={dateUnique}
                                            onChange={handleDateUniqueChange}
                                            renderInput={(params: any) => <TextField {...params} id={PICKER_UNIQUE_INPUT} />}
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
                                            inputFormat="dd.MM.yyyy"
                                            mask="__.__.____"
                                            label={'Valid to'}
                                            value={dateRegex}
                                            onChange={handleDateRegexChange}
                                            renderInput={(params: any) => <TextField {...params} id={PICKER_REGEX_INPUT} />}
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
                                            inputFormat="dd.MM.yyyy"
                                            mask="__.__.____"
                                            label={'Valid to'}
                                            value={dateCustom}
                                            onChange={handleDateCustomChange}
                                            renderInput={(params: any) => <TextField {...params} id={PICKER_CUSTOM_INPUT} />}
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

import { Autocomplete, Box, Grid, TextField, Typography } from "@mui/material";
import { Validate, ValidationGroup } from "../../component-lib";
import {
    AUTOCOMPLETE_CUSTOM, AUTOCOMPLETE_CUSTOM_INITIAL, AUTOCOMPLETE_CUSTOM_INPUT, AUTOCOMPLETE_REGEX,
    AUTOCOMPLETE_REGEX_INPUT, AUTOCOMPLETE_REQUIRED, AUTOCOMPLETE_REQUIRED_INPUT, AUTOCOMPLETE_UNIQUE,
    AUTOCOMPLETE_UNIQUE_INPUT,
} from "./locators";

const Autocompletes = () => {
    return <Box>
        <Typography variant="h5">Autocomplete</Typography>
        <Grid container spacing={1}>
            <Grid item xs={6}>
                <ValidationGroup>
                    <Box style={{ border: '1px solid #000'}} p={1} mt={2}>
                        <Box mb={2}>
                            <Typography variant="caption">Autocomplete required</Typography>
                        </Box>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Validate name="Autocomplete required" required id={AUTOCOMPLETE_REQUIRED} initialValidation="noisy">
                                    <Autocomplete
                                        id={AUTOCOMPLETE_REQUIRED_INPUT}
                                        autoComplete
                                        autoHighlight
                                        fullWidth
                                        options={['', 'B']}
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
                    </Box>
                </ValidationGroup>
                <ValidationGroup>
                    <Box style={{ border: '1px solid #000'}} p={1} mt={2}>
                        <Box mb={2}>
                            <Typography variant="caption">Autocomplete unique</Typography>
                        </Box>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Validate name="Autocomplete unique" unique={['B']} id={AUTOCOMPLETE_UNIQUE} initialValidation="noisy">
                                    <Autocomplete
                                        id={AUTOCOMPLETE_UNIQUE_INPUT}
                                        autoComplete
                                        autoHighlight
                                        fullWidth
                                        options={['A', 'B']}
                                        // eslint-disable-next-line
                                        renderInput={(params: any) => (
                                            <TextField
                                                {...params}
                                                name="autocomplete"
                                                size="small"
                                                variant="outlined"
                                                label="Autocomplete"
                                            />
                                        )}
                                    />
                                </Validate>
                            </Grid>
                        </Grid>
                    </Box>
                </ValidationGroup>
                <ValidationGroup>
                    <Box style={{ border: '1px solid #000'}} p={1} mt={2}>
                        <Box mb={2}>
                            <Typography variant="caption">Autocomplete regex</Typography>
                        </Box>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Validate name="Autocomplete regex" regex={/[0-9]/} id={AUTOCOMPLETE_REGEX} initialValidation="noisy">
                                    <Autocomplete
                                        id={AUTOCOMPLETE_REGEX_INPUT}
                                        autoComplete
                                        autoHighlight
                                        fullWidth
                                        options={['123', 'B']}
                                        // eslint-disable-next-line
                                        renderInput={(params: any) => (
                                            <TextField
                                                {...params}
                                                name="autocomplete"
                                                size="small"
                                                variant="outlined"
                                                label="Autocomplete"
                                            />
                                        )}
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
                            <Typography variant="caption">Autocomplete custom</Typography>
                        </Box>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Validate name="Textfield custom" custom={[(value: string) => value === 'A', 'failed']} id={AUTOCOMPLETE_CUSTOM} initialValidation="noisy">
                                    <Autocomplete
                                        id={AUTOCOMPLETE_CUSTOM_INPUT}
                                        autoComplete
                                        autoHighlight
                                        fullWidth
                                        options={[{ name: 'A' }, { name: 'B' }]}
                                        getOptionLabel={(option: any) => option.name}
                                        // eslint-disable-next-line
                                        renderInput={(params: any) => (
                                            <TextField
                                                {...params}
                                                name="autocomplete"
                                                size="small"
                                                variant="outlined"
                                                label="Autocomplete"
                                            />
                                        )}
                                    />
                                </Validate>
                            </Grid>
                        </Grid>
                    </Box>
                </ValidationGroup>
                <ValidationGroup>
                    <Box style={{ border: '1px solid #000'}} p={1} mt={2}>
                        <Box mb={2}>
                            <Typography variant="caption">Autocomplete custom - initial validation (valid)</Typography>
                        </Box>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Validate name="Textfield custom initial" custom={[(value: string) => value === 'A', 'failed']} id={AUTOCOMPLETE_CUSTOM_INITIAL} initialValidation="noisy">
                                    <Autocomplete
                                        autoComplete
                                        autoHighlight
                                        fullWidth
                                        value={{ name: 'A' }}
                                        options={[{ name: 'A' }, { name: 'B' }]}
                                        getOptionLabel={(option: any) => option.name}
                                        // eslint-disable-next-line
                                        renderInput={(params: any) => (
                                            <TextField
                                                {...params}
                                                name="autocomplete"
                                                size="small"
                                                variant="outlined"
                                                label="Autocomplete"
                                            />
                                        )}
                                    />
                                </Validate>
                            </Grid>
                        </Grid>
                    </Box>
                </ValidationGroup>
            </Grid>
        </Grid>
    </Box>
};

Autocompletes.displayname = 'Autocompletes';
export default Autocompletes;

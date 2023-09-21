import { Box, Grid, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { Validate, ValidationGroup } from "../../component-lib";
import { TEXTFIELD_LINKED_1, TEXTFIELD_LINKED_1_INPUT, TEXTFIELD_LINKED_2, TEXTFIELD_LINKED_2_INPUT, TEXTFIELD_LINKED_3, TEXTFIELD_LINKED_3_INPUT, TEXTFIELD_LINKED_EXAMPLE_1, TEXTFIELD_LINKED_EXAMPLE_1_INPUT, TEXTFIELD_LINKED_EXAMPLE_2, TEXTFIELD_LINKED_EXAMPLE_2_INPUT } from "./locators";

const LinkedValidations = () => {
    const [linkedValue, setLinkedValue]: [string, Function] = useState('');
    const linkedRef1 = useRef();
    const linkedRef2 = useRef();

    const [linkedValueExample, setLinkedValueExample]: [string, Function] = useState('');
    const linkedRefExample = useRef();

    return <Box>
        <Typography variant="h5">Linked validations</Typography>
        <ValidationGroup initialValidation='noisy'>
            <Box style={{ border: '1px solid #000'}} p={1}>
                <Box mb={2}>
                    <Typography variant="caption">Re-trigger validation via linked component</Typography>
                </Box>
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <Validate name="tf1" required id={TEXTFIELD_LINKED_1} reference={linkedRef1}>
                            <TextField label="This field is required" fullWidth variant="outlined" size="small" required value={linkedValue} onChange={(evt) => setLinkedValue(evt.target.value)} id={TEXTFIELD_LINKED_1_INPUT} />
                        </Validate>
                    </Grid>
                    <Grid item xs={3}>
                        <Validate name="tf2" required id={TEXTFIELD_LINKED_2} reference={linkedRef2}>
                            <TextField label="This field is required" fullWidth variant="outlined" size="small" required value={linkedValue} onChange={(evt) => setLinkedValue(evt.target.value)} id={TEXTFIELD_LINKED_2_INPUT} />
                        </Validate>
                    </Grid>
                    <Grid item xs={6}>
                        <Validate name="tf3" required id={TEXTFIELD_LINKED_3} triggers={[linkedRef2, linkedRef1]}>
                            <TextField label="Textfield 3 - duplicates value to Textfield 1 and 2" fullWidth variant="outlined" size="small" required onChange={(evt) => {setLinkedValue(evt.target.value)}} id={TEXTFIELD_LINKED_3_INPUT} />
                        </Validate>
                    </Grid>
                </Grid>
            </Box>
        </ValidationGroup>
        <ValidationGroup initialValidation='noisy'>
            <Box style={{ border: '1px solid #000'}} p={1}>
                <Box mb={2}>
                    <Typography variant="caption">Linked validation from README example</Typography>
                </Box>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <Validate name="tf1" custom={[() => !!linkedValueExample, 'Textfield 2 is empty']} id={TEXTFIELD_LINKED_EXAMPLE_1} reference={linkedRefExample}>
                            <TextField label="Validation relies on field 2 input" fullWidth variant="outlined" size="small" id={TEXTFIELD_LINKED_EXAMPLE_1_INPUT} />
                        </Validate>
                    </Grid>
                    <Grid item xs={6}>
                        <Validate name="tf2" id={TEXTFIELD_LINKED_EXAMPLE_2} triggers={linkedRefExample}>
                            <TextField label="This field is required for validation of first field" fullWidth variant="outlined" size="small" required value={linkedValueExample} onChange={(evt) => setLinkedValueExample(evt.target.value)} id={TEXTFIELD_LINKED_EXAMPLE_2_INPUT} />
                        </Validate>
                    </Grid>
                </Grid>
            </Box>
        </ValidationGroup>
    </Box>;
};

LinkedValidations.displayname = 'LinkedValidations';
export default LinkedValidations;

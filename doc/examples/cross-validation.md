# Trigger cross Validate after validation of another Input Component

We might encounter the case where custom validations are depending on 2 or more input elements. Thus the linked inputs need to be (re-)validated together or trigger oneanother. This can be achieved via reference and triggers in combination as shown below. 

```javascript
import { useRef, useState } from 'react';
import { Validate } from 'mui-validate';

export default () => {
    const [linkedValue, setLinkedValue]: [string, Function] = useState('');
    // ref object which is used for cross validation
    const linkedRef = useRef();
    
    return (
        <ValidationGroup>
            <>
                ...
                { /* validation to be re-triggered on input change of the below TextField */ }
                <Validate name="internal key 1" custom={[() => !!linkedValue, 'Textfield 2 is empty']} reference={linkedRef}>
                    <TextField id="tf1"/>
                </Validate>
                { /* on change of this TextField the validation of the above TextField is re-triggered */ }
                <Validate name="internal key 2" triggers={linkedRef}>
                    <TextField id="tf2" value={linkedValue} onChange={(evt) => setLinkedValue(evt.target.value)}} />
                </Validate>
                ...
            </>
        </ValidationGroup>
    );
}
```

First we create a ref object and pass it to the Validate wrapping TextField (tf1) via reference prop. This TextField shall rely on a validation of another TextField (tf2).

The same ref object is passed to the triggers prop of the Validate wrapping TextField (tf2) which shall on change re-validate the first TextField (tf1).

With the above structure, everytime the value of tf2 changes, tf1 will be re-validated.

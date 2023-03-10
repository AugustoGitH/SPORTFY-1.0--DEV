import * as React from 'react';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';

export default function CheckboxLabels({checked, id, defaultChecked=false, row=false , ...rest}) {
  const configCheck = {
    checked
  }
  return (
    <FormGroup>
       <FormControlLabel control={<Checkbox value={rest.label} {...configCheck} />} {...rest}/>
    </FormGroup>
  );
}
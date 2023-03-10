
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import React,{useEffect, useState} from 'react';

export default function RowRadioButtonsGroup({radios, label, onChangeText, ...rest}) {
  const [marked, setMarked] = useState(radios[0].value)
  useEffect(()=>{
    onChangeText ? onChangeText(marked) : null
  }, [marked])
  return (
    <FormControl {...rest}>
      <FormLabel id="demo-row-radio-buttons-group-label" style={{marginBottom: "-.3rem"}}>{label}</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={marked}
        name="radio-buttons-group"
        onChange={ev=> setMarked(ev.target.value)}
      >
        {
          radios.map((rad, i)=> <FormControlLabel key={i} value={rad.value} control={<Radio />} label={rad.label} />)
        }
      </RadioGroup>
    </FormControl>
  );
}
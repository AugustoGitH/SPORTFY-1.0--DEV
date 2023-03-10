import * as React from 'react';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';



export default function InputWithIcon({Icon, label, ...rest}) {
  const [focus, setFocus] = React.useState(false)
  return (
    <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          {label}
        </InputLabel>
        <Input
          {...rest}
          onFocus={()=> setFocus(true)}
          onBlur={()=> setFocus(false)}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              {<Icon color={focus ? "primary" : ""}/>}
            </InputAdornment>
          }
        />
      </FormControl>
  );
}
import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating({readOnly = false, valueDefault = 0, ...rest}) {
  const [value, setValue] = useState(valueDefault);

  return (
    <Box>
      <Rating {...rest} value={value} readOnly={readOnly} onChange={(_ev, newValue)=>{
        setValue(newValue)
      }} />
    </Box>
  );
}
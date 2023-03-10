import React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';


export default function AutoComplete({options , size, variant, label, placeholder, onChange = ()=>{}, ...rest}){
    function onChangeText(ev, newValue){
        onChange(newValue)
    }
    return (
        <Autocomplete
        multiple
        {...rest}
        options={options}
        onChange={onChangeText}
        getOptionLabel={(option) => option.tags}
        isOptionEqualToValue={(option, value) => option.tags === value.tags}
        size={size}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              variant="outlined"
              label={option.tags}
              size={size}
              {...getTagProps({ index })}
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant={variant}
            label={label}
            placeholder={placeholder}
          />
        )}
    />
    )
}


import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import React, { useEffect, useState } from "react";


export default function Input({adornment, size, label, onChangeText = ()=>{}, onChange = ()=>{}, type="text", preValue = "", helperText = "", changeInputFormat,  ...rest}){




    const [value, setValue] = useState(preValue)
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => event.preventDefault()
    const changeInput = ev => {
      setValue(ev.target.value)
      onChange ? onChange(ev) : null
      changeInputFormat ? setValue(changeInputFormat(ev.target.value)) : null
    }



    useEffect(()=>{
        onChangeText ? onChangeText(value) : null
    }, [value])

    

    return (type === "password" ? 
        <FormControl sx={{ m: 1, width: '25ch' }}  {...rest}>
          <InputLabel htmlFor="filled-adornment-password">{label}</InputLabel> 
          <FilledInput onChange={changeInput}
            size={size}
            id="filled-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }/>
            <p style={{color: "#d32f2f", fontSize: ".75rem", paddingLeft: ".75rem", marginTop: ".3rem", fontFamily: "Helvetica"}}>{helperText}</p>
        </FormControl>
        :
        <TextField 
          InputProps={ adornment ? {
            startAdornment: <InputAdornment position="start">{adornment}</InputAdornment>
          } : null}  
          autoComplete='off' 
          size={size} 
          value={value} 
          label={label} 
          type={type} 
          helperText={helperText} 
          onChange={changeInput}
          {...rest} 
        />
    )
}
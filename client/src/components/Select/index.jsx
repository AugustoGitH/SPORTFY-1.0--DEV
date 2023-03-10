import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({
  numberInterval,
  options,
  label,
  onClickOption,
  helperText,
  ...rest
}) {
  const [mark, setMark] = useState("");
  const [numbersIn, setNumbersIn] = useState([]);

  useEffect(()=>{
    if(numberInterval){
      const intervalConst = []
      for (let i = numberInterval[0]; i <= numberInterval[1]; i++) {intervalConst.push(i);}
      setNumbersIn(intervalConst)
    }
  }, [])

  const handleChange = (event) => {
    setMark(event.target.value);
    onClickOption( typeof event.target.value === "string" ? event.target.value.toLowerCase() : event.target.value );
  };

  return (
    <FormControl variant="filled" {...rest}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={mark}
        label={label}
        onChange={handleChange}
      >
        {numberInterval && !options ? (
          numbersIn.map((num, index) => (
            <MenuItem key={index} value={num}>
              {num}
            </MenuItem>
          ))
        ) : numberInterval && options ? (
          options.map((op, index) => (
            <MenuItem key={index} value={numbersIn[index]}>
              {op}
            </MenuItem>
          ))
        ) : !numberInterval && options ? (
          options.map((op, index) => (
            <MenuItem key={index} value={op}>
              {op}
            </MenuItem>
          ))
        ) : (
          <></>
        )}
      </Select>
       <p style={{color: "#d32f2f", fontSize: ".75rem", paddingLeft: ".35rem", marginTop: ".3rem", fontFamily: "Helvetica"}}>{helperText}</p>
    </FormControl>
  );
}

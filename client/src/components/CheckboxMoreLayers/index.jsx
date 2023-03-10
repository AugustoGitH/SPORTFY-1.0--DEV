import React, {useState, useEffect} from "react"

import Checkbox from "../Checkbox"
import FormGroup from '@mui/material/FormGroup';

export default function CheckboxMoreLayers({label, options, row = false, onChange = ()=> {}}){
    const [checkedOn, setCheckedOn] = useState(false)
    const [statusCheckbox, setStatusCheckbox] = useState({
        label,
        checked: false,
        optionsMarked: []
    })
    const handleChangeCheckbox = (ev)=>{
        const isChecked = ev.target.checked
        setCheckedOn(isChecked)
        setStatusCheckbox(statusCh=> ({...statusCh, optionsMarked: !isChecked ? [] : statusCh.optionsMarked}))
    }
    const handleChangeCheckboxes = (ev)=>{
        const {checked, value} = ev.target
        setStatusCheckbox(statusCh=> ({
                ...statusCh,
                optionsMarked: [ ...statusCh.optionsMarked.filter(op=> op.value !== value), {value: value, checked: checked}].filter(op=> op.checked)
            }))
        setStatusCheckbox(statusCh=> ({
            ...statusCh,
            checked: !(statusCh.optionsMarked.length === 0) ,
        }))
        
    }
    useEffect(()=>{
        onChange(statusCheckbox.optionsMarked.map(op=> op.value))
    }, [statusCheckbox])

    return (
        <div>
            <Checkbox label={label} onChange={handleChangeCheckbox}/>
            {checkedOn ?
                <div style={{marginLeft: "2rem"}}>
                    <FormGroup row={row} onChange={handleChangeCheckboxes}>
                        { options.map((op, i)=> <Checkbox key={i} label={op} /> ) }
                    </FormGroup>
                </div>
                : <></>}
        </div>
    )
}
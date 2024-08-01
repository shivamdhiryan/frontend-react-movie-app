import React from 'react'

const Dropdown = ({title,option,fnc}) => {
  return (
    <div>
     <select defaultValue= "0" id="format" name="format" onChange={fnc}>
        <option  value="0" disabled>{title}</option>
        {option.map((o,i)=>(
            <option  key={i} value={o}>{o.toUpperCase()}</option> 
        ))}
    </select>
    </div>
  )
}

export default Dropdown

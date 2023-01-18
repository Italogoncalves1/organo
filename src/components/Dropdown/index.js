import React from 'react'
import './index.css'

const Dropdown = (props) => {

  return (
    <div className='dropdown'>

        <label>{props.label}</label>

        <select onChange={e => props.changed(e.target.value)} required={props.required === true} value={props.value}>
          
          <option value=""></option>

          {props.itens.map((item, index) => (
              <option key={index}> {item} </option>
            ))}

        </select>
    </div>
  )
}

export default Dropdown
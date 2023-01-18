import React, { useState } from 'react'
import './index.css'

const TextField = (props) => {

  
  
  const handleWithTyping = (e) =>{
    props.changed(e.target.value);
  }

  return (
    <div className='text-field'>
        <label>{props.label}</label>
        <input value={props.value} onChange={handleWithTyping} required={props.required === true} type="text" placeholder={props.placeholder} />
    </div>
  )
}

export default TextField
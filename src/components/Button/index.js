import React from 'react'
import './index.css'

const Button = (props) => {
  return (
    <button className='button'>
        {props.children}
    </button>
  )
}

export default Button
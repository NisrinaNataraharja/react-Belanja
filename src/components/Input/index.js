import React from 'react'
import style from './input.module.css'


const Input = ({type, css, onClick, disable, name, id, placeholder, value, defaultValue, onChange }) => {
  return (
     <input className={style[css]} type={type} onClick={onClick} disabled={disable} name={name} id={id} placeholder={placeholder} value={value} defaultValue={defaultValue} onChange={onChange} />
  )
}

export default Input
import React from 'react'

export default function Button({text, clas,type,click,disabled}) {
  return (
    <button disabled={disabled} onClick={click} type={type} className={clas}>{text}</button>
  )
}

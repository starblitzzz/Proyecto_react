import React from 'react'

export default function Button({text, clas,type,click}) {
  return (
    <button onClick={click} type={type} className={clas}>{text}</button>
  )
}

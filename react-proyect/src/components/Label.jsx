import React from 'react'

export default function Label({text,clas,logo}) {
  return (
    <label  className={clas} htmlFor="">{logo} {text}</label>
  )
}

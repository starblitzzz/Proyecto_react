import React from 'react'

export default function Field({type,placeholder,clas}) {
  return (
    <input className={clas} type={type} placeholder={placeholder} />
  )
}

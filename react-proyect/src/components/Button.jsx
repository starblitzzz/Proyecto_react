import React from 'react'

export default function Button({text, clas}) {
  return (
    <button className={clas}>{text}</button>
  )
}

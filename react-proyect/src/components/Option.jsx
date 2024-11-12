import React from 'react'

export default function Option({text, value,disable,selected}) {
  return (
    <option selected={selected} disabled={disable} value={value}>{text}</option>
  )
}

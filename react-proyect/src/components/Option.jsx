import React from 'react'

export default function Option({text, value}) {
  return (
    <option value={value}>{text}</option>
  )
}

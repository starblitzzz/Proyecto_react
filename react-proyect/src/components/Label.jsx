import React from 'react'

export default function Label({text,clas}) {
  return (
    <label className={clas} htmlFor="">{text}</label>
  )
}

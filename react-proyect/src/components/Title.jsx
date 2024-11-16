import React from 'react'

export default function Title({logo,clas,text}) {
  return (
    <h1  className={clas}>{logo}      {text}</h1>
  )
}

import React from 'react'

export default function Form({children,clas,submit}) {
  return (
    <form action="" className={clas} onSubmit={submit}>
     {children}</form>
  )
}

import React from 'react'

export default function Container({children,clas}) {
  return (
    <div className={clas}>
      {children}
    </div>
  )
}

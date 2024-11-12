import React from 'react'

import { forwardRef } from 'react';


const Field = forwardRef(({ clas, change, value, placeholder, type, name, ...props }, ref) => {
  return <input className={clas} name={name} onChange={change} placeholder={placeholder} type={type} value={value} ref={ref} {...props} />;
});

export default Field;


import React from 'react'

import { forwardRef } from 'react';

const Field = forwardRef(({change,value, placeholder, type, ...props }, ref) => {
  return <input  ref={ref} placeholder={placeholder} type={type} {...props} />;
});

export default Field;

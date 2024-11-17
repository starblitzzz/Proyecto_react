import React, { forwardRef } from 'react';

const Selector = forwardRef(({ clas, children, value, name, onChange }, ref) => {
  return (
    <select
      className={clas}
      ref={ref}
      name={name}
      value={value}
      onChange={onChange}
    >
      {children}
    </select>
  );
});

export default Selector;
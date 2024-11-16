import React from 'react';

// Asegúrate de que Container acepte refs
const Container = React.forwardRef(({ clas, children }, ref) => {
  return (
    <div className={clas} ref={ref}>
      {children}
    </div>
  );
});

export default Container;
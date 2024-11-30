import React from 'react';

const Container = React.forwardRef(({ clas, children }, ref) => {
  return (
    <div className={clas} ref={ref}>
      {children}
    </div>
  );
});

export default Container;
import React, { useState } from 'react';
import Comp1 from './Comp1';

const Comp2 = () => {
  const [isComp1Visible, setIsComp1Visible] = useState(false);

  const handleToggleComp1 = () => {
    setIsComp1Visible(!isComp1Visible);
  };

  return (
    <div>
      <p>This is Comp2 and below button will show comp1</p>
      <button onClick={handleToggleComp1}>
        {isComp1Visible ? 'Hide Comp1' : 'Show Comp1'}
      </button>
      {isComp1Visible && <Comp1 />}
    </div>
  );
};

export default Comp2;

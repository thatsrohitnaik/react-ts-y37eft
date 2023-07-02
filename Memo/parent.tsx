import React, { useState } from 'react';
import ChildA from './childA';
import ChildB from './childB';

const Parent = () => {
  const [tea, setTea] = useState<boolean>(false);
  const [coffee, setCoffee] = useState<boolean>(false);

  return (
    <>
      <ChildA tea={tea} setTea={setTea} />{' '}
      <ChildB coffee={coffee} setCoffee={setCoffee} />
    </>
  );
};

export default Parent;

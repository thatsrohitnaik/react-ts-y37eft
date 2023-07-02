import React, { useCallback, useState } from 'react';
import ChildA from './childA';
import ChildB from './childB';

const Parent = () => {
  const [tea, setTea] = useState<boolean>(false);
  const [coffee, setCoffee] = useState<boolean>(false);

  const funcProp = useCallback(() => {
    console.log('func Props');
  }, []);

  return (
    <>
      <ChildA tea={tea} setTea={setTea} funcProp={funcProp} />{' '}
      <ChildB coffee={coffee} setCoffee={setCoffee} />
    </>
  );
};

export default Parent;

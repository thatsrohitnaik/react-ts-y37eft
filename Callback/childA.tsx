import React, { useEffect, useState } from 'react';

const ChildA = ({ tea, setTea, funcProp }: any) => {
  const [a, setA] = useState<boolean>(false);
  useEffect(() => {
    console.log('Callback Child A');
    funcProp();
  });
  return (
    <p
      onClick={() => {
        setA(!a);
        setTea(!tea);
      }}
    >
      Callback child A {a ? 'true' : 'false'}
    </p>
  );
};

export default React.memo(ChildA);

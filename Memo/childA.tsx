import React, { useEffect, useState } from 'react';

const ChildA = ({ tea, setTea }: any) => {
  const [a, setA] = useState<boolean>(false);
  useEffect(() => {
    console.log('Child A');
  });
  return (
    <p
      onClick={() => {
        setA(!a);
        setTea(!tea);
      }}
    >
      child A {a ? 'true' : 'false'}
    </p>
  );
};

export default React.memo(ChildA);

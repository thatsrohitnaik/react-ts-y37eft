import React, { useEffect, useState } from 'react';

const ChildB = ({ coffee, setCoffee }) => {
  const [b, setB] = useState<boolean>(false);
  useEffect(() => {
    console.log('Callback Child B');
  });
  return (
    <p
      onClick={() => {
        setB(!b);
        setCoffee(!coffee);
      }}
    >
      Callback child B {b ? 'true' : 'false'}
    </p>
  );
};

export default ChildB;

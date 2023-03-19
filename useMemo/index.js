import React from 'react';

export const Abc = () => {
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(0);

  const c = () => {
    console.log(
      'I am very time consuming funcation and should only be called when value of parameter that is used in this funcation has been changed'
    );
    console.log('new count is --' + b);
  };

  const d = () =>
    React.useMemo(() => {
      console.log(
        'I am very time consuming funcation and should only be called when value of parameter that is used in this funcation has been changed'
      );
      console.log('new count is' + b);
    }, [b]);

  return (
    <>
      <p
        onClick={() => {
          setA(a + 1);
        }}
      >
        {a}
      </p>
      <p
        onClick={() => {
          setB(b + 1);
        }}
      >
        {b}
      </p>
      {
        d() // i know this function is expensive, yet ill call it agian and again
        // haha ill make use of useMemo and make sure you are not executed needlessly
      }
    </>
  );
};

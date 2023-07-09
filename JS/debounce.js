import React from 'react';

// the trick is to save the timer first and clear all the previous callss
const Debounce = () => {
  let timer;
  const callApi = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log('calling');
    }, 1000);
  };

  return (
    <input
      onChange={() => {
        callApi();
      }}
    />
  );
};

export default Debounce;

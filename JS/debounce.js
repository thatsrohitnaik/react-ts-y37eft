import React from 'react';

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

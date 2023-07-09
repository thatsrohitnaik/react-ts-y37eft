import React from 'react';
// import { fetchData } from './util';

const JS = () => {
  React.useEffect(() => {
    fetchData(false);
    fetchData('api').then((d) => {});
  });
  const [a, setA] = React.useState(true);
  const fetchData = (api) => {
    return new Promise((resolve, reject) => {
      fetch(api)
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          reject(e);
        });
    });
  };

  const getDaata = () => {
    return new Promise((resolve, reject) => {
      if (a) {
        resolve(true);
      } else {
        reject(false);
      }
    });
  };
  const fetchData = () => {
    getDaata()
      .then((data) => {
        console.log('d', data);
        setA(true);
      })
      .catch((e) => {
        console.log('e', e);
      });
  };

  return <p>{a ? 'true' : 'false'}</p>;
};

export default JS;

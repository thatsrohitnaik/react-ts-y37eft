import React from 'react';
import { fetchData2 } from './util';
 
const JS = () => {
  React.useEffect(() => {
    fetchData(false);
    fetchData2('api').then((d) => {
      console.log(d);
    });
  });
  const [a, setA] = React.useState(true);

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

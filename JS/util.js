export const fetchData2 = (api) => {
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

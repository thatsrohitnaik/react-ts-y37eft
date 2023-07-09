import React from 'react';
// import Person from './classes';

const JS = () => {
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    //   setUser(new Person('rohit', 18));
  }, []);
  return <p>test</p>;
};

export default JS;

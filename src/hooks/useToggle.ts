import { useState } from 'react';

export const useToggle = () => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle((currToggle) => !currToggle);
  };

  console.log('useToggle toggle', toggle);

  return {
    toggle,
    toggleHandler,
  };
};

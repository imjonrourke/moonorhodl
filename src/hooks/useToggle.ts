import { useState } from 'react';

export const useToggle = () => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle((currToggle) => !currToggle);
  };

  return {
    toggle,
    toggleHandler,
  };
};

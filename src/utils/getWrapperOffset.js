import { useState, useEffect } from 'react';

function getWrapperOffset() {
  const offset = document.getElementById('wrapper').offsetLeft;
  return {
    offset,
  };
}

export default function useWrapperOffset() {
  const [wrapperOffset, setWrapperOffset] = useState(getWrapperOffset());

  useEffect(() => {
    function handleResize() {
      setWrapperOffset(getWrapperOffset());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return wrapperOffset;
}

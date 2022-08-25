import React, { useEffect } from 'react';

const Alert = ({ name = '', clearAlertName = Function.prototype }) => {
  useEffect(() => {
    const timerId = setTimeout(clearAlertName, 3000);

    return () => clearTimeout(timerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  return (
    <div id='toast-container'>
      <div className='toast'>{name} добавлен в корзину</div>
    </div>
  );
};

export default Alert;

import React from 'react';

const Basket = ({
  id,
  name,
  price,
  qty,
  removeOrder = Function.prototype,
  incrementOrder = Function.prototype,
  decrementOrder = Function.prototype,
}) => {
  return (
    <li classNameName='collection-item '>
      {name}{' '}
      {
        <button
          className='decrement-order'
          disabled={qty === 0}
          onClick={() => decrementOrder(id)}
        >
          -
        </button>
      }
      x:{qty}
      {
        <button className='increment-order' onClick={() => incrementOrder(id)}>
          +
        </button>
      }
      = {price * qty}руб.
      <span className='secondary-content'>
        <i
          className='material-icons basket-delete'
          onClick={() => removeOrder(id)}
        >
          close
        </i>
      </span>
    </li>
  );
};

export default Basket;

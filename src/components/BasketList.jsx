import React from 'react';
import Basket from './Basket';

const BasketList = ({
  orders = [],
  showBasket = Function.prototype,
  removeOrder = Function.prototype,
  incrementOrder = Function.prototype,
  decrementOrder = Function.prototype,
}) => {
  const total = orders.reduce((acc, order) => acc + order.price * order.qty, 0);

  return (
    <ul className='collection basket-list'>
      <li className='collection-item active'>Корзина</li>

      {orders.length ? (
        orders.map((order) => (
          <Basket
            key={order.id}
            {...order}
            removeOrder={removeOrder}
            incrementOrder={incrementOrder}
            decrementOrder={decrementOrder}
          />
        ))
      ) : (
        <li classNameName='collection-item '>Корзина пуста</li>
      )}
      <li className='collection-item active'>Общая стоимость: {total}руб.</li>
      <li className='collection-item '>
        <button className='btn btn-small'>Оформить</button>
      </li>

      <i className='material-icons basket-close' onClick={showBasket}>
        close
      </i>
    </ul>
  );
};

export default BasketList;

import React from 'react';

const Cart = ({ qty = 0, showBasket = Function.prototype }) => {
  return (
    <div className='cart blue darken-4 white-text' onClick={showBasket}>
      <i className='material-icons'>add_shopping_cart</i>
      {qty ? <span className='cart-qty'>{qty}</span> : null}
    </div>
  );
};

export default Cart;

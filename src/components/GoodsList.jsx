import React from 'react';
import GoodsItem from './GoodsItem';

const GoodsList = ({ goods = [],addOrder }) => {
  if (!goods.length) {
    return <h3>Ничего не найдено</h3>;
  }
  return (
    <div className='goods'>
      {goods.map((good) => (
        <GoodsItem key={good.id} {...good} addOrder={addOrder}  />
      ))}
    </div>
  );
};

export default GoodsList;

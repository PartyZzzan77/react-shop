import React, { useEffect, useState } from 'react';
import { API_KEY, API_URL } from './../config';
import Alert from './Alert';
import BasketList from './BasketList';
import Cart from './Cart';
import GoodsList from './GoodsList';
import Preloader from './Preloader';

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState('');

  const addOrder = (good) => {
    const orderIndex = order.findIndex((elem) => elem.id === good.id);
    if (orderIndex < 0) {
      const newOrder = { ...good, qty: 1 };

      setOrder([...order, newOrder]);
    } else {
      const updatedOrder = order.map((item, inx) => {
        if (inx === orderIndex) {
          return { ...item, qty: item.qty + 1 };
        }

        return item;
      });
      setOrder(updatedOrder);
    }
    setAlertName(good.name);
  };

  const removeOrder = (id) => {
    const filteredOrder = order.filter((item) => item.id !== id);

    setOrder(filteredOrder);
  };

  const showBasket = () => {
    setBasketShow(!isBasketShow);
  };

  const incrementOrder = (id) => {
    const incrementedOrder = order.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          qty: item.qty + 1,
        };
      }
      return item;
    });

    setOrder(incrementedOrder);
  };

  const decrementOrder = (id) => {
    const decrementedOrder = order.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          qty: item.qty - 1,
        };
      }
      return item;
    });

    setOrder(decrementedOrder);
  };

  const clearAlertName = () => {
    setAlertName('');
  };

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <main className='content container'>
      <Cart qty={order.length} showBasket={showBasket} />
      {isLoading ? (
        <Preloader></Preloader>
      ) : (
        <GoodsList goods={goods} addOrder={addOrder} />
      )}
      {isBasketShow && (
        <BasketList
          orders={order}
          showBasket={showBasket}
          removeOrder={removeOrder}
          incrementOrder={incrementOrder}
          decrementOrder={decrementOrder}
        />
      )}

      {alertName && <Alert name={alertName} clearAlertName={clearAlertName} />}
    </main>
  );
};

export default Shop;

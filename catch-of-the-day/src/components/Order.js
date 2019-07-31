import React from 'react';
import {formatPrice} from '../helpers';

const Order = ({fishes, order}) => {
  const orderIds = Object.keys(order);

  const total = orderIds.reduce((value, key) => {
    const fish = fishes[key];
    const count = order[key];
    const isAvailable = fish && fish.status === 'available';

    return isAvailable ? value + fish.price * count : value;
  }, 0);

  return (
    <div className="order-wrap">
      <h2>Order</h2>
      <ul className="order">
        {orderIds.map(key => {
          const fish = fishes[key];
          const count = order[key];
          const isAvailable = fish && fish.status === 'available';

          if (isAvailable) {
            return (
              <li key={key}>
                {count} lbs {fish.name}
                {formatPrice(count * fish.price)}
              </li>
            );
          }
          return (
            <li key={key}>
              Sorry {fish ? fish.name : 'fish'} is no longer available.
            </li>
          );
        })}
      </ul>
      <div className="total">
        Total:
        <strong>{formatPrice(total)}</strong>
      </div>
    </div>
  );
};

export default Order;

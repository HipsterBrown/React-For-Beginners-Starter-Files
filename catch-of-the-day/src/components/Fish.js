import React from 'react';
import {formatPrice} from '../helpers';

const Fish = ({addToOrder, desc, image, index, name, price, status}) => {
  const isAvailable = status === 'available';

  return (
    <div class="menu-fish">
      <img src={image} alt={name} />
      <h3 className="fish-name">
        {name}
        <span className="price">{formatPrice(price)}</span>
      </h3>
      <p>{desc}</p>
      <button disabled={!isAvailable} onClick={() => addToOrder(index)}>
        {isAvailable ? 'Add to Order' : 'Sold Out'}
      </button>
    </div>
  );
};
export default Fish;

import React from 'react';
import {formatPrice} from '../helpers';

const Fish = ({desc, image, name, price}) => {
  return (
    <div class="menu-fish">
      <img src={image} alt={name} />
      <h3 className="fish-name">
        {name}
        <span className="price">{formatPrice(price)}</span>
      </h3>
      <p>{desc}</p>
      <button>Add to Cart</button>
    </div>
  );
};
export default Fish;

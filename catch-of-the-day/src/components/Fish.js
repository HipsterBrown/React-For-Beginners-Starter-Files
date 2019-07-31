import React from 'react';
// 1. create Fish component
// 2. display div.menu-fish > img[src=image] + (h3.fish-name > span.price) + p + button

const Fish = ({desc, image, name, price}) => (
  <div class="menu-fish">
    <img src={image} alt={name} />
    <h3 className="fish-name">
      {name}
      <span className="price">{price}</span>
    </h3>
    <p>{desc}</p>
    <button>Add to Order</button>
  </div>
);

export default Fish;

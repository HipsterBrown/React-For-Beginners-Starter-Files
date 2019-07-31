import React from 'react';
import AddFishForm from './AddFishForm';

// 1. convert to functional component
// 2. add AddFishForm component, passing addFish prop to it

const Inventory = ({addFish}) => {
  return (
    <div className="inventory">
      <h3>Inventory</h3>
      <AddFishForm addFish={addFish} />
    </div>
  );
};

export default Inventory;

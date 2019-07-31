import React, {useState} from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

// 1. convert to functional component
// 2. overview useState for App
// 3. create addFish callback to set new fish state

const App = () => {
  const [fishes, setFishes] = useState({});

  const addFish = event => {
    event.preventDefault();

    const {name, price, status, desc, image} = event.currentTarget.elements;

    const fish = {
      name: name.value,
      price: price.value,
      status: status.value,
      desc: desc.value,
      image: image.value,
    };

    const fishesCopy = {...fishes};

    fishesCopy[`fish${Date.now()}`] = fish;

    setFishes(fishesCopy);

    event.currentTarget.reset();
  };

  console.log(fishes);

  return (
    <div className="catch-of-the-day">
      <div className="menu">
        <Header tagline="Fresh Seafood Market" age={100} />
      </div>
      <Order />
      <Inventory addFish={addFish} />
    </div>
  );
};

export default App;

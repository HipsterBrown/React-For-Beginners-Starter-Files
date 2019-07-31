import React, {useCallback, useState} from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

const App = () => {
  const [fishes, setFishes] = useState({});
  const [order, setOrder] = useState({});

  const addFish = useCallback(
    fish => {
      console.log('Adding a fish!', fish);
      // get copy of current state
      const updatedFishes = {...fishes};

      // update the state with the new fish
      updatedFishes[`fish${Date.now()}`] = fish;

      // set the new state to re-render our component
      setFishes(updatedFishes);

      // or as a callback

      // setFishes(currentFishes => {
      //   return {
      //     ...currentFishes,
      //     [`fish${Date.now()}`]: fish,
      //   };
      // });

      // or even fancier

      // setFishes(currentFishes => ({ ...currentFishes, [`fish${Date.now()}`]: fish }));
    },
    [fishes],
  );

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

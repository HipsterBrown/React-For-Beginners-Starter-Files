import React, {useCallback, useState} from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';

const App = () => {
  const [fishes, setFishes] = useState({});
  const [order, setOrder] = useState({});

  const addFish = useCallback(
    fish => {
      setFishes(currentFishes => {
        return {
          ...currentFishes,
          [`fish${Date.now()}`]: fish,
        };
      });
    },
    [fishes],
  );

  const loadSampleFishes = useCallback(() => {
    setFishes(sampleFishes);
  }, []);

  console.log(fishes);

  return (
    <div className="catch-of-the-day">
      <div className="menu">
        <Header tagline="Fresh Seafood Market" age={100} />
      </div>
      <Order />
      <Inventory addFish={addFish} loadSampleFishes={loadSampleFishes} />
    </div>
  );
};

export default App;

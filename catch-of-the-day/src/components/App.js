import React, {useCallback, useState} from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

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
        <ul className="fishes">
          {Object.keys(fishes).map(key => (
            <Fish {...fishes[key]} key={key} />
          ))}
        </ul>
      </div>
      <Order />
      <Inventory addFish={addFish} loadSampleFishes={loadSampleFishes} />
    </div>
  );
};

export default App;

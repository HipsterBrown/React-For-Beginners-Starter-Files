import React, {useCallback, useState} from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

// 1. create Fish component
// 2. list using Object.key(fishes).map
// 3. explain "key" prop on lists of items

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

  return (
    <div className="catch-of-the-day">
      <div className="menu">
        <Header tagline="Fresh Seafood Market" age={100} />
        <ul>
          {Object.keys(fishes).map(key => (
            <li>
              <Fish {...fishes[key]} />
            </li>
          ))}
        </ul>
      </div>
      <Order />
      <Inventory addFish={addFish} loadSampleFishes={loadSampleFishes} />
    </div>
  );
};

export default App;

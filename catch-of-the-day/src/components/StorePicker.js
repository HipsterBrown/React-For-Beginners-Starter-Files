import React from 'react';
import {getFunName} from '../helpers';

// 1. convert StorePicker to Functional Component
// 2. overview of event handling in React
// 3. overview of Hooks: https://reactjs.org/docs/hooks-intro.html
// 4. overview of useCallback
// 5. create goToStore callback for form submission
// 6. talk about history.push from react-router

const StorePicker = ({history}) => {
  const goToApp = event => {
    event.preventDefault();

    const {funName} = event.currentTarget.elements;

    history.push(`/store/${funName.value}`);
  };

  return (
    <form className="store-selector" onSubmit={goToApp}>
      <h2>Please Enter A Store</h2>
      <input
        type="text"
        required
        name="funName"
        placeholder="Store Name"
        defaultValue={getFunName()}
      />
      <button type="submit">Visit Store →</button>
    </form>
  );
};

export default StorePicker;

import React from 'react';
import {getFunName} from '../helpers';

// 1. convert StorePicker to Functional Component
// 2. overview of Hooks: https://reactjs.org/docs/hooks-intro.html
// 3. overview of useCallback
// 4. create goToStore callback for form submission
// 5. talk about history.push from react-router

class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-selector">
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;

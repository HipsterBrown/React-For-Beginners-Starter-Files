import React, {useCallback} from 'react';
import {getFunName} from '../helpers';

const StorePicker = ({history}) => {
  const goToStore = useCallback(event => {
    // prevent form submission and page reload
    event.preventDefault();

    // get storeName input from form
    const {storeName} = event.target.elements;

    // navigate to /store/:storeId path through react-router
    history.push(`/store/${storeName.value}`);
  }, []);

  return (
    <form className="store-selector" onSubmit={goToStore}>
      <h2>Please Enter A Store</h2>
      <input
        type="text"
        required
        placeholder="Store Name"
        name="storeName"
        defaultValue={getFunName()}
      />
      <button type="submit">Visit Store →</button>
    </form>
  );
};

// class StorePicker extends React.Component {
//   render() {
//     return (
//       <form className="store-selector" onSubmit={goToStore}>
//         <h2>Please Enter A Store</h2>
//         <input
//           type="text"
//           required
//           placeholder="Store Name"
//           name="storeName"
//           defaultValue={getFunName()}
//         />
//         <button type="submit">Visit Store →</button>
//       </form>
//     );
//   }
// }

export default StorePicker;

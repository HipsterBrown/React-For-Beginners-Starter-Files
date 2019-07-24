import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const StoreForm = styled.form`
  background: white;
  max-width: 500px;
  margin: 50px auto;
  padding: 2rem;
  border: 2px solid black;
`;

const StoreInput = styled.input`
  font-size: 3rem;
  text-align: center;
  width: 100%;
`;

const StoreButton = styled(Button)`
  width: 100%;
`;

class StorePicker extends React.Component {
  render() {
    return (
      <>
        <StoreForm className="store-selector">
          <h2>Please Enter A Store</h2>
          <StoreInput type="text" required={true} placeholder="Store Name" />
          <StoreButton type="submit">Visit Store -></StoreButton>
        </StoreForm>
      </>
    );
  }
}

export default StorePicker;

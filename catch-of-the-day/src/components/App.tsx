import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

const Container = styled.div`
  display: flex;
  height: 90vh;
  max-width: 1500px;
  margin: 0 auto;
  margin-top: 5vh;
  perspective: 1000px;
  transform-style: preserve-3d;

  & > * {
    background: #fff;
    border: 1rem double #1a1a1a;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
    flex: 1 4 auto;
    overflow: scroll;
    padding: 2rem;
    position: relative;
    transition: all 0.3s;

    &:first-child {
      flex-basis: 50%;
      flex-shrink: 1;
    }

    &:nth-child(2) {
      border-left: 0;
      border-right: 0;
      min-width: 300px;
    }

    &:last-child {
      flex-basis: 50%;
      flex-shrink: 1;
    }
  }
`;

class App extends React.Component {
  render() {
    return (
      <Container>
        <div className="menu">
          <Header />
        </div>
        <Order />
        <Inventory />
      </Container>
    );
  }
}

export default App;

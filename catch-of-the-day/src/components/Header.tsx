import React from 'react';
import styled from 'styled-components';

const TopContainer = styled.header`
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 14.4rem;
  line-height: 0.7;
  display: flex;
  justify-content: center;

  .ofThe,
  .of {
    padding-right: 2rem;
    position: relative;
    right: -0.5rem;
  }

  .ofThe {
    display: flex;
    font-size: 3rem;
    color: #f5a623;
    justify-content: center;
    align-items: center;
    background: url('${
      process.env.PUBLIC_URL
    }/images/anchor.svg') center no-repeat;
    background-size: cover;
    padding: 0 1rem;
  }
`;

const Tagline = styled.h3`
  margin: 0;
  font-size: 2rem;
  color: #f5a623;
  position: relative;
  display: inline-block;

  &:before,
  &:after {
    display: block;
    z-index: 1;
    background: #000;
    position: absolute;
    width: 130%;
    height: 1px;
    content: '';
    top: 5px;
    margin-left: -15%;
  }

  &:after {
    top: auto;
    bottom: 7px;
  }

  span {
    background: #fff;
    position: relative;
    z-index: 2;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

class Header extends React.Component {
  render() {
    return (
      <TopContainer>
        <Heading>
          Catch
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
          Day
        </Heading>
        <Tagline>
          <span>Fresh Seafood Market</span>
        </Tagline>
      </TopContainer>
    );
  }
}

export default Header;

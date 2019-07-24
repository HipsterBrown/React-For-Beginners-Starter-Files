import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: none;
  border: 1px solid black;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0.5rem;
  position: relative;
  transition: all 0.2s;
  z-index: 2;

  &[disabled] {
    background: white;
    border-color: ${props => props.theme.colours.red};
    color: ${props => props.theme.colours.red};
    transform: rotate(-100deg) scale(2) translateX(50%) translateY(-50%);

    &:hover {
      color: red;
      cursor: not-allowed;
    }

    &:after {
      display: none;
    }
  }

  &:after {
    background: black;
    content: '';
    display: block;
    height: 0;
    left: 0;
    position: absolute;
    top: 0;
    transition: all 0.2s;
    width: 100%;
    z-index: -1;
  }

  &:hover,
  &:focus {
    color: white;
    outline: 0;

    &:after {
      height: 100%;
    }
  }
`;

export default Button;

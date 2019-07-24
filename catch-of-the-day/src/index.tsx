import React from 'react';
import {render} from 'react-dom';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import StorePicker from './components/StorePicker';
import App from './components/App';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "haymakerregular";
  src: url("${process.env.PUBLIC_URL}/fonts/haymaker-webfont.eot");
  src: url("${
    process.env.PUBLIC_URL
  }/fonts/haymaker-webfont.eot?#iefix") format("embedded-opentype"), url("${
  process.env.PUBLIC_URL
}/fonts/haymaker-webfont.woff") format("woff"), url("${
  process.env.PUBLIC_URL
}/fonts/haymaker-webfont.ttf") format("truetype"), url("${
  process.env.PUBLIC_URL
}/fonts/haymaker-webfont.svg#haymakerregular") format("svg");
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: 'blanchcaps_inline';
  src: url('${process.env.PUBLIC_URL}/fonts/blanch_caps_inline-webfont.eot');
  src: url('${
    process.env.PUBLIC_URL
  }/fonts/blanch_caps_inline-webfont.eot?#iefix') format('embedded-opentype'),
  url('${
    process.env.PUBLIC_URL
  }/fonts/blanch_caps_inline-webfont.woff') format('woff'),
  url('${
    process.env.PUBLIC_URL
  }/fonts/blanch_caps_inline-webfont.ttf') format('truetype'),
  url('${
    process.env.PUBLIC_URL
  }/fonts/blanch_caps_inline-webfont.svg#blanchcaps_inline') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: #D4D4D4;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Open Sans', sans-serif;
    font-size: 2rem;
  }

  h1 {
    font-family: 'blanchcaps_inline', sans-serif;
    text-align: center;
    font-weight: normal;
    margin: 0;
  }

  h2,h3,h4,h5,h6 {
    font-weight: normal;
    font-family: 'haymakerregular', sans-serif;
  }

  h2 {
    text-align: center;
    margin-top: 0;
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 3rem;
  }

  label[for="fold"] {
    position: absolute;
    top: 1rem;
    left: 1rem;
    text-transform: uppercase;
    font-size: 1.3rem;
    background: #000;
    color: #fff;
    border: 2px solid #000;
    cursor: pointer;
    padding: 0.5rem 1rem;
  }

  input#fold {
    display: none;
  }

  input#fold:checked + label {
    background: #fff;
    color: #000;
  }
`;

const theme = {
  colours: {
    orange: '#F5A623',
    red: '#d12028',
    green: '#2DC22D',
  },
};

render(
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <App />
    </>
  </ThemeProvider>,
  document.getElementById('main'),
);

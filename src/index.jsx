import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import App from './App';
import reportWebVitals from './reportWebVitals';

const BREAKPOINTS = {
  mobile: 320,
  tablet: 768,
  desktop: 1000,
};

const breakpointsFull = {
  breakpoints: createBreakpoints({
    values: BREAKPOINTS,
  }),
};
const myTheme = {
  typography: {
    h6: {
      color: '#023047',
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: 'italic',
    },
  },
};
const thememy = createMuiTheme(myTheme, breakpointsFull);

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={thememy}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

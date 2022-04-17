import React from 'react';
import 'tippy.js/dist/tippy.css';
import { ThemeProvider } from 'styled-components';

import { Navigation } from './components';

const theme = {
  primary: {
    default: '#610BEF',
    bg: '#EBECFE',
  },
  gray_scale_off: {
    black: '#14142B',
    white: '#F7F7FC',
    label: '#6E7191'
  },
  gray_scale_bg: '#F7F7FC',

  duration: '0.4s',
  white: '#fff',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navigation/>
      </div>      
    </ThemeProvider>

  );
}

export default App;

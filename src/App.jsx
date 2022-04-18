import React from 'react';
import 'tippy.js/dist/tippy.css';
import { ThemeProvider } from 'styled-components';

import { CircleProgressBar } from './components';

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
  dark_gray: '#C4C4C4',

  duration: '0.4s',
  white: '#fff',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CircleProgressBar
          strokeWidth={10}
          sqSize={150}
          title={'123'}
          percentage={42}
          primaryColor="orange"
          secondaryColor="lavender"
        />
      </div>      
    </ThemeProvider>

  );
}

export default App;

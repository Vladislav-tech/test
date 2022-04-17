import React from 'react';
import 'tippy.js/dist/tippy.css';
import { ThemeProvider } from 'styled-components';
import { DesktopCard } from './components';

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
        <DesktopCard 
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Supreme_pizza.jpg/800px-Supreme_pizza.jpg"
          title="Pizza"
          tags={['Italian', 'Middle','1','2','3','4']}
          summary="oif29 owijfw0 oafoN NIWGJ92J NOIGP209tim powi029tng2 2p9fmvl;893,"
          />
      </div>      
    </ThemeProvider>

  );
}

export default App;

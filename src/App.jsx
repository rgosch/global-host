import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyle } from 'visual/styles/GlobalStyle';
import Routes from 'components/Routes';
import Header from 'components/Header';
import PlansProvider from 'contexts/PlansContext';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <PlansProvider>
          <Routes />
        </PlansProvider>
      </Router>
    </>
  );
}

export default App;

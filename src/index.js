import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MoralisProvider } from 'react-moralis';
import { BrowserRouter } from 'react-router-dom';
import { CharityDAOProvider } from './components/Context/CharityContext';
import { SERVER_URL, APP_ID } from './moralis_config';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
    <CharityDAOProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CharityDAOProvider>
  </MoralisProvider>,
  document.getElementById('root'),
);

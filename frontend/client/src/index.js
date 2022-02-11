import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {DAppProvider, ChainId} from "@usedapp/core"


ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={{ networks :[ChainId.Ropsten]}}> 
    <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Context } from './Components/Context/Context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-vd78rl67lv0vvjsr.us.auth0.com"
    clientId="E9RhE52QA3UBTEkg7LabR0Vg99oBFsh0"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <Context>  
      <App />
  </Context>
  </Auth0Provider>
)
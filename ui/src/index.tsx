import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/tailwind.css';
import './index.less';
import './styles/ant.less';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from "react-oidc-context";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



const oidcConfig = {
  metadata: {
    "issuer": "https://api.twitter.com/2/oauth2",
    "authorization_endpoint": "https://www.facebook.com/v11.0/dialog/oauth",
    "token_endpoint": "https://graph.facebook.com/v11.0/oauth/access_token",
    "userinfo_endpoint": "https://graph.facebook.com/v11.0/oauth/userinfo",
    "end_session_endpoint": "https://graph.facebook.com/v11.0/oauth/revoke",    
    "revocation_endpoint": "https://graph.facebook.com/v11.0/oauth/revoke",
  },
  authority: "https://graph.facebook.com/v11.0/oauth",

  client_id:  '505627834832616', 
  redirect_uri: process.env.REACT_APP_REDIRECTURI ?? "",

  code_verifier: true,
  noonce: true,
  response_type: 'code',
  scope: 'openid',
  onSigninCallback: (_user:any | void) : void => {
      console.log('signed in');
      window.history.replaceState(
        {},
          document.title,
        window.location.pathname
      )
    }
  }


console.log(oidcConfig);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider {...oidcConfig}>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

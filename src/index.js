import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ConnectedRouter } from 'connected-react-router';
import { persistor, store, history } from 'store';
import { Auth0Provider } from '@auth0/auth0-react';
import { PersistGate } from 'redux-persist/integration/react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'app/App';

/**
 * Component @Suspense will track down the progress of loading compo0nents
 * Atribute @fallback will be displayed till component is still loading
 */

ReactDOM.render(
  <Suspense fallback={<span>Is loading...</span>}>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
           
              <App />
  
          </BrowserRouter>
        </PersistGate>
      </ConnectedRouter>
    </Provider>
  </Suspense>,

  document.getElementById('root'),
);

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import './GlobalStyles.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { persistor } from './reducer';
import { GlobalCtxProvider } from './context';
import { PersistGate } from 'redux-persist/integration/react';
import { Suspense } from 'react';

export const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <Suspense fallback={<></>}>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <GlobalCtxProvider>
              <App />
            </GlobalCtxProvider>
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </ApolloProvider>
  </Suspense>,
);

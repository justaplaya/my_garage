import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import './GlobalStyles.css';
import { ApolloProvider, ApolloClient, InMemoryCache, useApolloClient } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { persistor } from './store';
import { GlobalContextProvider } from './globalContext';
import { PersistGate } from 'redux-persist/integration/react';
import { ApolloProvider as ApolloProviderHooks, useQuery as useQueryHooks } from '@apollo/react-hooks';
import { Suspense } from 'react';

export const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <Suspense fallback={<></>}>
    <ApolloProvider client={client}>
      <React.StrictMode>
        <BrowserRouter>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <GlobalContextProvider>
                <App />
              </GlobalContextProvider>
            </PersistGate>
          </Provider>
        </BrowserRouter>
      </React.StrictMode>
    </ApolloProvider>
  </Suspense>,
);

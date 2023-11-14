import * as ReactDOM from 'react-dom/client';
import App from './App';
import './GlobalStyles';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { persistor } from './reducer';
import { PersistGate } from 'redux-persist/integration/react';
import { Suspense } from 'react';

export const client = new ApolloClient({
  // uri: 'http://localhost:5000/graphql',
  uri: 'http://45.84.227.97:5000/graphql',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <Suspense fallback={<></>}>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </ApolloProvider>
  </Suspense>,
);

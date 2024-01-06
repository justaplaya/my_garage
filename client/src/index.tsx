import * as ReactDOM from 'react-dom/client';
import App from './App';
import './GlobalStyles';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { persistor } from './reducer';
import { PersistGate } from 'redux-persist/integration/react';
import { Suspense } from 'react';
import { setContext } from '@apollo/client/link/context';
import { getCookie } from './utils/helpers/auth';

const httpLink = createHttpLink({
  uri: __MODE__ === 'development' ? 'http://localhost:5000/graphql' : 'http://45.84.227.97:5000/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = getCookie('token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
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

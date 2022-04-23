import * as React from 'react';
import {createRoot} from 'react-dom/client';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import './index.css';
import App from './App';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache(),
});
const rootElement = document.getElementById('root')!;

const root = createRoot(rootElement);

root.render(
  <ApolloProvider client={client}>
  <App />  
  </ApolloProvider>,
);
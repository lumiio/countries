import { ApolloClient, InMemoryCache } from '@apollo/client';

export const countryClient = new ApolloClient({
    uri: 'https://countries.trevorblades.com/',
    cache: new InMemoryCache(),
  });
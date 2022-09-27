import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

export const countryClient = new ApolloClient({
    uri: 'https://countries.trevorblades.com/',
    cache: new InMemoryCache(),
  });
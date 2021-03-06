/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Page from '../components/Page';
import AppProvider from 'context/AppProvider';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'aos/dist/aos.css';

const client = new ApolloClient({
  uri: 'https://graphql-pokeapi.graphcdn.app/',
  cache: new InMemoryCache(),
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function App({ Component, pageProps }): JSX.Element {
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Pokepedia</title>
      </Head>
      <AppProvider>
        <ApolloProvider client={client}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </AppProvider>
    </React.Fragment>
  );
}

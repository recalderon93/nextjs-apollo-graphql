import { ApolloProvider } from '@apollo/client';
import client from '../graphql/client/apolloClient';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/** Apollo context Provider, accepts the ApolloClient */}
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
)}

export default MyApp;

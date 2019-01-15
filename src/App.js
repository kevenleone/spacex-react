import React, { Component } from 'react';
import Logo from './logo.png'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Router from './Router';

const Client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={Client}>
      <div className="container">
        <img alt="logo" src={Logo} style={{display: 'block', margin: 'auto'}} />
       <Router />
      </div>

      </ApolloProvider>
    );
  }
}

export default App; 

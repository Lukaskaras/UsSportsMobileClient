import React from 'react'
import { ImageBackground, StatusBar, AppRegistry } from 'react-native'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import TabNavigator from './TabNavigator'

const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:4000' }),
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <StatusBar barStyle='light-content' />
      <ImageBackground source={require('../static/background.jpg')} style={{width: '100%', height: '100%'}}>
        <TabNavigator />
      </ImageBackground>
    </ApolloProvider>
  )
}

export default App

AppRegistry.registerComponent('MyApplication', () => App)

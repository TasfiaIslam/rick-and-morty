import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import './App.css';
import CharacterList from './components/CharacterList'

// apollo client
const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
})


function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        Rick and Morty
        <CharacterList />
      </div>
    </ApolloProvider>
  );
}

export default App;

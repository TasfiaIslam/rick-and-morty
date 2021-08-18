import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import './App.css';
import CharacterList from './components/CharacterList'
import Header from './components/Header';

// apollo client
const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
})


function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <div className="w-9/12 mx-auto">
          <CharacterList />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;

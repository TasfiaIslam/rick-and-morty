import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';


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
          <Main />
        </div> 
      </div>
    </ApolloProvider>
  );
}

export default App;

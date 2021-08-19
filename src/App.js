import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import './App.css';
import Header from './components/Header';
import Character from './components/character';
import Episode from './components/episode';


// apollo client
const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
})


function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <Header />
          <div className="w-9/12 mx-auto">
            <Switch>
              <Route exact path="/">
                <Character />
              </Route>
              <Route path="/episodes">
                <Episode />
              </Route>
            </Switch>
          </div> 
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import './App.css';
import Header from './components/Header';
import Character from './components/character';
import Episode from './components/episode';
import Location from './components/location';
import CharacterDetail from './components/character/CharacterDetail';
import EpisodeDetail from './components/episode/EpisodeDetail';
import LocationDetail from './components/location/LocationDetail';


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
          <div className="w-5/6 mx-auto">
            <Switch>
              <Route exact path="/">
                <Character />
              </Route>
              <Route path="/characters/:id">
                <CharacterDetail />
              </Route>
              <Route exact path="/locations">
                <Location />
              </Route>
              <Route path="/locations/:id">
                <LocationDetail />
              </Route>
              <Route exact path="/episodes">
                <Episode />
              </Route>
              <Route path="/episodes/:id">
                <EpisodeDetail />
              </Route>
            </Switch>
          </div> 
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;

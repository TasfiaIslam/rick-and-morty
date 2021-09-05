import { useState } from "react";
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
import Home from './components/Home';
import Footer from './components/Footer';


// apollo client
const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
})


function App() {

  const [nameQuery, setNameQuery] = useState("");

  const handleSearchTerm = (value) => {
    setNameQuery(value);
  }


  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <Header handleSearchTerm={handleSearchTerm}/>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <div className="w-5/6 mx-auto">
                <Route exact path="/characters">
                  <Character nameQuery={nameQuery} handleSearchTerm={handleSearchTerm} />
                </Route>
                <Route path="/characters/:id">
                  <CharacterDetail />
                </Route>
                <Route exact path="/locations">
                  <Location nameQuery={nameQuery} />
                </Route>
                <Route path="/locations/:id">
                  <LocationDetail />
                </Route>
                <Route exact path="/episodes">
                  <Episode nameQuery={nameQuery} />
                </Route>
                <Route path="/episodes/:id">
                  <EpisodeDetail />
                </Route>
              </div> 
            </Switch>
            <Footer />
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;

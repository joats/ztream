import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store';
import './App.css';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container className="m-0">
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/profile" component={Profile} />
            </Switch>
          </Router>
        </Container>
      </Provider>
    );
  }
}

export default App;

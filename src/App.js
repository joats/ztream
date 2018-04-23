import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/pages/Login';
import Home from './components/pages/Home';

class App extends Component {
  render() {
    return (
      <Container className="m-0">
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </Router>
      </Container>
    );
  }
}

export default App;

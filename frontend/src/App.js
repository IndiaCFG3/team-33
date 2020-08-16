import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Signup from './pages/Signup'
import Login from './pages/Login'

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/signup" component={Signup} exact />
    </Switch>
      
    </div>
    </Router>
  );
}

export default App;

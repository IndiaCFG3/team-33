import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Signup from './pages/Signup'
import Login from './pages/Login'
import UserDetail from './pages/UserDetail'
import UserForm from './pages/UserForm'
import UserPending from './pages/UserPending'
import UserList from './pages/UserList'

function App() {
  return (
    <Router>
    <div className="App">
    
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/signup" component={Signup} exact />
      <Route path="/userdetail" component={UserDetail} exact />
      <Route path="/userpending" component={UserPending} exact />
      <Route path="/userform" component={UserForm} exact />
      <Route path="/userlist" component={UserList} exact />
    </Switch>
  
      
    </div>
    </Router>
  );
}

export default App;

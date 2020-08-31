import React, { Component } from 'react';
import Home from './Component/Home'
import Nav from './Component/Nav'
import SignUp from './Component/SignUp'
import Login from './Component/Login'

import './App.css'
import {BrowserRouter as Router , Route} from 'react-router-dom'
class App extends Component {
  render() { 
    return (
      <Router>
        <div className = 'app'>
        <Nav/>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/login" exact component={Login}/>
        </div>
      </Router>

        
    );
  }
}
 
export default App;

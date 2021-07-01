import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./containers/login.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (

    <Router exact path="/login">
     <Login />


    
    </Router>
  );
}

export default App;

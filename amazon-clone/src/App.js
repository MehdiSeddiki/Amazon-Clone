import React, { useEffect } from 'react';
import './App.css';
import Header from './Header'; 
import Home from './Home';
import Checkout from './Checkout';
import Login from "./Login";
import {db, auth} from "./firebase"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { useStateValue } from "./StateProvider";

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect( () => {
    // will only run once when the appp component loads
    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS", authUser);

      if (authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      } 
    })
  }, [])
  return (
    // BEM
    <Router>
      <div className="app">
      <Header />

        <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

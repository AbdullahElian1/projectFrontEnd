import React, { Component } from 'react';
import Header from './component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer';
import { withAuth0 } from '@auth0/auth0-react';
import Home from './component/home/Home';
import LogoutButton from './component/LogoutButton';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export class App extends Component {

  
  render() {
    return (
      <div>
        <Router>
        <Header />
          <Switch>
            <Route exact path="/">
              <Home />

            </Route>

            <Route  path="myphotos">
              

            </Route>


        <br />
        <br />
        <br />

          </Switch>
        </Router>
        <Footer />

        
      </div>
    )
  }
}

export default withAuth0(App);

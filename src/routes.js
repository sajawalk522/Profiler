
import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Profile from './components/profile';
import Porfolio from './components/portfolio';
import ContentArea from './components/contentArea';


class Router extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
              <div>
                 
          
                  <Switch>
                      <Route path='/profile' component={ Profile } />
                      <Route path='/porfolio' component={ Porfolio } />
                      <Route exact path='' component={ ContentArea } />
                      <Redirect from='*' to='/' />
                  </Switch>
              </div>
            </BrowserRouter>
        );
    }
};

export default Router;

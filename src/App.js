import React, { Component } from 'react';

// Toast Container
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Router
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Components imported from 'src/components'
import Header from './components/Header';
import HomePage from './components/HomePage';
import OrderMessage from './components/OrderMessage';
import Footer from './components/Footer';
import PageNotFound from './components/pageNotFound';

// Materialize CSS imported from 'node-modules folder'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js'

// CSS imported from 'src/css'
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/thanks" component={OrderMessage} />
            <Route exact path="/" component={HomePage} />
            <Route path="" component={PageNotFound} />
          </Switch>
        </BrowserRouter>
        <Footer />
        <ToastContainer />
      </div>
    );
  }
}

export default App;
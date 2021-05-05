import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppHeader from './components/Layout/Header';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import NotFound from './components/Layout/NotFound';
import Footer from './components/Layout/Footer';
import About from './components/About/About';
import Home from './components/Home/Home';
import ShopPreferences from './components/UserProfile/ShopPreferences';

function AppRoutes() {
  return (
    <Router>
      <AppHeader />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/about" exact component={About} />
        <Route path="/profile" exact component={ShopPreferences} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default AppRoutes;

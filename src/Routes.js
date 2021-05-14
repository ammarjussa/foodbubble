import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppHeader from './components/Layout/Header';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import NotFound from './components/Layout/NotFound';
import Footer from './components/Layout/Footer';
import About from './components/About/About';
import Home from './components/Home/Home';
import Preferences from './components/UserProfile/Preferences';
import Notifications from './components/UserProfile/Notifications';
import UserProfileOptions from './components/UserProfile/UserProfileOptions';
import Feedback from './components/UserProfile/Feedback';
import ByCategory from './components/Search/ByCategory';
import ByMeal from './components/Search/ByMeal';

function AppRoutes() {
  return (
    <Router>
      <AppHeader />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/about" exact component={About} />
        <Route path="/notifications" exact component={Notifications} />
        <Route path="/feedback" exact component={Feedback} />
        <Route path="/options" exact component={UserProfileOptions} />
        <Route path="/search" exact component={ByMeal} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default AppRoutes;

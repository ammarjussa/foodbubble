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
import Notifications from './components/UserProfile/Notifications';
import UserProfileOptions from './components/UserProfile/UserProfileOptions';
import Feedback from './components/UserProfile/Feedback';
import ByCategory from './components/Search/ByCategory';
import ByMeal from './components/Search/ByMeal';
import UserProfile from './components/UserProfile/UserProfile';
import RecipeInformation from './components/MealPlanner/RecipeInformation';
import MyCustomRecipes from './components/CustomRecipe/MyCustomRecipes';
import AddCustomRecipe from './components/CustomRecipe/AddCustomRecipe';
import AddCustomFood from './components/CustomFood/AddCustomFood';
import DietaryRequirements from './components/UserProfile/DietaryRequirements';
import CookingExperience from './components/UserProfile/CookingExperience';
import UserAvoidance from './components/UserProfile/UserAvoidance';
import UserNutrition from './components/UserProfile/UserNutrition';

import Household from './components/UserProfile/Household';
import FavoriteCuisine from './components/UserProfile/FavoriteCuisine';

function AppRoutes() {
  return (
    <Router>
      <AppHeader />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/about" exact component={About} />
        <Route path="/preference" exact component={ShopPreferences} />
        <Route path="/dietary" exact component={DietaryRequirements} />
        <Route path="/avoidance" exact component={UserAvoidance} />
        <Route path="/nutrition" exact component={UserNutrition} />
        <Route path="/household" exact component={Household} />
        <Route path="/experience" exact component={CookingExperience} />
        <Route path="/cuisine" exact component={FavoriteCuisine} />
        <Route path="/notifications" exact component={Notifications} />
        <Route path="/feedback" exact component={Feedback} />
        <Route path="/options" exact component={UserProfileOptions} />
        <Route path="/search" exact component={ByCategory} />
        <Route path="/profile" exact component={UserProfile} />
        <Route path="/planner" exact component={RecipeInformation} />
        <Route path="/recipes" exact component={MyCustomRecipes} />
        <Route path="/addrecipe" exact component={AddCustomRecipe} />
        <Route path="/addfood" exact component={AddCustomFood} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default AppRoutes;

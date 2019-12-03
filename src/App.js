import React, { Component } from "react";

// importing from global styles
import { AppWrapper } from "./components/Global/styled";

// Set up routes
import { Route } from "react-router-dom";

// importing component pages for routes
import DailyLog from "./components/DailyLog";
import LandingPage from "./components/LandingPage";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Onboarding from "./components/Onboarding";

// setting up private route to make sure only authenticated users are in our home page
import PrivateRoute from "./components/PrivateRoute";
// import RequireAuth from "./components/Auth";

// imports for toast wrapper 
import { ToastProvider } from "react-toast-notifications";

// imports for flywheel testing and example use
import Flywheel from "./components/Global/flywheel-menu/Flywheel";
import {
  faAppleAlt,
  faUtensils,
  faWeight,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

  let childButtonIcons = [ 
    {
      icon: faAppleAlt,
      name: "Food",
      isaLink: true,
      linkPath: "/login"
    },
    { icon: faUtensils, name: "Recipe", isaLink: false },
    { icon: faWeight, name: "Weight", isaLink: false }
  ];

class App extends Component {
  render() {
    return (
      <ToastProvider number="5000"> 
      <AppWrapper>
        <PrivateRoute exact path="/" component={DailyLog} />
        <Route path="/landing" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/onboarding" component={Onboarding} />

      <Flywheel maintButtonIcon={faTimes} childButtonIcons={childButtonIcons}/> 
      </AppWrapper>
      </ToastProvider>
    );
  }
}

export default App;

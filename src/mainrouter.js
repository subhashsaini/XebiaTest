import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./container/Login";
import Dashboard from "./container/dashboard";

function MainRouter() {
  return (
    <Switch>      
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

export default MainRouter;

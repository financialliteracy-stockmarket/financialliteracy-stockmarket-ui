import React from 'react'
import SignIn from 'views/SignIn/SignIn';
import { Router, Route, Switch, Redirect } from "react-router-dom";

const LoginLayout = () => {
  return (
    <Switch>
      <Route
        path={'/login'}
        component={SignIn}
        key={'key'}
      />
    </Switch>
  )
}

export default LoginLayout
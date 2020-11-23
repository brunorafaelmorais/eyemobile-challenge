import { Route, Switch, Redirect } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import NotFound from '../pages/NotFound'
import Register from '../pages/Register'

function Routes() {
  return (
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/register" component={Register} />

      <Redirect from="/" exact to="/dashboard" />

      <Route path="*" component={NotFound} />
    </Switch>
  )
}

export default Routes

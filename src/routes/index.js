import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
    </Switch>
  )
}

export default Routes

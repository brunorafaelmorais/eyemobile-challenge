import { Link, Switch, Route } from 'react-router-dom'

import Customers from './Customers'
import Totals from './Totals'

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      <nav>
        <Link to="/totals">Totais</Link>
        <Link to="/customers">Clientes</Link>
      </nav>

      <Switch>
        <Route path="/totals" component={Totals} />
        <Route path="/customers" component={Customers} />
      </Switch>
    </div>
  )
}

export default Dashboard

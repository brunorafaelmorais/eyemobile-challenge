import {
  Switch,
  Route,
  useRouteMatch,
  Redirect,
  NavLink
} from 'react-router-dom'

import { Container } from './styles'
import customersIcon from '../../assets/icons/ic_customers.svg'
import totalsIcon from '../../assets/icons/ic_totals.svg'

import BaseLayout from '../../components/BaseLayout'
import SVGIcon from '../../components/SVGIcon'

import Customers from './Customers'
import Totals from './Totals'

function Dashboard() {
  const { path } = useRouteMatch()

  return (
    <BaseLayout title="Meu Faturamento">
      <Container>
        <nav>
          <NavLink to={`${path}/totals`}>
            <SVGIcon icon={totalsIcon} />
            <span>Totais</span>
          </NavLink>
          <NavLink to={`${path}/customers`}>
            <SVGIcon icon={customersIcon} />
            <span>Clientes</span>
          </NavLink>
        </nav>
        <section>
          <Switch>
            <Route path={`${path}/totals`} component={Totals} />
            <Route path={`${path}/customers`} component={Customers} />

            <Redirect from={path} exact to={`${path}/totals`} />
          </Switch>
        </section>
      </Container>
    </BaseLayout>
  )
}

export default Dashboard

import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'

import { Container, PetLogo, AsideNav } from './styles'
import SVGIcon from '../SVGIcon'

import Logo from '../../assets/icons/ic_logo.svg'
import DashIcon from '../../assets/icons/ic_dashboard.svg'
import RegisterIcon from '../../assets/icons/ic_register.svg'
import MenuIcon from '../../assets/icons/ic_menu.svg'
import { useState } from 'react'

function BaseLayout({ children, title = '' }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Container className={`${menuOpen ? 'menuOpened' : ''}`}>
      <header>
        <div>
          <div className="icon" onClick={() => setMenuOpen(true)}>
            <SVGIcon icon={MenuIcon} />
          </div>
          <nav>
            <Link to="/">Petshop</Link>
            {title && <span>{title}</span>}
          </nav>
        </div>
      </header>
      <aside>
        <PetLogo>
          <SVGIcon icon={Logo} size="100%" />
        </PetLogo>

        <AsideNav>
          <NavLink to="/dashboard">
            <SVGIcon icon={DashIcon} />
            <span>Meu Faturamento</span>
          </NavLink>
          <NavLink to="/register">
            <SVGIcon icon={RegisterIcon} />
            <span>Cadastro</span>
          </NavLink>
        </AsideNav>
      </aside>
      <section>
        <div>{children}</div>
      </section>
      <div className="overlay" onClick={() => setMenuOpen(false)} />
    </Container>
  )
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
}

export default BaseLayout

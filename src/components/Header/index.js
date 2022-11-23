import {Link, withRouter} from 'react-router-dom'

import {Component} from 'react'
import './index.css'

class Header extends Component {
  state = {menuOpen: false}

  toggleMenu = () => {
    this.setState(prevState => ({menuOpen: !prevState.menuOpen}))
  }

  closeMenu = () => {
    this.setState({menuOpen: false})
  }

  render() {
    const {menuOpen} = this.state
    const {match} = this.props
    const {path} = match

    const homePath = path === '/' ? 'link active' : 'link'
    const vaccinationPath = path === '/vaccination' ? 'link active' : 'link'
    const aboutPath = path === '/about' ? 'link active' : 'link'

    return (
      <div>
        <nav className="navbar-container">
          <Link to="/" className="logo-link">
            <span className="app-logo">COVID19</span>
            <span className="app-logo blue">INDIA</span>
          </Link>
          <ul className="navbar-list">
            <Link to="/" className="logo-link">
              <li key="home">
                <button type="button" className={homePath}>
                  Home
                </button>
              </li>
            </Link>
            <Link to="/vaccination" className="logo-link">
              <li key="vaccination">
                <button type="button" className={vaccinationPath}>
                  Vaccination
                </button>
              </li>
            </Link>
            <Link to="/about" className="logo-link">
              <li key="about">
                <button type="button" className={aboutPath}>
                  About
                </button>
              </li>
            </Link>
          </ul>
          <button
            className="menu-button"
            type="button"
            onClick={this.toggleMenu}
          >
            <img
              src="https://res.cloudinary.com/dyhsyterg/image/upload/v1643368210/add-to-queue_1_lrcjeu.png"
              alt="menu item"
              className="header-icon"
            />
          </button>
        </nav>
        {menuOpen && (
          <ul className="menu-list">
            <Link to="/" className="menu-link">
              <li>
                <button type="button" className={homePath}>
                  Home
                </button>
              </li>
            </Link>
            <Link to="/vaccination" className="menu-link">
              <li>
                <button type="button" className={vaccinationPath}>
                  Vaccination
                </button>
              </li>
            </Link>
            <Link to="/about" className="menu-link">
              <li>
                <button type="button" className={aboutPath}>
                  About
                </button>
              </li>
            </Link>
            <li className="close">
              <button
                type="button"
                className="close-button"
                onClick={this.closeMenu}
              >
                <img
                  src="https://res.cloudinary.com/dyhsyterg/image/upload/v1643369220/Shape_hewlfb.png"
                  alt="close icon"
                  className="close-icon"
                />
              </button>
            </li>
          </ul>
        )}
      </div>
    )
  }
}

export default withRouter(Header)

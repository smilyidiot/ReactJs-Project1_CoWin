import {Link, withRouter} from 'react-router-dom'

import {Component} from 'react'
import './index.css'

class Header extends Component {
  state = {show: false}

  render() {
    const {show} = this.state
    console.log(show)

    const {match} = this.props
    const {path} = match

    const homePath = path === '/' ? 'link active' : 'link'
    const vaccinationPath = path === '/vaccination' ? 'link active' : 'link'
    const aboutPath = path === '/about' ? 'link active' : 'link'

    return (
      <nav className="navbar-container">
        <Link to="/" className="logo-link">
          <span className="app-logo">COVID</span>
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
      </nav>
    )
  }
}

export default withRouter(Header)

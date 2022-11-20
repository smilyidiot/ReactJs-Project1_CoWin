import {FiGithub, FiInstagram, FiTwitter} from 'react-icons/fi'
import './index.css'

const Footer = () => (
  <div className="footer-container">
    <h1 className="app-name">
      COVID19<span className="app-name blue">INDIA</span>
    </h1>
    <p className="footer-para">
      we stand with everyone fighting on the front lines
    </p>
    <div className="footer-icon-container">
      <FiGithub className="footer-icon" />
      <FiInstagram className="footer-icon" />
      <FiTwitter className="footer-icon" />
    </div>
  </div>
)

export default Footer

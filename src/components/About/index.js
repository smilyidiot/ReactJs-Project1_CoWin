import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Footer from '../Footer'
import Header from '../Header'
import './index.css'

class About extends Component {
  state = {
    faqsList: [],
    status: 'INITIAL',
  }

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    this.setState({status: 'IN_PROGRESS'})

    const url = 'https://apis.ccbp.in/covid19-faqs'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)

    if (response.ok) {
      const {faq} = data
      this.setState({faqsList: faq, status: 'SUCCESS'})
    }
  }

  successView = () => {
    const {faqsList} = this.state

    return (
      <div className="about-container">
        <h1 className="about-heading">About</h1>
        <p className="update-time">Last update on march 28th 2021.</p>
        <p className="para-heading">
          COVID-19 vaccines be ready for distribution
        </p>
        <ul
          className="quest-ans-list"
          // testid="faqsUnorderedList"
        >
          {faqsList.map(each => (
            <li className="qa-list-item" key={each.qno}>
              <p className="question">{each.question}</p>
              <p className="answer">{each.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  loadingView = () => (
    <div className="main-home-container">
      <div
        className="loader-container"
        //   testid="aboutRouteLoader"
      >
        <Loader type="TailSpin" color="#007BFF" width="25px" height="25px" />
      </div>
    </div>
  )

  showContent = () => {
    const {status} = this.state
    switch (status) {
      case 'SUCCESS':
        return this.successView()
      default:
        return this.loadingView()
    }
  }

  render() {
    return (
      <div>
        <Header />
        {this.showContent()}
        <Footer />
      </div>
    )
  }
}
export default About

import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'

import {BsSearch} from 'react-icons/bs'
import {BiChevronRightSquare} from 'react-icons/bi'
import {FcGenericSortingAsc, FcGenericSortingDesc} from 'react-icons/fc'

import Header from '../Header'
import Footer from '../Footer'

import './index.css'

const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
  },
]

class Home extends Component {
  state = {
    status: 'INITIAL',
    searchInput: '',
    searchList: [],
    countryList: [],
  }

  componentDidMount() {
    this.getCountriesList()
  }

  getCountriesList = async () => {
    this.setState({status: 'IN_PROGRESS'})

    const url = 'https://apis.ccbp.in/covid19-state-wise-data'

    const response = await fetch(url)
    const data = await response.json()
    console.log('home', data)

    if (response.ok) {
      const newData = statesList.map(eachCountry => {
        if (data[eachCountry.state_code]) {
          return {
            id: eachCountry.state_code,
            name: eachCountry.state_name,
            confirmed: data[`${eachCountry.state_code}`].total.confirmed,
            recovered: data[`${eachCountry.state_code}`].total.recovered,
            deceased: data[`${eachCountry.state_code}`].total.deceased,
            population: data[`${eachCountry.state_code}`].meta.population,
            active:
              data[`${eachCountry.state_code}`].total.confirmed -
              (data[`${eachCountry.state_code}`].total.recovered +
                data[`${eachCountry.state_code}`].total.deceased),
          }
        }
        return {
          id: eachCountry.state_code,
          name: eachCountry.state_name,
          confirmed: 0,
          active: 0,
          recovered: 0,
          deceased: 0,
          population: 0,
        }
      })
      this.setState({countryList: newData, status: 'SUCCESS'})
    }
  }

  ascendingSort = () => {
    const {countryList} = this.state
    // Using string sort method :-
    //  0 -> initial list
    //  1 -> ascending list
    // -1 -> descending list

    const ascendingCountryList = countryList.sort((a, b) => {
      const firstState = a.name.toLowerCase()
      const secondState = b.name.toLowerCase()
      if (firstState < secondState) {
        return -1
      }
      if (firstState > secondState) {
        return 1
      }
      return 0
    })
    // console.log('asc', ascendingCountryList)
    this.setState({countryList: ascendingCountryList})
  }

  descendingSort = () => {
    const {countryList} = this.state
    // Using string sort method :-
    //  0 -> initial list
    //  1 -> ascending list
    // -1 -> descending list

    const descendingCountryList = countryList.sort((a, b) => {
      const firstState = a.name.toLowerCase()
      const secondState = b.name.toLowerCase()
      if (firstState < secondState) {
        return 1
      }
      if (firstState > secondState) {
        return -1
      }
      return 0
    })
    // console.log('desc', descendingCountryList)
    this.setState({countryList: descendingCountryList})
  }

  onSearch = event => {
    const enterValue = event.target.value

    const newSearchList = statesList.filter(eachSearch =>
      eachSearch.state_name.toLowerCase().includes(enterValue.toLowerCase()),
    )
    // console.log(newSearchList)
    this.setState({searchInput: enterValue, searchList: newSearchList})
  }

  showSuccessView = () => {
    const {countryList, searchInput, searchList} = this.state

    // combining all the cases into array.. to calculate the sum
    const confirmedArray = countryList.map(each => each.confirmed)
    const activeArray = countryList.map(each => each.active)
    const recoveredArray = countryList.map(each => each.recovered)
    const deceasedArray = countryList.map(each => each.deceased)

    // calculating total
    const totalConfirmedCases = confirmedArray.reduce((a, b) => a + b, 0)
    const totalActiveCases = activeArray.reduce((a, b) => a + b, 0)
    const totalRecoveredCases = recoveredArray.reduce((a, b) => a + b, 0)
    const totalDeceasedCases = deceasedArray.reduce((a, b) => a + b, 0)
    console.log('search', searchList)

    return (
      <div className="home-container">
        <div className="searchbar">
          <BsSearch className="search-icon" />
          <input
            type="search"
            placeholder="Enter the state"
            value={searchInput}
            onChange={this.onSearch}
            className="search-box"
          />
        </div>
        {searchList.length !== 0 && searchInput !== '' && (
          <ul
            className="search-container"
            //   testid="searchResultsUnorderedList"
          >
            {searchList.map(eachResult => (
              <Link
                to={`/state/${eachResult.state_code}`}
                className="search-link"
              >
                <li className="search-list-item" key={eachResult.state_code}>
                  <p className="search-item">{eachResult.state_name}</p>
                  <div className="icon-container">
                    <p className="item-code">{eachResult.state_code}</p>
                    <BiChevronRightSquare color="#FACC15" />
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        )}
        <div className="result-container">
          <div className="display-list">
            <div
              className="list-card"
              // testid="countryWideConfirmedCases"
            >
              <p className="confirm-card-name">Confirmed</p>
              <img
                src="https://res.cloudinary.com/dyhsyterg/image/upload/v1641905267/confirmed_qmelok.svg"
                className="confirm-card-image"
                alt="country wide confirmed cases pic"
              />
              <p className="confirm-card-number">{totalConfirmedCases}</p>
            </div>
            <div
              className="list-card"
              // testid="countryWideActiveCases"
            >
              <p className="active-card-name">Active</p>
              <img
                src="https://res.cloudinary.com/dyhsyterg/image/upload/v1641908440/active_tmhkjf.svg"
                className="confirm-card-image"
                alt="country wide active cases pic"
              />
              <p className="active-card-number">{totalActiveCases}</p>
            </div>
            <div
              className="list-card"
              // testid="countryWideRecoveredCases"
            >
              <p className="recovered-card-name">Recovered</p>
              <img
                src="https://res.cloudinary.com/dyhsyterg/image/upload/v1641909310/recovered_dtfpwl.svg"
                className="recovered-card-image"
                alt="country wide recovered cases pic"
              />
              <p className="recovered-card-number">{totalRecoveredCases}</p>
            </div>
            <div
              className="list-card"
              // testid="countryWideDeceasedCases"
            >
              <p className="deceased-card-name">Deceased</p>
              <img
                src="https://res.cloudinary.com/dyhsyterg/image/upload/v1641909662/deceased_tskayc.svg"
                className="deceased-card-image"
                alt="country wide deceased cases pic"
              />
              <p className="deceased-card-number">{totalDeceasedCases}</p>
            </div>
          </div>
          <div
            className="states-table"
            //   testid="stateWiseCovidDataTable"
          >
            <div className="states-table-headings">
              <div className="state-ut-container">
                <p className="state-ut-name">States/UT</p>
                <button
                  type="button"
                  className="icon-button"
                  onClick={this.ascendingSort}
                  //   testid="ascendingSort"
                >
                  <FcGenericSortingAsc className="ascending-icon" />
                </button>
                <button
                  type="button"
                  className="icon-button"
                  onClick={this.descendingSort}
                  //   testid="descendingSort"
                >
                  <FcGenericSortingDesc className="descending-icon" />
                </button>
              </div>
              <p className="column-title">Confirmed</p>
              <p className="column-title">Active</p>
              <p className="column-title">Recovered</p>
              <p className="column-title">Deceased</p>
              <p className="column-title">Population</p>
            </div>
            <ul className="states-table-content">
              {countryList.map(eachState => (
                <li className="states-table-row" key={eachState.id}>
                  <Link
                    to={`/state/${eachState.id}`}
                    className="state-table-link"
                  >
                    <p className="column-name">{eachState.name}</p>
                  </Link>
                  <p className="column confirmed">{eachState.confirmed}</p>
                  <p className="column active">{eachState.active}</p>
                  <p className="column recovered">{eachState.recovered}</p>
                  <p className="column deceased">{eachState.deceased}</p>
                  <p className="column population">{eachState.population}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  showLoadingView = () => (
    <div
      className="loader-container"
      // testid="homeRouteLoader"
    >
      <Loader type="TailSpin" color="#007BFF" width="25px" height="25px" />
    </div>
  )

  showHomeContent = () => {
    const {status} = this.state
    switch (status) {
      case 'SUCCESS':
        return this.showSuccessView()
      default:
        return this.showLoadingView()
    }
  }

  render() {
    return (
      <div>
        <Header />
        {this.showHomeContent()}
        <Footer />
      </div>
    )
  }
}

export default Home

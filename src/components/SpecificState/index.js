import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {BarChart, LineChart, XAxis, Bar, YAxis, Tooltip, Line} from 'recharts'

import Header from '../Header'
import Footer from '../Footer'

import './index.css'

const stateDetailsList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643875895/Group_7362andaman_1_jh56ac.svg',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643877291/Group_7354andhra_dhfqkx.svg',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643877187/Group_7340arunachal_i2mqek.svg',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643874959/Group_7341assam_mafnkb.svg',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643874425/Group_7335bihar_zbj8hr.svg',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643875818/Group_7361chandigargh_i4y1ct.svg',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643875355/Group_7353chattisgarh_nka5kq.svg',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643875946/Group_7357daman_xojaml.svg',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643876123/Group_7358delhi_lzftgr.svg',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643877071/Group_7349goa_vigjoh.svg',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643874554/Group_7337gujarat_myivom.svg',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643874182/Group_7332haryana_j5p8vb.svg',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643872638/Group_7364himachal_qzmfyy.svg',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643866939/Group_7328jammu_dgsgns.svg',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643874637/Group_7342jharkhand_a2ef27.svg',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643875591/Group_7339karnataka_keqvvv.svg',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643875646/Group_7355kerala_hy2ctu.svg',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643876202/Group_7363ladakh_wgfyhj.svg',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643875997/Group_7359lakshadweep_apt34r.svg',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643875483/Group_7350maharastra_va3umd.svg',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643874482/Group_7336madhyapradesh_pp3zi4.svg',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643875189/Group_7346manipur_bioduk.svg',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643875073/Group_7344meghalaya_axne7x.svg',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643877350/Group_7347mizeram_vrws31.svg',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643875133/Group_7345nagaland_pa7ink.svg',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643875408/Group_7348orissa_ogt9qf.svg',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643876052/Group_7360pudicherry_dqozta.svg',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643874057/Group_7330punjab_uotgvg.png',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643874290/Group_7333rajastan_njuouf.svg',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643874848/Group_7338sikkim_vzwduv.svg',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643877485/Group_7356tamilnadu_j91huf.svg',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643875534/Group_7351telangana_gcis15.svg',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643875284/Group_7352tripura_haza0j.svg',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643874361/Group_7334uttarpradesh_wmgalk.svg',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643874117/Group_7331uttarakhand_tzke2z.svg',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
    image_url:
      'https://res.cloudinary.com/dyhsyterg/image/upload/v1643874758/Group_7343westbengal_pob4u5.svg',
  },
]

let districtNames = {}
let lineChartData = {}

class SpecificState extends Component {
  state = {
    stateWiseStatus: 'INITIAL', // INITIAL, IN_PROGRESS, SUCCESS
    stateWiseContent: [],
    timeLineStatus: 'INITIAL', // INITIAL, IN_PROGRESS, SUCCESS
    timelineContent: [],
    activeCard: 'CONFIRMED', // CONFIRMED, ACTIVE, RECOVERED, DECEASED
    selectValue: 'Select District',
    trendTab: 'CUMULATIVE', // CUMULATIVE OR DAILY
  }

  componentDidMount() {
    this.getStateWiseDetails()
    this.getTimeLineDetails()
  }

  getStateWiseDetails = async () => {
    this.setState({stateWiseStatus: 'IN_PROGRESS'})
    const {match} = this.props
    const {params} = match
    const {stateCode} = params

    // mapping all stateCode in a list
    const codeList = stateDetailsList.map(eachState => eachState.state_code)
    if (codeList.includes(stateCode) === false) {
      const {history} = this.props
      history.replace('/not-found')
    }

    const stateUrl = 'https://apis.ccbp.in/covid19-state-wise-data'
    const response = await fetch(stateUrl)
    const data = await response.json()
    // console.log('props', this.props)
    // console.log('state url', data)

    const currentStateDetails = stateDetailsList.find(
      each => each.state_code === stateCode,
    )

    if (response.ok) {
      const newStateData = {
        idValue: stateCode,
        confirmed: data[stateCode].total.confirmed,
        recovered: data[stateCode].total.recovered,
        deceased: data[stateCode].total.deceased,
        tested: data[stateCode].total.tested,
        active:
          data[stateCode].total.confirmed -
          (data[stateCode].total.recovered + data[stateCode].total.deceased),
        districts: data[stateCode].districts,
        population: data[stateCode].meta.population,
        lastUpdated: data[stateCode].meta.last_updated,
        name: currentStateDetails.state_name,
        imageUrl: currentStateDetails.image_url,
      }

      this.setState({
        stateWiseContent: newStateData,
        stateWiseStatus: 'SUCCESS',
      })
    }
  }

  getTimeLineDetails = async () => {
    this.setState({timeLineStatus: 'IN_PROGRESS'})
    const {match} = this.props
    const {params} = match
    const {stateCode} = params

    const codeList = stateDetailsList.map(each => each.state_code)
    if (codeList.includes(stateCode) === false) {
      const {history} = this.props
      history.replace('/not-found')
    }

    const timelineUrl = `https://apis.ccbp.in/covid19-timelines-data/${stateCode}`
    const response = await fetch(timelineUrl)
    const data = await response.json()
    // console.log('timeline data', data)

    if (response.ok === true) {
      const newTimeLineData = data[`${stateCode}`].dates
      districtNames = data[`${stateCode}`].districts // defined out the class to be global function

      this.setState({
        timelineContent: newTimeLineData,
        timeLineStatus: 'SUCCESS',
      })
    }
  }

  descendingList = districtsList => {
    // Using string sort method :-
    //  0 -> initial list
    //  1 -> ascending list
    // -1 -> descending list

    const newDistrictsList = districtsList.sort((a, b) => {
      const first = a.value
      const second = b.value

      if (first < second) {
        return 1
      }
      if (first > second) {
        return -1
      }
      return 0
    })
    return newDistrictsList
  }

  getDistrictValues = () => {
    const {stateWiseContent, activeCard} = this.state
    const {districts} = stateWiseContent
    // console.log('districts in state-wise', districts)
    const newDistricts = [] // created a list
    switch (activeCard) {
      case 'CONFIRMED':
        // adding dictionaries with key & value into newDistricts list
        Object.keys(districts).forEach(key =>
          newDistricts.push({
            name: key,
            value:
              districts[key].total.confirmed === undefined
                ? 0
                : districts[key].total.confirmed,
          }),
        )
        return this.descendingList(newDistricts)
      case 'RECOVERED':
        // adding dictionaries with key & value into newDistricts list
        Object.keys(districts).forEach(key =>
          newDistricts.push({
            name: key,
            value:
              districts[key].total.recovered === undefined
                ? 0
                : districts[key].total.recovered,
          }),
        )
        return this.descendingList(newDistricts)
      case 'DECEASED':
        // adding dictionaries with key & value into newDistricts list
        Object.keys(districts).forEach(key =>
          newDistricts.push({
            name: key,
            value:
              districts[key].total.deceased === undefined
                ? 0
                : districts[key].total.deceased,
          }),
        )
        return this.descendingList(newDistricts)
      default:
        // adding dictionaries with key & value into newDistricts list
        Object.keys(districts).forEach(key =>
          newDistricts.push({
            name: key,
            value:
              (districts[key].total.confirmed === undefined
                ? 0
                : districts[key].total.confirmed) -
              ((districts[key].total.deceased === undefined
                ? 0
                : districts[key].total.deceased) +
                (districts[key].total.recovered === undefined
                  ? 0
                  : districts[key].total.recovered)),
          }),
        )
        return this.descendingList(newDistricts)
    }
  }

  activateCard = cardName => {
    this.setState({activeCard: cardName})
  }

  stateWiseSuccessView = () => {
    const {stateWiseContent, activeCard} = this.state

    // const stateContent = {
    //   active: 4355
    //   confirmed: 2066450
    //   deceased: 14373
    //   districts: {....}
    //   idValue: "AP"
    //   imageUrl: "india-map-state-image"
    //   lastUpdated: "2021-11-01T09:54:14+05:30"
    //   name: "Andhra Pradesh"
    //   population: 52221000
    //   recovered: 2047722
    //   tested: 29518787
    // }

    const confirmedCaseCard =
      activeCard === 'CONFIRMED' ? 'bg-card confirm-card' : 'bg-card'
    const activeCaseCard =
      activeCard === 'ACTIVE' ? 'bg-card active-card' : 'bg-card'
    const recoveredCaseCard =
      activeCard === 'RECOVERED' ? 'bg-card recovered-card' : 'bg-card'
    const deceasedCaseCard =
      activeCard === 'DECEASED' ? 'bg-card deceased-card' : 'bg-card'

    let districtValue = []
    if (stateWiseContent.length !== 0) {
      districtValue = this.getDistrictValues()
    }

    return (
      <div className="state-wise-container">
        <div className="heading-container">
          <div className="state-name-container">
            <h1 className="state-name">{stateWiseContent.name}</h1>
          </div>
          <div className="heading-right-container">
            <p className="tested-name">Tested</p>
            <p className="tested-numbers">{stateWiseContent.tested}</p>
          </div>
        </div>
        <p className="last-updated">
          Lasted updated on {stateWiseContent.lastUpdated}
        </p>
        <ul className="state-wise-card-list">
          <li className={confirmedCaseCard}>
            <button
              type="button"
              onClick={() => this.activateCard('CONFIRMED')}
              //   testid="stateSpecificConfirmedCasesContainer"
              className="card-button"
            >
              <p className="confirm-card-name">Confirmed</p>
              <img
                src="https://res.cloudinary.com/dyhsyterg/image/upload/v1641905267/confirmed_qmelok.svg"
                className="confirm-card-image"
                alt="state specific confirmed cases pic"
              />
              <p className="confirm-cases">{stateWiseContent.confirmed}</p>
            </button>
          </li>
          <li className={activeCaseCard}>
            <button
              type="button"
              onClick={() => this.activateCard('ACTIVE')}
              //   testid="stateSpecificActiveCasesContainer"
              className="card-button"
            >
              <p className="active-card-name">Active</p>
              <img
                src="https://res.cloudinary.com/dyhsyterg/image/upload/v1641908440/active_tmhkjf.svg"
                className="active-card-image"
                alt="state specific active cases pic"
              />
              <p className="active-cases">{stateWiseContent.active}</p>
            </button>
          </li>
          <li className={recoveredCaseCard}>
            <button
              type="button"
              onClick={() => this.activateCard('RECOVERED')}
              //   testid="stateSpecificActiveCasesContainer"
              className="card-button"
            >
              <p className="recovered-card-name">Recovered</p>
              <img
                src="https://res.cloudinary.com/dyhsyterg/image/upload/v1641909310/recovered_dtfpwl.svg"
                className="recovered-card-image"
                alt="state specific recovered cases pic"
              />
              <p className="recovered-cases">{stateWiseContent.recovered}</p>
            </button>
          </li>
          <li className={deceasedCaseCard}>
            <button
              type="button"
              onClick={() => this.activateCard('DECEASED')}
              //   testid="stateSpecificActiveCasesContainer"
              className="card-button"
            >
              <p className="deceased-card-name">Deceased</p>
              <img
                src="https://res.cloudinary.com/dyhsyterg/image/upload/v1641909662/deceased_tskayc.svg"
                className="deceased-card-image"
                alt="state specific deceased cases pic"
              />
              <p className="deceased-cases">{stateWiseContent.deceased}</p>
            </button>
          </li>
        </ul>

        <div className="image-container">
          <img
            src={stateWiseContent.imageUrl}
            alt={stateWiseContent.idValue}
            className="state-image"
          />
          <div className="image-report-container">
            <p className="ncp-report">NCP report</p>
            <p className="image-heading">Population</p>
            <p className="image-para">{stateWiseContent.population}</p>
            <p className="image-heading">Tested</p>
            <p className="image-para">{stateWiseContent.tested}</p>
          </div>
        </div>

        <h1 className="top-districts">Top Districts</h1>
        <ul className="districts-list">
          {districtValue.map(eachDist => (
            <li className="districts-list-item" key={eachDist.name}>
              <p className="districts-name">{eachDist.value}</p>
              <p className="districts-number">{eachDist.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  stateWiseLoaderView = () => (
    <div
      className="state-wise-loader-container"
      //  testid="stateDetailsLoader"
    >
      <Loader type="TailSpin" color="#007BFF" width="25px" height="25px" />
    </div>
  )

  showStateWiseContainer = () => {
    const {stateWiseStatus} = this.state

    switch (stateWiseStatus) {
      case 'SUCCESS':
        return this.stateWiseSuccessView()
      default:
        return this.stateWiseLoaderView()
    }
  }

  getDateForBarChart = key => {
    const date = new Date(key) // Sun Sep 12 2021 05:30:00 GMT+0530 (India Standard Time)
    // console.log('date', date)
    const newDate = date.toLocaleDateString('en-us', {
      month: 'short',
      day: '2-digit',
    })
    // console.log('newDate', newDate) //  Sep 12

    // const dateList = newDate.split(' ')
    // console.log('dateList', dateList) // ['Sep', '12']

    // const dateFormat = []
    // dateFormat.push(dateList[0])
    // dateFormat.push(dateList[1].toUpperCase())
    // console.log('dateFormat', dateFormat) // ['12', '12']

    // const result = dateFormat.join(' ')
    // console.log('res', result) // Sep 12
    return newDate
  }

  getTimelineChartValues = () => {
    const {timelineContent, activeCard} = this.state

    const newTimeLineData = []
    switch (activeCard) {
      case 'CONFIRMED':
        Object.keys(timelineContent).forEach(key =>
          newTimeLineData.push({
            date: this.getDateForBarChart(key),
            number: timelineContent[key].total.confirmed,
          }),
        )
        return newTimeLineData
      case 'RECOVERED':
        Object.keys(timelineContent).forEach(key =>
          newTimeLineData.push({
            date: this.getDateForBarChart(key),
            number: timelineContent[key].total.recovered,
          }),
        )
        return newTimeLineData
      case 'DECEASED':
        Object.keys(timelineContent).forEach(key =>
          newTimeLineData.push({
            date: this.getDateForBarChart(key),
            number: timelineContent[key].total.deceased,
          }),
        )
        return newTimeLineData
      default:
        Object.keys(timelineContent).forEach(key =>
          newTimeLineData.push({
            date: this.getDateForBarChart(key),
            number:
              (timelineContent[key].total.confirmed === undefined
                ? 0
                : timelineContent[key].total.confirmed) -
              ((timelineContent[key].total.recovered === undefined
                ? 0
                : timelineContent[key].total.recovered) +
                (timelineContent[key].total.deceased === undefined
                  ? 0
                  : timelineContent[key].total.deceased)),
          }),
        )
        return newTimeLineData
    }
  }

  getLineChartData = () => {
    const {trendTab, selectValue} = this.state

    let {timelineContent} = this.state
    if (selectValue !== 'Select District') {
      timelineContent = districtNames[selectValue].dates
    }

    const confirmedData = []
    Object.keys(timelineContent).forEach(key =>
      confirmedData.push({
        date: key,
        number:
          timelineContent[key].total.confirmed === undefined
            ? 0
            : timelineContent[key].total.confirmed,
      }),
    )

    const recoveredData = []
    Object.keys(timelineContent).forEach(key =>
      recoveredData.push({
        date: key,
        number:
          timelineContent[key].total.recovered === undefined
            ? 0
            : timelineContent[key].total.recovered,
      }),
    )

    const deceasedData = []
    Object.keys(timelineContent).forEach(key =>
      deceasedData.push({
        date: key,
        number:
          timelineContent[key].total.deceased === undefined
            ? 0
            : timelineContent[key].total.deceased,
      }),
    )

    const activeData = []
    Object.keys(timelineContent).forEach(key =>
      activeData.push({
        date: key,
        number:
          (timelineContent[key].total.confirmed === undefined
            ? 0
            : timelineContent[key].total.confirmed) -
          ((timelineContent[key].total.recovered === undefined
            ? 0
            : timelineContent[key].total.recovered) +
            (timelineContent[key].total.deceased === undefined
              ? 0
              : timelineContent[key].total.deceased)),
      }),
    )

    const testedData = []
    Object.keys(timelineContent).forEach(key =>
      testedData.push({
        date: key,
        number:
          timelineContent[key].total.tested === undefined
            ? 0
            : timelineContent[key].total.tested,
      }),
    )

    lineChartData = {
      // defined outside the class to be global function
      confirmed: confirmedData,
      recovered: recoveredData,
      deceased: deceasedData,
      active: activeData,
      tested: testedData,
    }

    if (trendTab === 'DAILY') {
      let refValue = 0
      const newConfirmedData = confirmedData.map(each => {
        let newValue = 0
        newValue = each.number - refValue
        refValue = each.number
        return {
          date: each.date,
          number: newValue,
        }
      })
      refValue = 0
      const newDeceasedData = deceasedData.map(each => {
        let newValue = 0
        newValue = each.number - refValue
        refValue = each.number
        return {
          date: each.date,
          number: newValue,
        }
      })
      refValue = 0
      const newRecoveredData = deceasedData.map(each => {
        let newValue = 0
        newValue = each.number - refValue
        refValue = each.number
        return {
          date: each.date,
          number: newValue,
        }
      })
      refValue = 0
      const newActiveData = activeData.map(each => {
        let newValue = 0
        if (each.number > refValue) {
          newValue = each.number - refValue
          refValue = each.number
        }
        refValue = each.number
        return {
          date: each.date,
          number: newValue,
        }
      })

      refValue = 0
      const newTestedData = testedData.map(each => {
        let newValue = 0
        newValue = each.number - refValue
        refValue = each.number
        return {
          date: each.date,
          number: newValue,
        }
      })
      newConfirmedData.splice(0, 1)
      newActiveData.splice(0, 1)
      newDeceasedData.splice(0, 1)
      newRecoveredData.splice(0, 1)
      newTestedData.splice(0, 1)

      lineChartData = {
        // defined outside the class to be global function
        confirmed: newConfirmedData,
        recovered: newRecoveredData,
        deceased: newDeceasedData,
        active: newActiveData,
        tested: newTestedData,
      }
    }
  }

  trendChange = value => {
    this.setState({trendTab: value})
  }

  onChangeSelect = event => {
    this.setState({selectValue: event.target.value}, this.getLineChartData)
  }

  timelineSuccessView = () => {
    const {timelineContent, activeCard, trendTab, selectValue} = this.state
    // console.log('timeline', timelineContent)

    let newTimeLineData = []
    if (timelineContent.length !== 0) {
      newTimeLineData = this.getTimelineChartValues()
      newTimeLineData = newTimeLineData.slice(-10)
    }
    // console.log('abcd', newTimeLineData)

    let chartColor = '#9A0E31'
    switch (activeCard) {
      case 'CONFIRMED':
        chartColor = '#9A0E31'
        break
      case 'ACTIVE':
        chartColor = '#0A4FA0'
        break
      case 'RECOVERED':
        chartColor = '#216837'
        break
      case 'DECEASED':
        chartColor = '#474C57'
        break
      default:
        chartColor = '#9A0E31'
    }

    this.getLineChartData()

    const cumulative =
      trendTab === 'CUMULATIVE' ? 'trend-button highlight' : 'trend-button'
    const daily =
      trendTab === 'DAILY' ? 'trend-button highlight' : 'trend-button'

    const selectOptions = Object.keys(districtNames)

    return (
      <div className="graphs-container">
        <div className="graphs-large">
          <div className="bar-chart-large">
            <BarChart
              width={700}
              height={240}
              barSize={35}
              data={newTimeLineData}
            >
              <XAxis
                dataKey="date"
                axisLine={false}
                interval={0}
                fontSize={10}
                tickLine={0}
                tick={{fill: chartColor, strokeWidth: 1}}
              />
              <Bar
                dataKey="number"
                fill={chartColor}
                radius={[5, 5, 0, 0]}
                label={{
                  position: 'top',
                  fill: chartColor,
                  fontSize: 10,
                }}
              />
            </BarChart>
          </div>
          <h1 className="spread-trends">Spread Trends</h1>
          <div className="trend-container">
            <button
              type="button"
              className={cumulative}
              onClick={() => this.trendChange('CUMULATIVE')}
            >
              Cumulative
            </button>
            <button
              type="button"
              className={daily}
              onClick={() => this.trendChange('DAILY')}
            >
              Daily
            </button>
          </div>
          <div className="select-container">
            <select
              value={selectValue}
              className="select-element"
              onChange={this.onChangeSelect}
            >
              <option value="Select District">Select District</option>
              {selectOptions.map(eachOptions => (
                <option key={eachOptions} value={eachOptions}>
                  {eachOptions}
                </option>
              ))}
            </select>
          </div>
          <div className="line-chart-large">
            <div className="confirmed-chart">
              <p className="confirmed-heading">Confirmed</p>
              <LineChart
                width={700}
                height={200}
                data={lineChartData.confirmed}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}
              >
                <XAxis
                  dataKey="date"
                  internal="preserveEnd"
                  fontSize={10}
                  tick={{fill: '#FF073A', strokeWidth: 1}}
                />{' '}
                <YAxis fontSize={10} tick={{fill: '#FF073A', strokeWidth: 1}} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="number"
                  stroke="#FF073A"
                  strokeWidth={2}
                  dot={{fill: '#FF073A'}}
                />
              </LineChart>
            </div>
            <div className="active-chart">
              <p className="active-heading">Total Active</p>
              <LineChart
                width={700}
                height={200}
                data={lineChartData.active}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}
              >
                <XAxis
                  dataKey="date"
                  internal="preserveEnd"
                  fontSize={10}
                  tick={{fill: '#007BFF', strokeWidth: 1}}
                />{' '}
                <YAxis fontSize={10} tick={{fill: '#007BFF', strokeWidth: 1}} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="number"
                  stroke="#007BFF"
                  strokeWidth={2}
                  dot={{fill: '#007BFF'}}
                />
              </LineChart>
            </div>
            <div className="recovered-chart">
              <p className="recovered-heading">Recovered</p>
              <LineChart
                width={700}
                height={200}
                data={lineChartData.recovered}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}
              >
                <XAxis
                  dataKey="date"
                  internal="preserveEnd"
                  fontSize={10}
                  tick={{fill: '#27A243', strokeWidth: 1}}
                />{' '}
                <YAxis fontSize={10} tick={{fill: '#27A243', strokeWidth: 1}} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="number"
                  stroke="#27A243"
                  strokeWidth={2}
                  dot={{fill: '#27A243'}}
                />
              </LineChart>
            </div>
            <div className="deceased-chart">
              <p className="deceased-heading">Deceased</p>
              <LineChart
                width={700}
                height={200}
                data={lineChartData.deceased}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}
              >
                <XAxis
                  dataKey="date"
                  internal="preserveEnd"
                  fontSize={10}
                  tick={{fill: '#6C757D', strokeWidth: 1}}
                />{' '}
                <YAxis fontSize={10} tick={{fill: '#6C757D', strokeWidth: 1}} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="number"
                  stroke="#6C757D"
                  strokeWidth={2}
                  dot={{fill: '#6C757D'}}
                />
              </LineChart>
            </div>
            <div className="tested-chart">
              <p className="tested-heading">Tested</p>
              <LineChart
                width={700}
                height={200}
                data={lineChartData.tested}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}
              >
                <XAxis
                  dataKey="date"
                  internal="preserveEnd"
                  fontSize={10}
                  tick={{fill: '#9673B9', strokeWidth: 1}}
                />{' '}
                <YAxis fontSize={10} tick={{fill: '#9673B9', strokeWidth: 1}} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="number"
                  stroke="#9673B9"
                  strokeWidth={2}
                  dot={{fill: '#9673B9'}}
                />
              </LineChart>
            </div>
          </div>
        </div>
        <div className="graphs-small">
          <div className="bar-chart-small">
            <BarChart
              width={350}
              height={150}
              barSize={15}
              data={newTimeLineData}
            >
              <XAxis
                dataKey="date"
                axisLine={false}
                interval={0}
                fontSize={6}
                tickLine={0}
                tick={{fill: chartColor, strokeWidth: 1}}
              />
              <Bar
                dataKey="number"
                fill={chartColor}
                radius={[3, 3, 0, 0]}
                label={{position: 'top', fill: chartColor, fontSize: 6}}
              />
            </BarChart>
          </div>
          <h1 className="spread-trends">Daily Spread Trends</h1>
          <div className="trend-container">
            <button
              className={cumulative}
              type="button"
              onClick={() => this.trendChange('CUMULATIVE')}
            >
              Cumulative
            </button>
            <button
              className={daily}
              type="button"
              onClick={() => this.trendChange('DAILY')}
            >
              Daily
            </button>
          </div>
          <div className="select-container">
            <select
              value={selectValue}
              className="select-element"
              onChange={this.onChangeSelect}
            >
              <option value="Select District">Select District</option>
              {selectOptions.map(eachDist => (
                <option key={eachDist} value={eachDist}>
                  {eachDist}
                </option>
              ))}
            </select>
          </div>
          <div className="line-chart-small">
            <div className="confirmed-chart">
              <p className="confirmed-heading">Confirmed</p>
              <LineChart
                width={410}
                height={160}
                data={lineChartData.confirmed}
                margin={{top: 5, right: 60, left: 20, bottom: 5}}
              >
                <XAxis
                  dataKey="date"
                  interval="preserveEnd"
                  fontSize={6}
                  tick={{fill: '#FF073A', strokeWidth: 1}}
                />
                <YAxis fontSize={6} tick={{fill: '#FF073A', strokeWidth: 1}} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="number"
                  stroke="#FF073A"
                  strokeWidth={1}
                  dot={{fill: '#FF073A', r: 1}}
                />
              </LineChart>
            </div>
            <div className="active-chart">
              <p className="active-heading">Total Active</p>
              <LineChart
                width={410}
                height={160}
                data={lineChartData.active}
                margin={{top: 5, right: 60, left: 20, bottom: 5}}
              >
                <XAxis
                  dataKey="date"
                  interval="preserveEnd"
                  fontSize={6}
                  tick={{fill: '#007BFF', strokeWidth: 1}}
                />
                <YAxis fontSize={6} tick={{fill: '#007BFF', strokeWidth: 1}} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="number"
                  stroke="#007BFF"
                  strokeWidth={1}
                  dot={{fill: '#007BFF', r: 1}}
                />
              </LineChart>
            </div>
            <div className="recovered-chart">
              <p className="recovered-heading">Recovered</p>
              <LineChart
                width={410}
                height={160}
                data={lineChartData.recovered}
                margin={{top: 5, right: 60, left: 20, bottom: 5}}
              >
                <XAxis
                  dataKey="date"
                  interval="preserveEnd"
                  fontSize={6}
                  tick={{fill: '#27A243', strokeWidth: 1}}
                />
                <YAxis fontSize={6} tick={{fill: '#27A243', strokeWidth: 1}} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="number"
                  stroke="#27A243"
                  strokeWidth={1}
                  dot={{fill: '#27A243', r: 1}}
                />
              </LineChart>
            </div>
            <div className="deceased-chart">
              <p className="deceased-heading">Deceased</p>
              <LineChart
                width={410}
                height={160}
                data={lineChartData.deceased}
                margin={{top: 5, right: 60, left: 20, bottom: 5}}
              >
                <XAxis
                  dataKey="date"
                  interval="preserveEnd"
                  fontSize={6}
                  tick={{fill: '#6C757D', strokeWidth: 1}}
                />
                <YAxis fontSize={6} tick={{fill: '#6C757D', strokeWidth: 1}} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="number"
                  stroke="#6C757D"
                  strokeWidth={1}
                  dot={{fill: '#6C757D', r: 1}}
                />
              </LineChart>
            </div>
            <div className="tested-chart">
              <p className="tested-heading">Tested</p>
              <LineChart
                width={410}
                height={160}
                data={lineChartData.tested}
                margin={{top: 5, right: 60, left: 20, bottom: 5}}
              >
                <XAxis
                  dataKey="date"
                  interval="preserveEnd"
                  fontSize={6}
                  tick={{fill: '#9673B9', strokeWidth: 1}}
                />
                <YAxis fontSize={6} tick={{fill: '#9673B9', strokeWidth: 1}} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="number"
                  stroke="#9673B9"
                  strokeWidth={1}
                  dot={{fill: '#9673B9', r: 1}}
                />
              </LineChart>
            </div>
          </div>
        </div>
      </div>
    )
  }

  timelineLoaderView = () => (
    <div
      className="stateWise-loader-container"
      //  testid="timelinesDataLoader"
    >
      <Loader type="TailSpin" color="#007BFF" width="25px" height="25px" />
    </div>
  )

  showTimelineContainer = () => {
    const {timeLineStatus} = this.state

    switch (timeLineStatus) {
      case 'SUCCESS':
        return this.timelineSuccessView()
      default:
        return this.timelineLoaderView()
    }
  }

  render() {
    return (
      <div className="state-specific-container ">
        <Header />
        {this.showStateWiseContainer()}
        {this.showTimelineContainer()}
        <Footer />
      </div>
    )
  }
}

export default SpecificState

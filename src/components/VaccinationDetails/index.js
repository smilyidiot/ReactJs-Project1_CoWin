import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {AiFillHome} from 'react-icons/ai'

import {
  AreaChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
  Area,
} from 'recharts'

import Header from '../Header'
import Footer from '../Footer'
import './index.css'

class VaccinationDetails extends Component {
  state = {
    status: 'IN_PROGRESS',
    trends: 'dose',
    vaccinationDetails: [],
  }

  componentDidMount() {
    this.getVaccinationDetails()
  }

  getVaccinationDetails = async () => {
    const vaccinationUrl = 'https://apis.ccbp.in/covid19-vaccination-data'
    const response = await fetch(vaccinationUrl)
    const data = await response.json()
    console.log('vaccination', data)

    if (response.ok) {
      const newVaccinated = {
        site: data.topBlock.sites.total,
        govt: data.topBlock.sites.govt,
        pvt: data.topBlock.sites.pvt,
        totalDoses: data.topBlock.vaccination.total,
        dose1: data.topBlock.vaccination.tot_dose_1,
        dose2: data.topBlock.vaccination.tot_dose_2,
        doseChart: data.vaccinationDoneByTime.map(eachValue => ({
          label: eachValue.label,
          total: eachValue.count,
          doseOne: eachValue.dose_one,
          doseTwo: eachValue.dose_two,
        })),
        ageChart: data.vaccinationDoneByTimeAgeWise.map(each => ({
          label: each.label,
          between15to17: each.vac_15_17,
          between18to45: each.vac_18_45,
          between45to60: each.vac_45_60,
          greaterThan60: each.vac_60_above,
        })),
        byGender: [
          {
            category: 'male',
            count: data.topBlock.vaccination.male,
          },
          {
            category: 'female',
            count: data.topBlock.vaccination.female,
          },
          {
            category: 'others',
            count: data.topBlock.vaccination.others,
          },
        ],
        byVaccine: [
          {
            category: 'covishield',
            count: data.topBlock.vaccination.covishield,
          },
          {
            category: 'covaxin',
            count: data.topBlock.vaccination.covaxin,
          },
          {
            category: 'sputnik',
            count: data.topBlock.vaccination.sputnik,
          },
        ],
        byAge: [
          {
            category: '18-45',
            count: data.vaccinationByAge.vac_18_45,
          },
          {
            category: '46-60',
            count: data.vaccinationByAge.vac_45_60,
          },
          {
            category: 'above 60',
            count: data.vaccinationByAge.above_60,
          },
        ],
      }
      console.log('data', data)
      this.setState({vaccinationDetails: newVaccinated, status: 'SUCCESS'})
    }
  }

  onChangeTrend = value => {
    this.setState({trends: value})
  }

  showSuccessView = () => {
    const {vaccinationDetails, trends} = this.state

    const doses = trends === 'dose' ? 'tab-button highlight-tab' : 'tab-button'
    const ages = trends === 'age' ? 'tab-button highlight-tab' : 'tab-button'

    let graphDetails = []
    if (trends === 'dose') {
      graphDetails = vaccinationDetails.doseChart
    } else {
      graphDetails = vaccinationDetails.ageChart
    }
    console.log('graph', graphDetails)

    return (
      <div className="vaccination-container">
        <p className="page-heading">
          <AiFillHome className="icon" />
          India
        </p>
        <div className="vaccination-content-container">
          <div className="top-site-container">
            <div className="site-container">
              <div className="site-content">
                <img
                  src="https://res.cloudinary.com/dyhsyterg/image/upload/v1644046362/Group_7476site_b3eso2.svg"
                  alt="site"
                  className="site-image"
                />
                <div className="site-main-content">
                  <p className="site-heading">Site Conducting Vaccination</p>
                  <p className="count">{vaccinationDetails.site}</p>
                  <div className="bottom-site-content">
                    <div className="sub-bottom">
                      <p className="site-head">Government</p>
                      <p className="site-para">{vaccinationDetails.govt}</p>
                    </div>
                    <div className="sub-bottom">
                      <p className="site-head">Private</p>
                      <p className="site-para">{vaccinationDetails.pvt}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="site-container">
              <div className="site-content">
                <img
                  src="https://res.cloudinary.com/dyhsyterg/image/upload/v1644046362/Group_7476site_b3eso2.svg"
                  alt="site"
                  className="site-image"
                />
                <div className="site-main-content">
                  <p className="site-heading">Total Vaccination Doses</p>
                  <p className="count">{vaccinationDetails.totalDoses}</p>
                  <div className="bottom-site-content">
                    <div className="sub-bottom">
                      <p className="site-head">Dose 1</p>
                      <p className="site-para">{vaccinationDetails.dose1}</p>
                    </div>
                    <div className="sub-bottom">
                      <p className="site-head">Dose 2</p>
                      <p className="site-para">{vaccinationDetails.dose2}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="vaccination-trends">
            <h1 className="cards-heading">Vaccination Trends</h1>
            <div className="trends-tab-container">
              <button
                type="button"
                onClick={() => this.onChangeTrend('dose')}
                className={doses}
              >
                By Doses
              </button>
              <button
                type="button"
                onClick={() => this.onChangeTrend('age')}
                className={ages}
              >
                By Age
              </button>
            </div>
            <div className="line-chart-large">
              {trends === 'dose' && (
                <ResponsiveContainer width="100%">
                  <AreaChart
                    width={700}
                    height={250}
                    data={vaccinationDetails.doseChart}
                    margin={{top: 10, right: 30, left: 0, bottom: 0}}
                  >
                    <XAxis dataKey="label" fontSize="12px" />
                    <YAxis fontSize="12px" />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="total"
                      stroke="#A226DC"
                      fillOpacity={0.5}
                      fill="#A226DC"
                    />
                    <Area
                      type="monotone"
                      dataKey="doseOne"
                      stroke="#FCEA4E"
                      fillOpacity={0.5}
                      fill="#FCEA4E"
                    />
                    <Area
                      type="monotone"
                      dataKey="doseTwo"
                      stroke="#37C62B"
                      fillOpacity={0.5}
                      fill="#37C62B"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              )}
              {trends === 'age' && (
                <ResponsiveContainer width="100%">
                  <AreaChart
                    width={700}
                    height={250}
                    data={vaccinationDetails.ageChart}
                    margin={{top: 10, right: 30, left: 0, bottom: 0}}
                  >
                    <XAxis dataKey="label" fontSize="12px" />
                    <YAxis fontSize="12px" />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="between15to17"
                      stroke="#A226DC"
                      fillOpacity={0.5}
                      fill="#A226DC"
                    />
                    <Area
                      type="monotone"
                      dataKey="between18to45"
                      stroke="#FCEA4E"
                      fillOpacity={0.5}
                      fill="#FCEA4E"
                    />
                    <Area
                      type="monotone"
                      dataKey="between45to60"
                      stroke="#37C62B"
                      fillOpacity={0.5}
                      fill="#37C62B"
                    />
                    <Area
                      type="monotone"
                      dataKey="greaterThan60"
                      stroke="#F54394"
                      fillOpacity={0.5}
                      fill="#F54394"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              )}
            </div>
            <div className="line-chart-small">
              {trends === 'dose' && (
                <ResponsiveContainer width="100%" height={250}>
                  <AreaChart
                    width={700}
                    height={250}
                    data={graphDetails.slice(4)}
                    margin={{top: 10, right: 30, left: 0, bottom: 0}}
                  >
                    <XAxis dataKey="label" fontSize="6px" />
                    <YAxis fontSize="6px" />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="total"
                      stroke="#A226DC"
                      fillOpacity={0.5}
                      fill="#A226DC"
                    />
                    <Area
                      type="monotone"
                      dataKey="doseOne"
                      stroke="#FCEA4E"
                      fillOpacity={0.5}
                      fill="#FCEA4E"
                    />
                    <Area
                      type="monotone"
                      dataKey="doseTwo"
                      stroke="#37C62B"
                      fillOpacity={0.5}
                      fill="#37C62B"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              )}
              {trends === 'age' && (
                <ResponsiveContainer width="100%" height={250}>
                  <AreaChart
                    width={700}
                    height={250}
                    data={graphDetails.slice(4)}
                    margin={{top: 10, right: 30, left: 0, bottom: 0}}
                  >
                    <XAxis dataKey="label" fontSize="6px" />
                    <YAxis fontSize="6px" />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="between15to17"
                      stroke="#A226DC"
                      fillOpacity={0.5}
                      fill="#A226DC"
                    />
                    <Area
                      type="monotone"
                      dataKey="between18to45"
                      stroke="#FCEA4E"
                      fillOpacity={0.5}
                      fill="#FCEA4E"
                    />
                    <Area
                      type="monotone"
                      dataKey="between45to60"
                      stroke="#37C62B"
                      fillOpacity={0.5}
                      fill="#37C62B"
                    />
                    <Area
                      type="monotone"
                      dataKey="greaterThan60"
                      stroke="#F54394"
                      fillOpacity={0.5}
                      fill="#F54394"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>
          <div className="bottom-container">
            <div className="vaccination-category">
              <p className="cards-heading">Vaccination Category</p>
              <div className="left-pie-charts">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      cx="50%"
                      cy="40%"
                      data={vaccinationDetails.byGender}
                      startAngle={180}
                      endAngle={0}
                      innerRadius="60%"
                      outerRadius="80%"
                      dataKey="count"
                    >
                      <Cell name="Male" fill="#f54394" />
                      <Cell name="Female" fill="#5A8DEE" />
                      <Cell name="Others" fill="#FF9800" />
                    </Pie>
                    <Legend
                      iconType="circle"
                      iconSize="8px"
                      layout="horizontal"
                      verticalAlign="middle"
                      align="center"
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="left-pie-charts">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      cx="50%"
                      cy="40%"
                      data={vaccinationDetails.byVaccine}
                      startAngle={180}
                      endAngle={0}
                      innerRadius="60%"
                      outerRadius="80%"
                      dataKey="count"
                    >
                      <Cell name="Covishield" fill="#007CC3" />
                      <Cell name="Covaxin" fill="#7AC142" />
                      <Cell name="Sputnik V" fill="#FF9800" />
                    </Pie>
                    <Legend
                      iconType="circle"
                      iconSize="8px"
                      layout="horizontal"
                      verticalAlign="middle"
                      align="center"
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="vaccination-by-age">
              <h1 className="cards-heading">Vaccination By Age</h1>
              <div className="right-pie-chart">
                <ResponsiveContainer width="100%" height={320}>
                  <PieChart>
                    <Pie
                      cx="50%"
                      cy="50%"
                      data={vaccinationDetails.byAge}
                      startAngle={360}
                      endAngle={0}
                      innerRadius="0%"
                      outerRadius="95%"
                      dataKey="count"
                      fontSize="12px"
                    >
                      <Cell name="18-44" fill="#A3DF9F" />
                      <Cell name="45-60" fill="#64C2A6" />
                      <Cell name="Above 60" fill="#2D87BB" />
                    </Pie>
                    <Legend
                      iconType="circle"
                      iconSize="8px"
                      layout="horizontal"
                      verticalAlign="bottom"
                      align="center"
                      fontSize="8px"
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  showVaccinationContent = () => {
    const {status} = this.state

    switch (status) {
      case 'SUCCESS':
        return this.showSuccessView()
      default:
        return this.showLoaderView()
    }
  }

  showLoaderView = () => (
    <>
      <Header />
      <div className="loader-container">
        <Loader type="TailSpin" color="#007BFF" width="25px" height="25px" />
      </div>
      <Footer />
    </>
  )

  render() {
    return (
      <div>
        <Header />
        {this.showVaccinationContent()}
        <Footer />
      </div>
    )
  }
}

export default VaccinationDetails

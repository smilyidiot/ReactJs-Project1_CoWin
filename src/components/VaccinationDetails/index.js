import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {AiFillHome} from 'react-icons/ai'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
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
          total: eachValue.count,
          doseOne: eachValue.dose_one,
          doseTwo: eachValue.dose_two,
          label: eachValue.label,
        })),
        ageChart: data.vaccinationDoneByTimeAgeWise.map(each => ({
          label: each.label,
          between15to17: each.vac_15_17,
          between18to45: each.vac_18_45,
          between46to60: each.vac_46_60,
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
            count: data.vaccinationByAge.vac_46_60,
          },
          {
            category: 'above 60',
            count: data.vaccinationByAge.above_60,
          },
        ],
      }
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
              <ResponsiveContainer width="100%" height={250}>
                <BarChart width={500} height={300} data={graphDetails}>
                  <XAxis dataKey="label" fontSize="12px" />
                  <YAxis fontSize="12px" />
                  <Tooltip cursor={{fill: '#FFEBE5'}} />
                  <Legend iconSize="10px" fontSize="12px" />
                  {trends === 'dose' && (
                    <>
                      <Bar dataKey="total" fill="#A226DC" />
                      <Bar dataKey="doseOne" fill="#FCEA4E" />
                      <Bar dataKey="doseTwo" fill="#37C62B" />
                    </>
                  )}
                  {trends === 'age' && (
                    <>
                      <Bar dataKey="between15to17" fill="#A226DC" />
                      <Bar dataKey="between18to45" fill="#FCEA4E" />
                      <Bar dataKey="between46to60" fill="#37C62B" />
                      <Bar dataKey="greaterThan60" fill="#F54394" />
                    </>
                  )}
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="line-chart-small">
              <ResponsiveContainer width="100%" height={250}>
                <BarChart width={800} height={300} data={graphDetails.slice(4)}>
                  <XAxis dataKey="label" fontSize="6px" />
                  <YAxis fontSize="6px" />
                  <Tooltip cursor={{fill: '#FFEBE5'}} />
                  <Legend iconSize="10px" fontSize="6px" />
                  {trends === 'dose' && (
                    <>
                      <Bar dataKey="total" fill="#A226DC" />
                      <Bar dataKey="doseOne" fill="#FCEA4E" />
                      <Bar dataKey="doseTwo" fill="#37C62B" />
                    </>
                  )}
                  {trends === 'age' && (
                    <>
                      <Bar dataKey="between15to17" fill="#A226DC" />
                      <Bar dataKey="between18to45" fill="#FCEA4E" />
                      <Bar dataKey="between46to60" fill="#37C62B" />
                      <Bar dataKey="greaterThan60" fill="#F54394" />
                    </>
                  )}
                </BarChart>
              </ResponsiveContainer>
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

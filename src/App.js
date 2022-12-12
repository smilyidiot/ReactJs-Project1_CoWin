import {Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home'
import StateSpecific from './components/StateSpecific'
import About from './components/About'
import VaccinationDetails from './components/VaccinationDetails'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/state/:stateCode" component={StateSpecific} />
      <Route exact path="/vaccination" component={VaccinationDetails} />
      <Route exact path="/about" component={About} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </>
)

export default App

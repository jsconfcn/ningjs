import React from 'react'
import ReactDOM from 'react-dom'
import Index from 'Components/pages/Index/Index'
import Speakers from 'Components/pages/CallForSpeakers/Speakers'
import Sponsors from 'Components/pages/CallForSponsors/Sponsors'
import { Router, Route, hashHistory } from 'react-router'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Index}/>
    <Route path='/Speakers' component={Speakers}/>
    <Route path='/Sponsors' component={Sponsors}/>
  </Router>
)


ReactDOM.render(routes, document.querySelector('#app'))

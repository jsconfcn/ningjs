import React from 'react'
import ReactDOM from 'react-dom'
import Index from 'Components/pages/Index/Index'
import Proposals from 'Components/pages/CallForProposals/Proposals'
import Sponsors from 'Components/pages/CallForSponsors/Sponsors'
import { Router, Route, hashHistory } from 'react-router'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Index}/>
    <Route path='/Proposals' component={Proposals}/>
    <Route path='/Sponsors' component={Sponsors}/>
  </Router>
)


ReactDOM.render(routes, document.querySelector('#app'))

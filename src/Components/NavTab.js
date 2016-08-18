/*
 * ningjs - NavTab.js
 */

'use strict'

import React, { Component } from 'react'
import { Link } from 'react-router'
import { pageScrollTopAnimate } from 'Helpers/browser.js'

export default class NavTab extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  scrollToAbout(evt) {
    setTimeout(() => {
      const about = document.querySelector('#about-us')
      const timeInMS = 500
      pageScrollTopAnimate(about.offsetTop, timeInMS)
    }, 0)
  }
  scrollToSchedule(evt) {
    setTimeout(() => {
      const element = document.querySelector('#schedule')
      const timeInMS = 500
      pageScrollTopAnimate(element.offsetTop - 100, timeInMS)
    }, 0)
  }
  scrollToSponsor(evt) {
    setTimeout(() => {
      const element = document.querySelector('#sponsors')
      const timeInMS = 500
      pageScrollTopAnimate(element.offsetTop - 100, timeInMS)
    }, 0)
  }
  scrollToLocation(evt) {
    setTimeout(() => {
      const element = document.querySelector('#location')
      const timeInMS = 500
      pageScrollTopAnimate(element.offsetTop - 100, timeInMS)
    }, 0)
  }

  openMenu() {
    this.setState({
      menu: !this.state.menu
    })
  }

  active(tab, evt) {
    this.setState({
      activated: tab
    })
  }

  render() {
    const activated = this.state.activated
    const { isActive } = this.context.router
    const { query } = this.props
    const __ = this.props.__
    return (
      <div className={this.state.menu ? 'nav menu-open' : 'nav'}>
       <button
          className='toggle-button'
          onClick={this.openMenu.bind(this)}/>
        <nav>
          <Link onClick={this.scrollToSchedule}
            to={{ pathname: '/', query }} >
            {__('Schedule')}
          </Link>
          <Link onClick={this.scrollToSponsor}
            to={{ pathname: '/', query }} >
            {__('sponsors')}
          </Link>
          <Link onClick={this.scrollToLocation}
            to={{ pathname: '/', query }} >
            {__('location')}
          </Link>
          <Link onClick={this.scrollToLocation}
            to={{ pathname: '/live', query }} >
            {__('Live')}
          </Link>
          <Link onClick={this.scrollToAbout}
            to={{ pathname: '/', query }} >
            {__('about_us')}
          </Link>

          <a href='http://www.bagevent.com/event/58905' target='new' className='ticket'>{__('tickets')}</a>
        </nav>
      </div>
    )
  }

}

NavTab.contextTypes = {
  router: React.PropTypes.object.isRequired
}

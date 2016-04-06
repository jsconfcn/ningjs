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
          <Link className={ isActive('/speakers') ? 'active' : ''}
            to={{ pathname: '/speakers', query }}
            onClick={this.active.bind(this, 'speakers')}>
            {__('call_for_speakers')}
          </Link>
          <Link className={isActive('/sponsors') ? 'active' : ''}
            to={{ pathname: '/sponsors', query }}
            onClick={this.active.bind(this, 'sponsors')}>
            {__('call_for_sponsors')}
          </Link>
          <Link onClick={this.scrollToAbout}
            to={{ pathname: '/', query }} >
            {__('about_us')}
          </Link>
        </nav>
        </div>
    )
  }

}

NavTab.contextTypes = {
  router: React.PropTypes.object.isRequired
}

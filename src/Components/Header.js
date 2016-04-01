import React, { Component } from 'react'
import { Link } from 'react-router'

import { pageScrollTopAnimate } from 'Helpers/browser.js'
import { checkCurrentLanguage } from 'Helpers/language.js'
import 'styles/pages/article.scss'

export default class Header extends Component {
  constructor() {
    super()
    this._onWindowChange = this._onWindowChange.bind(this)
    this._onHideNavBar = this._onHideNavBar.bind(this)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._onWindowChange)
    window.removeEventListener('scroll', this._onWindowChange)
    window.removeEventListener('click', this._onHideNavBar)
  }

  componentDidMount() {
    window.addEventListener('resize', this._onWindowChange)
    window.addEventListener('scroll', this._onWindowChange)
    window.addEventListener('click', this._onHideNavBar)
  }

  _onWindowChange() {
    const containerDom = document.querySelector('#container')
    if (document.body.offsetWidth > 1024) {
      const heroSectionHeight = document.querySelector('#hero').offsetHeight
      if (document.body.scrollTop < heroSectionHeight - 65) {
        containerDom.classList.remove('header-fixed')
      } else {
        containerDom.classList.add('header-fixed')
      }
    }
  }

  _onSwitchLanguage() {
    const isZh = checkCurrentLanguage()
    if (location.hash.indexOf('ln=') === -1) {
      window.location.hash = window.location.hash.replace('?', `?ln=${isZh ? 'en' : 'zh'}&`)
    }else {
      window.location.hash = window.location.hash.replace(`${isZh ? 'zh' : 'en'}`, `${isZh ? 'en' : 'zh'}`)
    }
    window.location.reload()
  }

  _onNavToFooter() {
    const footer = document.querySelector('#footer')
    const timeInMS = 500
    pageScrollTopAnimate(footer.offsetTop, timeInMS)
  }

  _onNavToAbout() {
    setTimeout(() => {
      const about = document.querySelector('#about-us')
      const timeInMS = 500
      pageScrollTopAnimate(about.offsetTop, timeInMS)
    }, 0)
  }

  _onMenuToggle() {
    document.querySelector('.nav').classList.toggle('menu-open')
  }

  _onHideNavBar(event) {
    const targetIsToggleButton = this.refs.toggleButton.contains(event.target)
    if (!targetIsToggleButton) {
      document.querySelector('.nav').classList.remove('menu-open')
    }
  }

  render() {
    const { activeTag } = this.props
    const isZh = checkCurrentLanguage()
    const query = { ln: isZh ? 'zh' : 'en' }

    return (
      <header id='header' className='container'>
        <Link
          className='logo'
          to={{
            pathname: '/',
            query
          }}
        >
          <img src='./assets/images/logo.png' />
        </Link>
        <div className='nav'>
        <button
          className='toggle-button'
          onClick={() => this._onMenuToggle()}
          ref='toggleButton'
        />
        <nav>
          <Link
            className={activeTag === 'Speakers' ? 'active' : ''}
            to={{
              pathname: '/speakers',
              query
            }}
          >
            {__('Call for Speakers')}
          </Link>
          <Link
            className={activeTag === 'Sponsors' ? 'active' : ''}
            to={{
              pathname: '/sponsors',
              query
            }}
          >
            {__('Call for Sponsors')}
          </Link>
          <Link
            onClick={() => this._onNavToAbout()}
            to={{
              pathname: '/',
              query
            }}
          >
            {__('About Us')}
          </Link>
        </nav>
        </div>
        <a
          className='lang'
          onClick={() => this._onSwitchLanguage()}
        >
          {__('中文')}
        </a>
      </header>
    )
  }
}

import React, { Component } from 'react'
import { Link } from 'react-router'

import { pageScrollTopAnimate } from 'Helpers/browser.js'
import { checkCurrentLanguage } from 'Helpers/language.js'
import 'styles/pages/article.scss'

export default class Header extends Component {
  constructor() {
    super()
    this._onWindowChange = this._onWindowChange.bind(this)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._onWindowChange)
    window.removeEventListener('scroll', this._onWindowChange)
  }

  componentDidMount() {
    window.addEventListener('resize', this._onWindowChange)
    window.addEventListener('scroll', this._onWindowChange)
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
        <button className='toggle-button'></button>
        <nav>
          <Link
            className={activeTag === 'Proposals' ? 'active' : ''}
            to={{
              pathname: '/proposals',
              query
            }}
          >
            {__('Call for Proposals')}
          </Link>
          <Link
            className={activeTag === 'Sponsor' ? 'active' : ''}
            to={{
              pathname: '/sponsors',
              query
            }}
          >
            {__('Call for Sponsors')}
          </Link>
          <a onClick={() => this._onNavToFooter()}>{__('About Us')}</a>
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

import React, { Component } from 'react'
import { Link } from 'react-router'

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

  render() {
    const { activeTag } = this.props

    return (
      <header id='header' className='container'>
        <Link
          className='logo'
          to={{pathname:'/'}}
        >
          <img src='./assets/images/logo.png' />
        </Link>
        <div className='nav'>
        <button className='toggle-button'></button>
        <nav>
          <Link
            className={activeTag === 'Proposals' ? 'active' : ''}
            to={{pathname:'/Proposals'}}
          >
            {__('Call for Proposals')}
          </Link>
          <Link
            className={activeTag === 'Sponsor' ? 'active' : ''}
            to={{pathname:'/Sponsors'}}
          >
            {__('Call for Sponsors')}
          </Link>
          <a>{__('About Us')}</a>
        </nav>
        </div>
        <a href='/en/' className='lang'>{__('中文')}</a>
      </header>
    )
  }
}

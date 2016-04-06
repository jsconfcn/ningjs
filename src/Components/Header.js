import React, { Component } from 'react'
import { Link } from 'react-router'

import { pageScrollTopAnimate } from 'Helpers/browser.js'
import NavTab from './NavTab'
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
    const {changeLang, query} = this.props
    const Logo = (
      <Link className='logo' to={{pathname: '/',query}}>
        <img src='./assets/images/logo.png' />
      </Link>
    )

    const Lang = (query.locale === 'zh-cn' ?
      <a className='lang' onClick={changeLang.bind(null, 'en')} >English</a> :
      <a className='lang' onClick={changeLang.bind(null, 'zh-cn')}>中文</a>)

    return (
      <div className='header-wrapper'>
        <header id='header' className='container'>
          {Logo}
          <NavTab __={this.props.__} query={query}/>
          {Lang}
        </header>
        <header id='sub-header' className='container'>
          {Logo}
          {Lang}
          {/* SNS */}
          <div className='SNS'>
            <a className='weibo' href='http://weibo.com/JSConfChina' target='_blank'><span>Weibo</span></a>
            <a className='twitter' href='https://twitter.com/jsconfchina' target='_blank'><span>Twitter</span></a>
            <a className='github' href='http://github.com/jsconfcn/NingJS' target='_blank'><span>GitHub</span></a>
          </div>
        </header>
      </div>
    )
  }
}

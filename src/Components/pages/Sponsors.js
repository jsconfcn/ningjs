import React, { Component } from 'react'

import { checkCurrentLanguage } from 'Helpers/language.js'
import Header from 'Components/Header'
import Footer from 'Components/Footer'
import 'styles/pages/article.scss'

export default class Sponsors extends Component {
  _renderContent() {
    const isZh = checkCurrentLanguage()
    return isZh ? (
      <article className='wrapper'>
        <p>中文</p>
      </article>
    ) : (
      <article className='wrapper'>
        <div className='section'>
          <h2>Call For Sponsors</h2>
          <p> You are invited to support the 2016 JSConf China (NingJS) in Nangjing, China on September 3rd-4th, 2016. JSConf China is a two-day developer-driven non-profit event focused on JavaScript and Node.js technologies. We bring together notable figures from both the Chinese and international JavaScript communities to share their knowledge and passion for JavaScript. Here is the program for the past JSConf China (<a href='http://2012.jsconf.cn' target='new'>2012</a>, <a href='http://2013.jsconf.cn' target='new'>2013</a>, <a href='http://2014.jsconf.cn' target='new'>2014</a>, <a href='http://2015.jsconf.cn' target='new'>2015</a>). </p>
          <p>This is an ideal way to demonstrate your organization's commitment to the JavaScript community. Sponsor support is typically used to cover the fees of the venue, catering, speakers, event promotion and operation. The support from sponsors allows us to offer tickets at lower prices, increasing attendance and support for the JS community in China. </p>
          <h4>Sponsorship Options</h4>
          <p>NingJS Conf has three sponsorship levels: gold, silver, bronze. Your support is very important to the conference, and the conference committee ensures that these contributions are well recognized. We list the benefits and costs below. We are open to any sponsorship needs - chat with an organizer about package details at <a href='mailto:support@jsconf.cn'>support@jsconf.cn</a>.</p>
          <div className='icon-group'>
            <ul className='icon-list'>
              <li><div>Gold Sponsor</div></li>
              <li><div>Sliver Sponsor</div></li>
              <li><div>Bronze Sponsor</div></li>
            </ul>
          </div>
          <h4>What else can you sponsor?</h4>
          <ul className='else'>
            <li>
              <h5>Speaker sponsor</h5>
              <p>Cover the transportation and accommodation of the speaker from your company</p>
            </li>
            <li>
              <h5>Afterparty food&beverage sponsor</h5>
              <p>Brand exposure limited to the afterparty/coffee break. Can be a non-tech type of brand.</p>
            </li>
            <li>
              <h5>Media partner</h5>
              <p>Non-cash partnership. Mutual relationship with the partner company while getting as much promotional value as possible.</p>
            </li>
          </ul>
          <div className='action'>
            <a className='button green'>DOWNLOAD THE SPONSOR PACKAGE</a>
          </div>
        </div>
      </article>
    )
  }
  render() {
    return (
      <div id='container' className='article call-for-sponsors'>
        {/* hero */}
        <section id='hero'>
          <div className='bg-container'>
            <div className='box'>
              {/* header */}
              <Header activeTag='Sponsors' />
              <header id='sub-header' className='container'>
                <a className='logo' href='/'><img src='./assets/images/logo.png' /></a>
                <a href='/en/' className='lang'>{__('中文')}</a>
                {/* SNS */}
                <div className='SNS'>
                  <a className='weibo' href='http://weibo.com/JSConfChina' target='_blank'><span>Weibo</span></a>
                  <a className='twitter' href='https://twitter.com/jsconfchina' target='_blank'><span>Twitter</span></a>
                  <a className='github' href='http://github.com/jsconfcn/NingJS' target='_blank'><span>GitHub</span></a>
                </div>
              </header>

              {/* masthead */}
              <div className='masthead'>
                <h1>{__('Call for Sponsors')}</h1>
                <p>Proposals are being accepted for the JS Conference China 2016 from now until Sep 01, 2016. </p>
              </div>
            </div>
            <div className='bg'>
            </div>
          </div>
        </section>

       {/* content */}
       {this._renderContent()}
       <Footer />
      </div>
    )
  }
}

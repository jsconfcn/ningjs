import React, { Component } from 'react'
import { Link } from 'react-router'

import Header from 'Components/Header'
import Footer from 'Components/Footer'
import { checkCurrentLanguage } from 'Helpers/language.js'
import 'styles/pages/index.scss'

export default class Index extends Component {
  _onSwitchLanguage() {
    const isZh = checkCurrentLanguage()
    if (location.hash.indexOf('ln=') === -1) {
      window.location.hash = window.location.hash.replace('?', `?ln=${isZh ? 'en' : 'zh'}&`)
    }else {
      window.location.hash = window.location.hash.replace(`${isZh ? 'zh' : 'en'}`, `${isZh ? 'en' : 'zh'}`)
    }
    window.location.reload()
  }
  render() {
    const isZh = checkCurrentLanguage()
    const query = { ln: isZh ? 'zh' : 'en' }
    return (
      <div id='container'>
        {/* hero */}
        <section id='hero'>
          <div className='bg-container'>
            <div className='box'>
              {/* header */}
              <Header />
              <header id='sub-header' className='container'>
                <Link
                  className='logo'
                  to={{
                    pathname: '/',
                    query
                  }}
                >
                  <img src='./assets/images/logo.png' />
                </Link>
                <a
                  className='lang'
                  onClick={() => this._onSwitchLanguage()}
                >
                  {__('中文')}
                </a>
                {/* SNS */}
                <div className='SNS'>
                  <a className='weibo' href='http://weibo.com/JSConfChina' target='_blank'><span>Weibo</span></a>
                  <a className='twitter' href='https://twitter.com/jsconfchina' target='_blank'><span>Twitter</span></a>
                  <a className='github' href='http://github.com/jsconfcn/NingJS' target='_blank'><span>GitHub</span></a>
                </div>
              </header>

              {/* masthead */}
              <div className='masthead'>
                <h1>{__('NingJS')} · {__('JSConf China 2016')}</h1>
                <h4>2016.09.02 - 09.03 @{__('Nanjing')}</h4>
                <div className='subscription'>
                  <label>{__('Stay Tuned')}</label>
                  <form action='http://wiredcraft.us2.list-manage1.com/subscribe/post?u=18eb8d6c34ad5d4e781541da9&amp;id=ce3898dd2e' method='post' target='_blank'>
                    <input type='email' name='EMAIL' className='required email' placeholder='Email Address' />
                    <button type='submit' name='subscribe' className='button green'>{__('notify me')}</button>
                  </form>
                  <p>{__('Interested in sponsorship opportunities at NingJS 2016?')}?</p>
                  <Link
                    to={{
                      pathname: '/sponsors',
                      query
                    }}
                  >{__('Sponsor now!')}</Link>
                </div>
              </div>
            </div>
            <div className='bg'></div>
          </div>

        </section>

        {/* Call for proposals */}
        <section id='call-for-speakers'>
          <a className='col-2'>
            <h2>{__('Call for Speakers')}</h2>
            <p>{__('Proposals are being accepted for the JS Conference China 2016 from now until Jun. 01, 2016.')}</p>
            <button className='button green'>{__('apply')}</button>
            <div className='bg'></div>
          </a>
          <a className='col-2'>
            <h2>{__('Call for Sponsors')}</h2>
            <p>{__('Get out all the ads you ran last year. Go ahead. Tear them out of your magazines or newspapers.')}</p>
            <button className='button purple'>{__('sponsor')}</button>
            <div className='bg'></div>
          </a>
        </section>

        {/* About us */}
        <section id='about-us' className='wrapper'>
         <div className='left'>
            <div className='intro'>
            <h2>{__('About Us')}</h2>
            <p>{__('JSConf China is a two-day developer-driven non-profit event focused on JavaScript and Node.js technologies. We bring together notable figures from both the Chinese and international JavaScript communities to share their knowledge and passion for JavaScript. Here is the program for the past years')} (<a href='http://2012.jsconf.cn' target='new'>2012</a>, <a href='http://2013.jsconf.cn' target='new'>2013</a>, <a href='http://2014.jsconf.cn' target='new'>2014</a>, <a href='http://2015.jsconf.cn' target='new'>2015</a>). {__('You can check out the videos from 2015 JSConf China in Shenzhen on')} <a href='https://www.youtube.com/channel/UCvFAekDfG_dL2Kcbq-vrPXQ' target='new'>YouTube</a> {__('and')} <a href='http://www.tudou.com/home/wiredcraft' target='new'>Tudou</a>. {__('This year we will hold the JSConf China in Nanjing on')} <strong>{__('September 3rd-4th, 2016')}.</strong> </p>
            </div>
            <ul className='statistic'>
              <li><h1>5</h1><span>{__('Year')}</span></li>
              <li><h1>1730+</h1><span>{__('Attendees')}</span></li>
              <li><h1>80+</h1><span>{__('Speakers')}</span></li>
              <li><h1>40+</h1><span>{__('Sponsors')}</span></li>
            </ul>
            <div className='graph'>
              <h3>Attendees</h3>
              <ul>
                <li>
                  <span className='year'>2012</span>
                  <span className='title'><a href='http://2012.jsconf.cn' target='new'>{__('HuJS@Shanghai')}</a></span>
                  <span className='progress'></span>
                  <span className='number'>237</span>
                </li>
                <li>
                  <span className='year'>2013</span>
                  <span className='title'><a href='http://2013.jsconf.cn' target='new'>{__('JingJS@Beijing')}</a></span>
                  <span className='progress'></span>
                  <span className='number'>318</span>
                </li>
                <li>
                  <span className='year'>2014</span>
                  <span className='title'><a href='http://2014.jsconf.cn' target='new'>{__('HangJS@Hangzhou')}</a></span>
                  <span className='progress'></span>
                  <span className='number'>525</span>
                </li>
                <li>
                  <span className='year'>2015</span>
                  <span className='title'><a href='http://2015.jsconf.cn' target='new'>{__('ShenJS@Shenzhen')}</a></span>
                  <span className='progress'></span>
                  <span className='number'>650</span>
                </li>
                <li>
                  <span className='year'>2016</span>
                  <span className='title'>{__('NingJS@Nanjing')}</span>
                  <span className='date'>09.02 - 09.03</span>
                </li>
              </ul>
            </div>
          </div>
          <img src='./assets/images/map.jpg' className='map' />
        </section>

        {/* Display list */}
        <ul id='display-list'>
          <li><img src='./assets/images/media-01.jpg' /></li>
          <li><img src='./assets/images/media-02.jpg' /><img src='./assets/images/media-03.jpg' /></li>
          <li><img src='./assets/images/media-04.jpg' /></li>
        </ul>

        {/* Review */}
        <section id='review'>
          <div className='wrapper'>
            <h2>{__('ShenJS 2015@Shenzhen')}</h2>
            <p>To see presentations from last year's ShenJS, please look at our past conference sites at jsconf.cn or check out the videos on YouTube or Tudou. </p>
            <a href='http://2015.jsconf.cn' target='new'>{__('Take a look')} &gt;</a>
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}

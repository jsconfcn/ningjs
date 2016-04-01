import React, { Component } from 'react'

import Header from 'Components/Header'
import Footer from 'Components/Footer'
import 'styles/pages/index.scss'

export default class Index extends Component {
  render() {
    return (
      <div id='container'>
        {/* hero */}
        <section id='hero'>
          <div className='bg-container'>
            <div className='box'>
              {/* header */}
              <Header />
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
                <h1>JSconf China 2016</h1>
                <h4>2016.09.02 - 09.03 @NanJing</h4>
                <div className='subscription'>
                  <label>{__('Stay Tuned')}</label>
                  <form action='http://wiredcraft.us2.list-manage1.com/subscribe/post?u=18eb8d6c34ad5d4e781541da9&amp;id=ce3898dd2e' method='post' target='_blank'>
                    <input type='email' name='EMAIL' className='required email' placeholder='Email Address' />
                    <input type='submit' value='notify me' name='subscribe' className='button green' />
                  </form>
                  <p>Interested in sponsorship opportunities at NingJSConf CN 2016?</p>
                  <a>{__('Sponsor now!')}</a>
                </div>
              </div>
            </div>
            <div className='bg'></div>
          </div>

        </section>

        {/* Call for proposals */}
        <section id='call-for-proposals'>
          <a className='col-2'>
            <h2>{__('Call for Proposals')}</h2>
            <p>Proposals are being accepted for the JS Conference China 2016 from now until Sep 01, 2016.</p>
            <button className='button green'>apply</button>
            <div className='bg'></div>
          </a>
          <a className='col-2'>
            <h2>{__('Call for Sponsors')}</h2>
            <p>Get out all the ads you ran last year. Go ahead. Tear them out of your magazines or newspapers.</p>
            <button className='button purple'>sponsor</button>
            <div className='bg'></div>
          </a>
        </section>

        {/* About us */}
        <section id='about-us' className='wrapper'>
         <div className='left'>
            <div className='intro'>
            <h2>{__('About Us')}</h2>
            <p>Creativity can provide all that which is required to make your advertising an attractive and effective one. Getting your product endorsed with an increase in its popularity figure has become quite easy these days with the availability of several advertising mediums in market. Among them advertising blimps and balloons can bring your brand interesting visual advertising without much cost. They are capable to grab maximum attention of the audience, especially if the blimp is visually crafted and appealing to look from a great distance.</p>
            </div>
            <ul className='statistic'>
              <li><h1>5</h1><span>Year</span></li>
              <li><h1>1730+</h1><span>Attendees</span></li>
              <li><h1>80+</h1><span>Speakers</span></li>
              <li><h1>40+</h1><span>Sponsors</span></li>
            </ul>
            <div className='graph'>
              <h3>Attendees</h3>
              <ul>
                <li>
                  <span className='year'>2012</span>
                  <span className='title'><a>HuJS@Shanghai</a></span>
                  <span className='progress'></span>
                  <span className='number'>237</span>
                </li>
                <li>
                  <span className='year'>2013</span>
                  <span className='title'><a>JingJS@Beijing</a></span>
                  <span className='progress'></span>
                  <span className='number'>318</span>
                </li>
                <li>
                  <span className='year'>2014</span>
                  <span className='title'><a>HangJS@Hangzhou</a></span>
                  <span className='progress'></span>
                  <span className='number'>525</span>
                </li>
                <li>
                  <span className='year'>2015</span>
                  <span className='title'><a>ShenJS@Shenzhen</a></span>
                  <span className='progress'></span>
                  <span className='number'>650</span>
                </li>
                <li>
                  <span className='year'>2016</span>
                  <span className='title'>NingJS@NanJing</span>
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
            <h2>{__('ShenJs 2015 @ Shenzhen')}</h2>
            <p>To see presentations from last year's ShenJS, please look at our past conference sites at jsconf.cn or check out the videos on YouTube or Tudou. </p>
            <a>{__('Take a look')} &gt;</a>
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}

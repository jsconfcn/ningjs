import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'styles/main.scss'

export default class Index extends Component {
  render() {
    return (
      <div>
        {/* hero */}
        <section id='hero'>
          <div className='bg'>
            <div className='box'>
            {/* header */}
            <header id='header' className='container'>
              <a className='logo' href='/'>JSconfCN</a>
              <nav>
                <a>{__('Call for Speakers')}</a>
                <a>{__('Call for Sponsors')}</a>
                <a>{__('About Us')}</a>
              </nav>
              <a href='/en/' className='lang'>{__('中文')}</a>
            </header>
            <header id='sub-header' className='container'>
              <a className='logo' href='/'>JSconfCN</a>
              <a href='/en/' className='lang'>{__('中文')}</a>
              {/* SNS */}
              <div className='SNS'>
                <a className='weibo' href='http://weibo.com/JSConfChina' target='_blank'><span>Weibo</span></a>
                <a className='twitter' href='https://twitter.com/jsconfchina' target='_blank'><span>Twitter</span></a>
                <a className='github' href='http://github.com/jsconfcn/ShenJS' target='_blank'><span>GitHub</span></a>
                <a className='slack' href='https://shenjs.herokuapp.com/' target='_blank'><span>Slack</span></a>
              </div>
            </header>

            {/* masthead */}
            <div className='masthead'>
              <h1>JSconf China 2016</h1>
              <h4>2016.09.02 - 09.03 @NanJing</h4>
              <div className='subscription'>
                <label>{__('Stay Tuned')}</label>
                <input type='text' placeholder='Email Address' />
                <button className='button green'>{__('notify me')}</button>
                <p>Interested in sponsorship opportunities at NingJSConf CN 2016?</p>
                <a>{__('Sponsor now!')}</a>
              </div>
            </div>
            </div>
          </div>

        </section>

        {/* Call for proposals */}
        <section id='call-for-proposals'>
          <div className='col-2'>
            <h2>{__('Call for Speakers')}</h2>
            <p>Proposals are being accepted for the JS Conference China 2016 from now until Sep 01, 2016.</p>
            <button className='button green'>submit</button>
          </div>
          <div className='col-2'>
            <h2>{__('Call for Sponsors')}</h2>
            <p>Get out all the ads you ran last year. Go ahead. Tear them out of your magazines or newspapers.</p>
            <button className='button purple'>sponsor</button>
          </div>
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
                  <span className='title'>HuJS@Shanghai</span>
                  <span className='progress'></span>
                  <span className='number'>237</span>
                </li>
                <li>
                  <span className='year'>2013</span>
                  <span className='title'>HuJS@Shanghai</span>
                  <span className='progress'></span>
                  <span className='number'>318</span>
                </li>
                <li>
                  <span className='year'>2014</span>
                  <span className='title'>HuJS@Shanghai</span>
                  <span className='progress'></span>
                  <span className='number'>525</span>
                </li>
                <li>
                  <span className='year'>2015</span>
                  <span className='title'>HuJS@Shanghai</span>
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
        </section>

        {/* Display list */}
        <ul id='display-list'>
          <li><a href='#'></a></li>
          <li><a href='#'></a><a href='#'></a></li>
          <li><a href='#'></a></li>
        </ul>

        {/* Review */}
        <section id='review' className='wrapper'>
        <h2>{__('ShenJs 2015 @ Shenzhen')}</h2>
        <p>To see presentations from last year's ShenJS, please look at our past conference sites at jsconf.cn or check out the videos on YouTube or Tudou. </p>
        <a>{__('Take a look')}&gt;</a>
        </section>

       {/* Footer */}
       <footer id='footer'>
        <div className='container'>
          <div className='left'>
            {/* Subscription */}
            <div className='subscription'>
              <label>{__('Stay Tuned')}</label>
              <p>Be the first to hear about our offers and announcements.</p>
              <input type='text' placeholder='Email Address' />
              <button className='button green'>{__('notify me')}</button>
            </div>
            {/* SNS */}
            <div className='SNS'>
              <a className='weibo' href='http://weibo.com/JSConfChina' target='_blank'><span>Weibo</span></a>
              <a className='twitter' href='https://twitter.com/jsconfchina' target='_blank'><span>Twitter</span></a>
              <a className='github' href='http://github.com/jsconfcn/ShenJS' target='_blank'><span>GitHub</span></a>
              <a className='slack' href='https://shenjs.herokuapp.com/' target='_blank'><span>Slack</span></a>
            </div>
          </div>
          <div className='right'>
            <span>Follow us on WeChat</span>
            <div className='qrcode'>
              <img src='./assets/images/qrcode.jpg' className='img' width='50' />
              <img src='./assets/images/qrcode.jpg' className='tooltip' />
            </div>
          </div>
          <div className='bottom'>
            <span>Buile by</span> <a href='http://wiredcraft.com'>Wiredcraft</a>
            <div>
              <a href="/code-of-conduct" target="_self">Code Of Conduct</a>
              <a href="http://jsconf.cn" target="new">JSConf.cn</a>
              <a href="#" target="new">Media Contact</a>
              <a href="https://creativecommons.org/licenses/by/3.0/" target="new">CCA 3.0 License</a>
            </div>
          </div>
        </div>
       </footer>


      </div>
    )
  }
}

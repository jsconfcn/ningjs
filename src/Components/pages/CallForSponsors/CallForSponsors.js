import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'styles/pages/article.scss'

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
              <div className='nav'>
              <button className='toggle-button'>三</button>
              <nav>
                <a>{__('Call for Speakers')}</a>
                <a>{__('Call for Sponsors')}</a>
                <a>{__('About Us')}</a>
              </nav>
              </div>
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
              <img src='./assets/images/qrcode.jpg' className='img' width='80' />
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

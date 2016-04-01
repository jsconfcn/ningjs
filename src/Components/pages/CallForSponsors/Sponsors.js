import React, { Component } from 'react'

import Header from 'Components/Header'
import 'styles/pages/article.scss'

export default class Sponsors extends Component {
  render() {
    return (
      <div id='container' className='article call-for-sponsors'>
        {/* hero */}
        <section id='hero'>
          <div className='bg-container'>
            <div className='box'>
              {/* header */}
              <Header activeTag='Sponsor' />
              <header id='sub-header' className='container'>
                <a className='logo' href='/'><img src='./assets/images/logo.png' /></a>
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
                <h1>{__('Call for Sponsors')}</h1>
                <p>Proposals are being accepted for the JS Conference China 2016 from now until Sep 01, 2016. </p>
              </div>
            </div>
            <div className='bg'>
            </div>
          </div>
        </section>

       {/* content */}
       <article className='wrapper'>
         <div className='section'>
           <h2>Why You Should Sponsor?</h2>
           <div className='icon-group'>
             <ul className='icon-list'>
             <li>Supporting the <br/>local JS community </li>
             <li>Recruitment<br/> access</li>
             <li>Branding</li>
             <li>Learn about cutting edge<br/> technologies</li>
             </ul>
             <p className='doc'>For more information download our <a>PDF</a> or get in touch with us at <a href='mailto:mail@jsconfcn.com'>mail@jsconfcn.com</a>.</p>
           </div>
         </div>
         <div className='section'>
            <h2>Let's Talk!</h2>
            <form>
            <p className='filed'>
              <label><span>Full Name</span><em>*</em></label>
              <input type='text' />
            </p>
            <p className='filed'>
              <label><span>Email</span><em>*</em></label>
              <input type='text' />
            </p>
            <p className='filed'>
              <label><span>Talk about yourself briefly</span></label>
              <textarea placeholder=""></textarea>
            </p>
            <div className='action'><button type='submit' className='button green'>submit</button></div>
            </form>
         </div>


       </article>


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

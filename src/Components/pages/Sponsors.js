import React, { Component } from 'react'

import Header from 'Components/Header'
import Footer from 'Components/Footer'
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

       <Footer />
      </div>
    )
  }
}

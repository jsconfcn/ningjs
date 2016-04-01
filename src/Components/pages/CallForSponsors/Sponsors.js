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


       {/* Footer */}
       <footer id='footer'>
        <div className='container'>
          <div className='left'>
            {/* Subscription */}
            <div className='subscription'>
              <label>{__('Stay Tuned')}</label>
              <p>Be the first to hear about our offers and announcements.</p>
              <form action='http://wiredcraft.us2.list-manage1.com/subscribe/post?u=18eb8d6c34ad5d4e781541da9&amp;id=ce3898dd2e' method='post' target='_blank'>
                <input type='email' name='EMAIL' className='required email' placeholder='Email Address' />
                <input type='submit' value='notify me' name='subscribe' className='button green' />
              </form>
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

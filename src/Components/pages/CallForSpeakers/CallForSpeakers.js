import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'styles/pages/article.scss'

export default class Index extends Component {
  render() {
    return (
      <div className='article'>
        {/* hero */}
        <section id='hero'>
          <div className='bg-container'>
            <div className='box'>
              {/* header */}
              <header id='header' className='container'>
                <a className='logo' href='/'>JSconfCN</a>
                <div className='nav'>
                <button className='toggle-button'>三</button>
                <nav>
                  <a className='active'>{__('Call for Speakers')}</a>
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
                <h1>{__('Call for Speakers')}</h1>
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
           <h2>Call For Proposals</h2>
           <p>JavaScript community to submit talks for the upcoming NingJS Conf 2016 on September 3rd-4th, 2016 in Nanjing, China. The Call for Proposals closes at 12pm EST, June 1st , 2016 (Strictly, no joke!).</p>
           <p>JSConf China is a developer-driven conference where members of the Chinese and international JS community can share and discuss the newest techniques and tools in the JavaScript language. Talks in English and Mandarin are welcome.</p>
           <h4>If you or someone you know has something kick-ass to share, let us know!</h4>
           <p>If you have something kick-ass to share, tell us all about it. If you know someone who has something great to talk about, nominate them. And if you are interested in hearing about a particular topic, nominate the topic, we'll try to find a match. Fill in and submit this form.</p>
           <p>Catch a glimpse of what we are interested in hearing about, here is the program for the past years (2012, 2013, 2014, 2015). We have videos from 2015 ShenJS available on YouTube and Tudou. </p>
           <h4>We encourage presentations of all levels and are happy to provide you support. </h4>
           <p>Is this your first time speaking? Want some feedback before submitting your proposal? Get in touch with the event organizer at <a href="mailto:coco@wiredcraft.com">coco@wiredcraft.com </a> and we'll be happy to help. Submissions through email won't be accepted, so please use the form. </p>
           <div className='action'><button className='button green'>Apply now</button></div>
         </div>

         <div className='section'>
           <h2>The Perks</h2>
           <p>If you get selected as a speaker at NingJS Conf 2016, here's what you get:</p>
           <ul>
           <li>Flight and Accomodation</li>
           <li>Speaker Dinner</li>
           <li>Conference Ticket</li>
           <li>Professioal Photography / Video</li>
           </ul>
            <p>As a reminder,  the purpose of JSChina presentations are to share knowledge, skills, and experience.We welcome talks letting ` know how you are using tools in your work, but discourage any proposals with the aim of selling a product or service.</p>
            <p><strong>If your company can cover your travel and hotel, we are happy to list them as a special sponsor.</strong> Check out our sponsor page. The money we save on your travel and accommodation will go to making the event even better! </p>
            <p>Looking forward to your entry!</p>
            <form>
            <p className='filed'>
              <label><span>Name</span><em>*</em></label>
              <input type='text' />
            </p>
             <p className='filed'>
              <label><span>Name</span><em>*</em></label>
              <input type='text' />
            </p>
            <p className='filed'>
              <label><span>Name</span><em>*</em></label>
              <input type='text' />
            </p>
            <p className='filed'>
              <label><span>Name</span><em>*</em></label>
              <input type='text' />
            </p>
            <p className='filed'>
              <label><span>Name</span><em>*</em></label>
              <input type='text' />
            </p>

            <div className='action'><button type='submit' className='button green'>submit your proposal</button></div>
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

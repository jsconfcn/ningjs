import React, { Component } from 'react'

import 'styles/pages/article.scss'
import Header from 'Components/Header'

export default class Speakers extends Component {
  render() {
    return (
      <div id='container' className='article call-for-proposals'>
        {/* hero */}
        <section id='hero'>
          <div className='bg-container'>
            <div className='box'>
              {/* header */}
              <Header activeTag='Proposals' />
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
                <h1>{__('Call for Proposals')}</h1>
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
           <p>JavaScript community to submit talks for the upcoming NingJS Conf 2016 on September 3rd-4th, 2016 in Nanjing, China. The Call for Proposals closes at <strong>12pm EST, June 1st , 2016</strong> (Strictly, no joke!).</p>
           <p>JSConf China is a developer-driven conference where members of the Chinese and international JS community can share and discuss the newest techniques and tools in the JavaScript language. Talks in English and Mandarin are welcome.</p>
           <h4>If you or someone you know has something kick-ass to share, let us know!</h4>
           <p>If you have something kick-ass to share, tell us all about it. If you know someone who has something great to talk about, nominate them. And if you are interested in hearing about a particular topic, nominate the topic, we'll try to find a match. Fill in and submit this form.</p>
           <p>Catch a glimpse of what we are interested in hearing about, here is the program for the past years (2012, 2013, 2014, 2015). We have videos from 2015 ShenJS available on YouTube and Tudou. </p>
           <h4>We encourage presentations of all levels and are happy to provide you support. </h4>
           <p>Is this your first time speaking? Want some feedback before submitting your proposal? Get in touch with the event organizer at <a href="mailto:coco@wiredcraft.com">coco@wiredcraft.com </a> and we'll be happy to help. <strong>Submissions through email won't be accepted, so please use the form. </strong></p>
           <div className='action'><button className='button green'>Apply now</button></div>
         </div>

         <div className='section'>
           <h2>The Perks</h2>
           <p>If you get selected as a speaker at NingJS Conf 2016, here's what you get:</p>
           <div className='icon-group'>
             <ul className='icon-list'>
             <li><div>Flight and<br/> Accomodation</div></li>
             <li><div>Speaker<br/> Dinner</div></li>
             <li><div>Conference<br/> Ticket</div></li>
             <li><div>Professioa<br/> Photography / Video</div></li>
             </ul>
           </div>
            <p>As a reminder,  the purpose of JSChina presentations are to share knowledge, skills, and experience.We welcome talks letting ` know how you are using tools in your work, but discourage any proposals with the aim of selling a product or service.</p>
            <p><strong>If your company can cover your travel and hotel, we are happy to list them as a special sponsor.</strong> Check out our sponsor page. The money we save on your travel and accommodation will go to making the event even better! </p>
            <p>Looking forward to your entry!</p>
            <form>
            <p className='filed'>
              <label><span>Name</span><em>*</em></label>
              <input type='text' />
            </p>
             <p className='filed'>
              <label><span>Current location</span><em>*</em></label>
              <input type='text' />
            </p>
            <p className='filed'>
              <label><span>Email</span><em>*</em></label>
              <input type='text' />
            </p>
            <p className='filed'>
              <label><span>Title of Talk</span><em>*</em></label>
              <input type='text' />
            </p>
            <p className='filed'>
              <label><span>Topic/Project+Summary</span><em>*</em></label>
              <textarea placeholder='This will be used online to describe your talk please keep it to 300 words or less'></textarea>
            </p>
            <p className='filed'>
              <label><span>Nominate another person?</span></label>
              <textarea placeholder="Please give a reason and leave the person's name and contact info here"></textarea>
            </p>
            <p className='filed'>
              <label><span>Past Presentations/Personal Blog (if you have any)</span></label>
              <input type='text' />
            </p>
             <p className='filed'>
              <label><span>Would your company be interested in sponsoring NingJS 2016? </span></label>
              <span className='select'>
                <select>
                  <option> </option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </span>
            </p>
            <p className='filed'>
              <label><span>Anything else?</span></label>
              <textarea placeholder='e.g. more info on your presentation, special requests, questions'></textarea>
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

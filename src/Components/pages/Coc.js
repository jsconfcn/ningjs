import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Header from 'Components/Header'
import Footer from 'Components/Footer'
import { checkCurrentLanguage } from 'Helpers/language.js'
import 'styles/pages/article.scss'

export default class Index extends Component {
  _renderContent() {
    const isZh = checkCurrentLanguage()
    return isZh ? (
      <article className='wrapper'>
        <p>中文</p>
      </article>
    ) : (
      <article className='wrapper'>
         <h2>Short Version</h2>
         <p>NingJS is dedicated to providing a harassment-free conference experience for everyone, regardless of gender, sexual orientation, disability, physical appearance, body size, race, or religion. We do not tolerate harassment of conference participants in any form. Sexual language and imagery is not appropriate for any conference venue, including talks. Conference participants violating these rules may be sanctioned or expelled from the conference without a refund at the discretion of the conference organizers.</p>
         <h2>Long Version</h2>
         <h4>Harassment</h4>
         <p>Harassment includes offensive verbal comments related to gender, sexual orientation, disability, physical appearance, body size, race, religion, sexual images in public spaces, deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention. Participants asked to stop any harassing behavior are expected to comply immediately.</p>
         <h4>Exhibitors & Sponsors</h4>
         <p>Exhibitors in the expo hall, sponsor or vendor booths, or similar activities are also subject to the anti-harassment policy. In particular, exhibitors should not use sexualized images, activities, or other material. Booth staff (including volunteers) should not use sexualized clothing/uniforms/costumes, or otherwise create a sexualized environment.</p>
         <h4>Participants</h4>
         <p>If a participant engages in harassing behavior, the conference organizers may take any action they deem appropriate, including warning the offender or expulsion from the conference with no refund. If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of conference staff immediately. Conference staff can be identified by t-shirts/special badges. Conference staff will be happy to help participants contact hotel/venue security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the conference. We value your attendance.</p>
         <h4>Venue & Social Events</h4>
         <p>We expect participants to follow these rules at all conference venues and conference-related social events.</p>
         <h4>License</h4>
         <p>This Code of Conduct was forked from the example policy from the Geek Feminism wiki, created by the Ada Initiative and other volunteers, which is under a Creative Commons Zero license.</p>
      </article>
    )
  }
  render() {
    return (
      <div className='article coc'>
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
                <h1>{__('Code of Conduct')}</h1>
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

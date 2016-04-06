import React, { Component, createElement } from 'react'
import { Link } from 'react-router'

import { pageScrollTopAnimate } from 'Helpers/browser.js'
import 'styles/pages/article.scss'

export default class Speakers extends Component {
  _onApply() {
    const submitForm = document.querySelector('#submitForm')
    const timeInMS = 300
    pageScrollTopAnimate(submitForm.offsetTop, timeInMS)
  }

  componentDidMount() {
    let script = document.createElement('script');
    script.async = true;
    script.src = 'https://jinshuju.net/f/Q5EBZW/embedded.js?banner=show&background=white&height=1444'
    document.getElementById('submitForm').appendChild(script);
  }

  render() {
    const { __, query } = this.props
    return (
      <div id='container' className='article call-for-speakers'>
        {/* hero */}
        <section id='hero'>
          <div className='bg-container'>
            <div className='box'>

              <div className='masthead'>
                <h1>{__('call_for_speakers')}</h1>
                <p>{__('call_for_speakers_mini_intro')}</p>
              </div>
            </div>
            <div className='bg'>
            </div>
          </div>
        </section>
        <article className='wrapper'>
        <div className='section'>
          <h2>{__('call_for_speakers')}</h2>
          <div dangerouslySetInnerHTML={{__html:__('call_for_speakers_intro')}}></div>
           <div className='action'>
           <button className='button green' onClick={() => {this._onApply()}}>
             {__('apply_now')}
           </button>
          </div>
        </div>
        <div className='section'>
          <h2>{__('the_perks')}</h2>
          <p>{__('benifit_for_apply')}</p>
          <div className='icon-group'>
            <ul className='icon-list'>
            <li dangerouslySetInnerHTML={{__html:__('accomodation')}}></li>
            <li dangerouslySetInnerHTML={{__html:__('dinner')}}></li>
            <li dangerouslySetInnerHTML={{__html:__('ticket')}}></li>
            <li dangerouslySetInnerHTML={{__html:__('photography')}}></li>
            </ul>
          </div>
          <div dangerouslySetInnerHTML={{__html: __('call_for_speakers_reminder')}} ></div>
           <div id='submitForm'></div>
        </div>
      </article>
      </div>
    )
  }
}


import React, { Component } from 'react'

import 'styles/pages/article.scss'

export default class Sponsors extends Component {
  render() {
    const { __, query } = this.props
    return (
      <div id='container' className='article call-for-sponsors'>
        {/* hero */}
        <section id='hero'>
          <div className='bg-container'>
            <div className='box'>
              <div className='masthead'>
                <h1>{__('call_for_sponsors')}</h1>
                <p>{__('call_for_sponsors_mini_intro')}</p>
              </div>
            </div>
            <div className='bg'>
            </div>
          </div>
        </section>

       <article className='wrapper'>
        <div className='section'>
          <h2>{__('call_for_sponsors')}</h2>
          <div dangerouslySetInnerHTML={{__html:__('call_for_sponsors_intro')}}></div>
          <div className='icon-group'>
            <ul className='icon-list'>
              <li><div>{__('gold_sponsor')}</div></li>
              <li><div>{__('sliver_sponsor')}</div></li>
              <li><div>{__('bronze_sponsor')}</div></li>
            </ul>
          </div>
          <h4>{__('what_else_sponsor')}</h4>
          <ul className='else'>
            <li>
              <h5>{__('speaker_sponsor')}</h5>
              <p>{__('speaker_sponsor_intro')}</p>
            </li>
            <li>
              <h5>{__('food_sponsor')}</h5>
              <p>{__('food_sponsor_intro')}</p>
            </li>
            <li>
              <h5>{__('media_sponsor')}</h5>
              <p>{__('media_sponsor_intro')}</p>
            </li>
          </ul>
          <div className='action'>
            <a className='button green disabled'>{__('download_sponsor_package')}</a>
          </div>
        </div>
      </article>
      </div>
    )
  }
}

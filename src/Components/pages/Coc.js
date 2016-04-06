import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import 'styles/pages/article.scss'

export default class Index extends Component {

  render() {
    const { __, query } = this.props
    return (
      <div className='article coc'>
        {/* hero */}
        <section id='hero'>
          <div className='bg-container'>
            <div className='box'>
              {/* masthead */}
              <div className='masthead'>
                <h1>{__('coc')}</h1>
                <p>Proposals are being accepted for the JS Conference China 2016 from now until Sep 01, 2016. </p>
              </div>
            </div>
            <div className='bg'>
            </div>
          </div>
        </section>
        <article className='wrapper'>
         <div dangerouslySetInnerHTML={{__html:__('coc_intro')}}></div>
        </article>
      </div>
    )
  }
}

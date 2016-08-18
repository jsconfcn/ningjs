/*
 * ningjs - Live.js
 */

'use strict'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import 'styles/pages/article.scss'

export default class Live extends Component {

  componentDidMount() {
    const options = {

    }
    videojs('ningjs_live', {flash: options, html5: options})
  }

  render() {
    const { __, query } = this.props
    return (
      <div className='article'>
        {/* video */}
        <section id='hero'>
          <div className='bg-container live'>
            <div className='box'>
              {/* masthead */}
              <video
                id='ningjs_live'
                className='video-js vjs-default-skin'
                controls
                preload='auto'
                poster=''>
                <source src='rtmp://rtmpningjs.react-china.org/ningjs/ulive-1rr2pe' type='rtmp/mp4' />
              </video>
            </div>
          </div>
        </section>

      </div>
    )
  }
}

/*
 * ningjs - Live.js
 */

'use strict'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import 'styles/pages/article.scss'

export default class Live extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      videos: [{
        name: '2016-09-03 Morning',
        url: 'http://ningjs.cn-bj.ufileos.com/2016-09-03-Morning.mp4'
      }, {
        name: '2016-09-03 Afternoon'
      }, {
        name: '2016-09-04 Morning'
      }, {
        name: '2016-09-04 Afternoon'
      }]
    }
  }

  componentDidMount() {
    const options = {
    }
    videojs('ningjs_live', {flash: options, html5: options})
  }

  onSelectVideo(i, e) {
    e.preventDefault();
    e.stopPropagation();

    this.setState({
      selected: i
    })
  }

  render() {
    const { __, query } = this.props
    const { selected, videos } = this.state;
    const video = videos[selected];

    return (
      <div className='article'>
        {/* video */}
        <section id='hero'>
          <div className='bg-container live'>
            <div className='videos'>
              <ul>
                {
                  videos.map((v, i) => {
                    return (
                      <li key={i}>
                        <a
                          href='#'
                          onClick={this.onSelectVideo.bind(this, i)}
                          hidden={!v.url}>
                          {v.name}
                        </a>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div className='box'>
              {/* masthead */}
              <video
                id='ningjs_live'
                className='video-js vjs-default-skin'
                controls
                preload='auto'
                poster=''>
                <source src={video.url} type='video/mp4' />
              </video>
            </div>
          </div>
        </section>

      </div>
    )
  }
}

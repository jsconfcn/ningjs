/*
 * ningjs - Home.js
 */

'use strict'

import React, { Component,createElement } from 'react'
import { Link } from 'react-router'

export default class Home extends Component {

  render() {
    const { __, query } = this.props
    return (
      <div>
        <section id='hero'>
          <div className='bg-container'>
            <div className='box'>

              <div className='masthead'>
                <h1>{__('ningjs')} · {__('jsconf_china_2016')}</h1>
                <h4>2016.09.03 - 09.04 @ {__('nanjing')}</h4>
                <a className='button green tickets' href='http://www.bagevent.com/event/58905' target='new'>{__('buy_tickets')}</a>
                <div className='subscription'>      
                  <p>{__('interest_sponsor_2016')}</p>
                  <Link to={{ pathname: '/sponsors', query }} >{__('sponsor_now')}</Link>
                </div>
              </div>
            </div>
            <div className='bg'></div>
          </div>
        </section>

        <section id='call-for-speakers'>
          <Link to='' className='col-2'>
            <h2>{__('call_for_volunteers')}</h2>
            <p></p>
            <button className='button green'>{__('coming_soon')}</button>
            <div className='bg'></div>
          </Link>
          <Link to={{ pathname: '/sponsors', query }} className='col-2'>
            <h2>{__('call_for_sponsors')}</h2>
            <p>{__('get_out_ads_go_ahead')}</p>
            <button className='button purple'>{__('sponsor')}</button>
            <div className='bg'></div>
          </Link>
        </section>

        <section id='about-us' className='wrapper'>
         <div className='left'>
            <div className='intro'>
            <h2>{__('about_us')}</h2>
            <div dangerouslySetInnerHTML={{__html: __('about_us_intro')}} ></div>
            </div>
            <ul className='statistic'>
              <li><h1>5</h1><span>{__('year')}</span></li>
              <li><h1>1730+</h1><span>{__('attendees')}</span></li>
              <li><h1>80+</h1><span>{__('speakers')}</span></li>
              <li><h1>40+</h1><span>{__('sponsors')}</span></li>
            </ul>
            <div className='graph'>
              <h3>{__('attendees')}</h3>
              <ul>
                <li>
                  <span className='year'>2012</span>
                  <span className='title'><a href='http://2012.jsconf.cn' target='new'>{__('HuJS @ Shanghai')}</a></span>
                  <span className='progress'></span>
                  <span className='number'>237</span>
                </li>
                <li>
                  <span className='year'>2013</span>
                  <span className='title'><a href='http://2013.jsconf.cn' target='new'>{__('JingJS @ Beijing')}</a></span>
                  <span className='progress'></span>
                  <span className='number'>318</span>
                </li>
                <li>
                  <span className='year'>2014</span>
                  <span className='title'><a href='http://2014.jsconf.cn' target='new'>{__('HangJS @ Hangzhou')}</a></span>
                  <span className='progress'></span>
                  <span className='number'>525</span>
                </li>
                <li>
                  <span className='year'>2015</span>
                  <span className='title'><a href='http://2015.jsconf.cn' target='new'>{__('ShenJS @ Shenzhen')}</a></span>
                  <span className='progress'></span>
                  <span className='number'>650</span>
                </li>
                <li>
                  <span className='year'>2016</span>
                  <span className='title'>{__('NingJS @ Nanjing')}</span>
                  <span className='date'>09.03 - 09.04</span>
                </li>
              </ul>
            </div>
          </div>
          <img src='./assets/images/map.jpg' className='map' />
        </section>

        <section id='speakers' className='wrapper'>
          <h2>{__('confirmed_speakers')}</h2>
          <ul>
            <li>
              <a href='https://github.com/blesh' target='new'>
                <div><img src='./assets/images/speakers/ben-lesh.jpg' /></div>
                <h5>Ben Lesh</h5>
              </a>
            </li>
            <li>
              <a href='https://github.com/dmarcos/' target='new'>
                <div><img src='./assets/images/speakers/diego-marcos.png' /></div>
                <h5>Diego Marcos</h5>
              </a>
            </li>
            <li>
              <a href='https://github.com/yyx990803' target='new'>
                <div><img src='./assets/images/speakers/evan-you.jpg' /></div>
                <h5>Evan You</h5>
              </a>
            </li>
            <li>
              <a href='https://github.com/thejameskyle' target='new'>
                <div><img src='./assets/images/speakers/james-kyle.jpg' /></div>
                <h5>James Kyle</h5>
              </a>
            </li>



            <li>
              <a href='https://github.com/atian25' target='new'>
                <div><img src='./assets/images/speakers/tianzhu.png' /></div>
                <h5>天猪</h5>
              </a>
            </li>
            <li>
              <a href='#' target='new'>
                <div><img src='./assets/images/speakers/kenneth.png' /></div>
                <h5>Kenneth Auchenberg</h5>
              </a>
            </li>

            <li>
              <a href='https://github.com/Unitech' target='new'>
                <div><img src='./assets/images/speakers/alexandre.png' /></div>
                <h5>Alexandre Strzelewicz</h5>
              </a>
            </li>

            <li>
              <a href='https://github.com/dfguo' target='new'>
                <div><img src='./assets/images/speakers/guodafeng.png' /></div>
                <h5>Dafeng Guo</h5>
              </a>
            </li>

            <li>
              <a href='https://github.com/wyvernnot' target='new'>
                <div><img src='./assets/images/speakers/wangyan.png' /></div>
                <h5>王龑</h5>
              </a>
            </li>

            <li>
              <a href='https://github.com/xudafeng' target='new'>
                <div><img src='./assets/images/speakers/xudafeng.jpg' /></div>
                <h5>徐达峰</h5>
              </a>
            </li>
          </ul>
        </section>

        <ul id='display-list'>
          <li><img src='./assets/images/media-01.jpg' /></li>
          <li><img src='./assets/images/media-02.jpg' /><img src='./assets/images/media-03.jpg' /></li>
          <li><img src='./assets/images/media-04.jpg' /></li>
        </ul>

        <section id='review'>
          <div className='wrapper'>
            <h2>{__('JSConf 2015 @ Shenzhen')}</h2>
            <p dangerouslySetInnerHTML={{__html:__('take_a_look_intro')}}></p>
            <a href='http://2015.jsconf.cn' target='new'>{__('take_a_look')} &gt;</a>
          </div>
        </section>
      </div>
    )
  }
}

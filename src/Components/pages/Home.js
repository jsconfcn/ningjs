/*
 * ningjs - Home.js
 */

'use strict'

import React, { Component,createElement } from 'react'
import { Link } from 'react-router'
import Schedule from '../schedule'
import Sponsors from '../sponsors'
// import Map from '../Map'

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
                <a className='button green tickets disabled' target='new'>{__('sold_out')}</a>
              </div>
            </div>
            <div className='bg'></div>
          </div>
        </section>

        <section id='call-for-speakers'>
          <a className='col-2' target='new'>
            <h2>{__('call_for_volunteers')}</h2>
            <p>{__('call_for_volunteers_intro')}</p>
            <button className='button green'>{__('apply_now')}</button>
            <div className='bg'></div>
          </a>
          <Link to={{ }} className='col-2'>
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
              <li><h1>80+</h1><span>{__('Schedule')}</span></li>
              <li><h1>40+</h1><span>{__('sponsors')}</span></li>
            </ul>
            <div className='graph'>
              <h3>{__('attendees')}</h3>
              <ul>
                <li>
                  <span className='year'>2012</span>
                  <span className='title'><a href='http://2012.jsconfchina.com' target='new'>{__('HuJS @ Shanghai')}</a></span>
                  <span className='progress'></span>
                  <span className='number'>237</span>
                </li>
                <li>
                  <span className='year'>2013</span>
                  <span className='title'><a href='http://2013.jsconfchina.com' target='new'>{__('JingJS @ Beijing')}</a></span>
                  <span className='progress'></span>
                  <span className='number'>318</span>
                </li>
                <li>
                  <span className='year'>2014</span>
                  <span className='title'><a href='http://2014.jsconfchina.com' target='new'>{__('HangJS @ Hangzhou')}</a></span>
                  <span className='progress'></span>
                  <span className='number'>525</span>
                </li>
                <li>
                  <span className='year'>2015</span>
                  <span className='title'><a href='http://2015.jsconfchina.com' target='new'>{__('ShenJS @ Shenzhen')}</a></span>
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
            <div className='organizer'>
              <h3>{__('organizer')}</h3>
              <div className='cols'>
                <p dangerouslySetInnerHTML={{__html: __('organizer_intro')}} ></p>
              </div>
              
            </div>
          </div>
          <img src='./assets/images/map.jpg' className='map' />
        </section>

        <section id='schedule'>
          <div className='wrapper'>
            <h2>{__('Schedule')}</h2>
            <Schedule __={__}/>
          </div>
        </section>

        <section id='location'>
          <div className='wrapper'>
            <h2>{__('location_title')}</h2> 
            <div className='address'>
              <h3>{__('hotel')}</h3>
              <p>{__('address')}</p>
            </div>
            <div className='imgs'>
              <img src='./assets/images/address.jpg' />
              <img src='./assets/images/address1.jpg' />
            </div>
          </div>

        </section>


        <section id='sponsors'>
          <div className='wrapper'>
            <h2>{__('confirmed_sponsors')}</h2>
            <Sponsors __={__}/>
          </div>
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
            <a href='http://2015.jsconfchina.com' target='new'>{__('take_a_look')} &gt;</a>
          </div>
        </section>
      </div>
    )
  }
}

import React, { Component } from 'react'
import { Link } from 'react-router'

import { checkCurrentLanguage } from 'Helpers/language.js'
import 'styles/pages/article.scss'

export default class Footer extends Component {
  render() {
    const isZh = checkCurrentLanguage()
    const query = { ln: isZh ? 'zh' : 'en' }
    return (
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
             <Link to={{ pathname: '/coc', query }}>Code Of Conduct</Link>
             <a href="http://jsconf.cn" target="new">JSConf.cn</a>
             <a href="#" target="new">Media Contact</a>
             <a href="https://creativecommons.org/licenses/by/3.0/" target="new">CCA 3.0 License</a>
           </div>
         </div>
       </div>
      </footer>
    )
  }
}

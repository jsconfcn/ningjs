import React, { Component } from 'react'
import { Link } from 'react-router'

import 'styles/pages/article.scss'

export default class Footer extends Component {
  render() {
    return (
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
             <a className='github' href='http://github.com/jsconfcn/NingJS' target='_blank'><span>GitHub</span></a>
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
    )
  }
}

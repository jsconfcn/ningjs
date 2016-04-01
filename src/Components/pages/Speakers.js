import React, { Component } from 'react'
import { Link } from 'react-router'

import Header from 'Components/Header'
import Footer from 'Components/Footer'

import { pageScrollTopAnimate } from 'Helpers/browser.js'
import { checkCurrentLanguage } from 'Helpers/language.js'
import 'styles/pages/article.scss'

export default class Speakers extends Component {
  _onApply() {
    const submitForm = document.querySelector('#submitForm')
    const timeInMS = 300
    pageScrollTopAnimate(submitForm.offsetTop, timeInMS)
  }

  _renderContent() {
    const query = { ln: isZh ? 'zh' : 'en' }
    const isZh = checkCurrentLanguage()
    return isZh ? (
        <article className='wrapper'>
        <div className='section'>
          <h2>话题征寻</h2>
          <p>2016年的JavaScript中国开发者大会（NingJS 2016）将于<strong>9月3日-4日</strong>在南京举行。现已开放讲师及赞助商的申请通道，截止时间为<strong>北京时间2016年6月1日24点</strong>。欢迎所有JavaScirpt 开发者及爱好者的踊跃参与！</p>
          <p>JavaScript中国开发者大会（JSConf China）是一个以JS开发者为中心的活动。我们希望为来自中国本土及国际JS 社区的开发者们提供一个分享、讨论最前沿的JS技术和工具的平台。你可以用英文或中文演讲。</p>
          <h4>开放推荐优秀讲师</h4>
          <p>如果你有新颖的观点要分享，请告诉我们。如果你知道其他的优秀讲师，请推荐给我们。如果你有特别想了解的话题，告诉我们，我们会尽力帮你找到匹配的讲师。总之，填写表格吧！</p>
          <p>如果你想了解往届的活动，这里是过去四年在分别在上海、北京、杭州、深圳举行的JS中国开发者大会（<a href='http://2012.jsconf.cn' target='new'>2012</a>, <a href='http://2013.jsconf.cn' target='new'>2013</a>, <a href='http://2014.jsconf.cn' target='new'>2014</a>, <a href='http://2015.jsconf.cn' target='new'>2015</a>). 去年深圳JS大会的视频可以在 <a href='https://www.youtube.com/channel/UCvFAekDfG_dL2Kcbq-vrPXQ' target='new'>YouTube</a> 和 <a href='http://www.tudou.com/home/wiredcraft' target='new'>Tudou</a>上看到. </p>
          <h4>我们欢迎任何形式的演讲，也非常愿意提供帮助</h4>
          <p>如果这是你的第一次演讲，并且想在提交申请前得到一些反馈，请联系活动组织者 <a href="mailto:support@jsconf.cn">support@jsconf.cn </a> 我们会及时回复。 <strong>注意，通过邮件提交的演讲将不会被接受，请通过这个表格提交。</strong></p>
          <div className='action'>
           <button
             className='button green'
             onClick={() => {this._onApply()}}
           >
             现在申请
           </button>
          </div>
        </div>
        <div className='section'>
          <h2>讲师特权</h2>
          <p>如果你被选为NingJS的演讲嘉宾，你将会得到以下特权：</p>
          <div className='icon-group'>
            <ul className='icon-list'>
            <li>机票与住宿</li>
            <li>讲师晚餐</li>
            <li>大会门票</li>
            <li>专业摄像及摄影服务</li>
            </ul>
          </div>
           <p>提示：JSconf中国所有演讲的目的都是为了分享知识与经验，或是你在技术方面做过的一些很牛的事情。我们欢迎你在演讲中向大家介绍你在工作中使用的工具，但是我们不鼓励任何形式的产品或服务推广。</p>
           <p><strong>对了，如果你的公司愿意报销你的往返交通费及大会期间的住宿费，我们将把他们列为特别赞助商。</strong> 具体信息请查看我们的<Link
                    to={{
                      pathname: '/sponsors',
                      query
                    }}
                  >赞助商页面</Link>. 而我们将会利用省下的这项资金更好地投入到大会筹办中去。</p>
           <p>期待你加入宁JS！</p>
           <form id='submitForm'>
             <p className='filed'>
               <label><span>Name</span><em>*</em></label>
               <input type='text' />
             </p>
              <p className='filed'>
               <label><span>Current location</span><em>*</em></label>
               <input type='text' />
             </p>
             <p className='filed'>
               <label><span>Email</span><em>*</em></label>
               <input type='text' />
             </p>
             <p className='filed'>
               <label><span>Title of Talk</span><em>*</em></label>
               <input type='text' />
             </p>
             <p className='filed'>
               <label><span>Topic/Project+Summary</span><em>*</em></label>
               <textarea placeholder='This will be used online to describe your talk please keep it to 300 words or less'></textarea>
             </p>
             <p className='filed'>
               <label><span>Nominate another person?</span></label>
               <textarea placeholder="Please give a reason and leave the person's name and contact info here"></textarea>
             </p>
             <p className='filed'>
               <label><span>Past Presentations/Personal Blog (if you have any)</span></label>
               <input type='text' />
             </p>
              <p className='filed'>
               <label><span>Would your company be interested in sponsoring NingJS 2016? </span></label>
               <span className='select'>
                 <select>
                   <option> </option>
                   <option>Yes</option>
                   <option>No</option>
                 </select>
               </span>
             </p>
             <p className='filed'>
               <label><span>Anything else?</span></label>
               <textarea placeholder='e.g. more info on your presentation, special requests, questions'></textarea>
             </p>
             <div className='action'><button type='submit' className='button green'>submit your proposal</button></div>
           </form>
        </div>
      </article>
    ) : (
      <article className='wrapper'>
        <div className='section'>
          <h2>Call For Proposals</h2>
          <p>We are inviting the JavaScript community to submit talks for the upcoming JSConf China 2016 (NingJS) on September 3rd-4th, 2016 in Nanjing, China. The Call for Proposals <strong>closes at 12pm GMT+8 on June 1st, 2016.</strong> (Strictly, no joke!).</p>
          <p>JSConf China is a developer-driven conference where members of the Chinese and international JS community can share and discuss the newest techniques and tools in the JavaScript language. Talks in English and Mandarin are welcome.</p>
          <h4>If you or someone you know has something kick-ass to share, let us know!</h4>
          <p>If you have something kick-ass to share, tell us all about it. If you know someone who has something great to talk about, nominate them. And if you are interested in hearing about a particular topic, nominate the topic, we'll try to find a match. Fill in and submit this form.</p>
          <p>Catch a glimpse of what we are interested in hearing about, here is the program for the past years (<a href='http://2012.jsconf.cn' target='new'>2012</a>, <a href='http://2013.jsconf.cn' target='new'>2013</a>, <a href='http://2014.jsconf.cn' target='new'>2014</a>, <a href='http://2015.jsconf.cn' target='new'>2015</a>). We have videos from 2015 ShenJS available on <a href='https://www.youtube.com/channel/UCvFAekDfG_dL2Kcbq-vrPXQ' target='new'>YouTube</a> and <a href='http://www.tudou.com/home/wiredcraft' target='new'>Tudou</a>. </p>
          <h4>We encourage presentations of all levels and are happy to provide you support. </h4>
          <p>Is this your first time speaking? Want some feedback before submitting your proposal? Get in touch with the event organizer at <a href="mailto:support@jsconf.cn">support@jsconf.cn </a> and we'll be happy to help. <strong>Submissions through email won't be accepted, so please use the form. </strong></p>
          <div className='action'>
           <button
             className='button green'
             onClick={() => {this._onApply()}}
           >
             Apply now
           </button>
          </div>
        </div>
        <div className='section'>
          <h2>The Perks</h2>
          <p>If you get selected as a speaker at NingJS Conf 2016, here's what you get:</p>
          <div className='icon-group'>
            <ul className='icon-list'>
            <li>Flight and<br/> Accomodation</li>
            <li>Speaker<br/> Dinner</li>
            <li>Conference<br/> Ticket</li>
            <li>Professional<br/> Photography / Video</li>
            </ul>
          </div>
           <p>As a reminder, the purpose of JSConf China presentations is to share knowledge, skills, experience and some great things you have built. We welcome talks letting attendees know how you are using tools in your work, but discourage any proposals with the aim of selling a product or service.</p>
           <p><strong>If your company can cover your travel and hotel, we are happy to list them as a special sponsor.</strong> Check out <Link
                    to={{
                      pathname: '/sponsors',
                      query
                    }}
                  >our sponsor page</Link>. The money we save on your travel and accommodation will go to making the event even better! </p>
           <p>Looking forward to your entry!</p>
           <form id='submitForm'>
             <p className='filed'>
               <label><span>Name</span><em>*</em></label>
               <input type='text' />
             </p>
              <p className='filed'>
               <label><span>Current location</span><em>*</em></label>
               <input type='text' />
             </p>
             <p className='filed'>
               <label><span>Email</span><em>*</em></label>
               <input type='text' />
             </p>
             <p className='filed'>
               <label><span>Title of Talk</span><em>*</em></label>
               <input type='text' />
             </p>
             <p className='filed'>
               <label><span>Topic/Project+Summary</span><em>*</em></label>
               <textarea placeholder='This will be used online to describe your talk please keep it to 300 words or less'></textarea>
             </p>
             <p className='filed'>
               <label><span>Nominate another person?</span></label>
               <textarea placeholder="Please give a reason and leave the person's name and contact info here"></textarea>
             </p>
             <p className='filed'>
               <label><span>Past Presentations/Personal Blog (if you have any)</span></label>
               <input type='text' />
             </p>
              <p className='filed'>
               <label><span>Would your company be interested in sponsoring NingJS 2016? </span></label>
               <span className='select'>
                 <select>
                   <option> </option>
                   <option>Yes</option>
                   <option>No</option>
                 </select>
               </span>
             </p>
             <p className='filed'>
               <label><span>Anything else?</span></label>
               <textarea placeholder='e.g. more info on your presentation, special requests, questions'></textarea>
             </p>
             <div className='action'><button type='submit' className='button green'>submit your proposal</button></div>
           </form>
        </div>
      </article>
    )
  }

  render() {
    return (
      <div id='container' className='article call-for-speakers'>
        {/* hero */}
        <section id='hero'>
          <div className='bg-container'>
            <div className='box'>
              {/* header */}
              <Header activeTag='Speakers' />
              <header id='sub-header' className='container'>
                <a className='logo' href='/'><img src='./assets/images/logo.png' /></a>
                <a href='/en/' className='lang'>{__('中文')}</a>
                {/* SNS */}
                <div className='SNS'>
                  <a className='weibo' href='http://weibo.com/JSConfChina' target='_blank'><span>Weibo</span></a>
                  <a className='twitter' href='https://twitter.com/jsconfchina' target='_blank'><span>Twitter</span></a>
                  <a className='github' href='http://github.com/jsconfcn/ShenJS' target='_blank'><span>GitHub</span></a>
                </div>
              </header>

              {/* masthead */}
              <div className='masthead'>
                <h1>{__('Call for Speakers')}</h1>
                <p>{__('We are inviting the JavaScript community to submit talks for the upcoming NingJS 2016 (September 3rd-4th, Nanjing).')}</p>
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

import React, { Component } from 'react'

import { checkCurrentLanguage } from 'Helpers/language.js'
import Header from 'Components/Header'
import Footer from 'Components/Footer'
import 'styles/pages/article.scss'

export default class Sponsors extends Component {
  _renderContent() {
    const isZh = checkCurrentLanguage()
    return isZh ? (
       <article className='wrapper'>
        <div className='section'>
          <h2>赞助邀请</h2>
          <p>邀请您支持即将于2016年9月3日-9月4日在中国南京举办的2016 JS中国开发者大会（宁JS）。 JSConf China（JavaScript 中国开发者大会）是一个为期两天的以技术开发者为中心的非营利国际性技术大会，主要关注JavaScript和Node.JS 方面的技术。我们将邀请众多国内外JavaScript社区著名的开发者来分享他们的知识及对JavaScript的独到见解。这里是过去几届活动的链接： (<a href='http://2012.jsconf.cn' target='new'>2012</a>, <a href='http://2013.jsconf.cn' target='new'>2013</a>, <a href='http://2014.jsconf.cn' target='new'>2014</a>, <a href='http://2015.jsconf.cn' target='new'>2015</a>)。 </p>
          <p>这是一个绝佳的方式来表现您的组织对JavaScript社区的支持。赞助商的资金赞助一般用于支付场地的费用、餐饮、扬声器，以及相关活动的推广和执行。赞助商的支持让我们可以以更低的价格提供门票，提高参加率，更好地支持中国本土JS社区的发展。</p>
          <h4>赞助方案</h4>
          <p>2016宁JS提供三个等级的赞助方案: 金, 银, 铜。 您的支持对于大会来说非常重要，能够保证大会主办人员更好地组织与筹办这次活动。 我们将详细列出不同方案的特权以及费用，如果您对于赞助文档有任何的需求与疑问，请告诉我们！<a href='mailto:support@jsconf.cn'>support@jsconf.cn</a></p>
          <div className='icon-group'>
            <ul className='icon-list'>
              <li><div>金牌赞助商</div></li>
              <li><div>银牌赞助商</div></li>
              <li><div>铜牌赞助商</div></li>
            </ul>
          </div>
          <h4>您还可以在以下方面为我们提供帮助：</h4>
          <ul className='else'>
            <li>
              <h5>讲师赞助</h5>
              <p>为您公司的讲师提供交通以及餐饮费用的报销。</p>
            </li>
            <li>
              <h5>食物以及酒水赞助</h5>
              <p>派对与茶歇的品牌曝光有限，希望可以是非技术相关。</p>
            </li>
            <li>
              <h5>媒体伙伴</h5>
              <p>非资金类赞助，相互作为合作伙伴，尽可能为大会提供媒体推广与宣传。</p>
            </li>
          </ul>
          <div className='action'>
            <a className='button green'>下载赞助文档</a>
          </div>
        </div>
      </article>
    ) : (
      <article className='wrapper'>
        <div className='section'>
          <h2>Call For Sponsors</h2>
          <p> You are invited to support the 2016 JSConf China (NingJS) in Nangjing, China on September 3rd-4th, 2016. JSConf China is a two-day developer-driven non-profit event focused on JavaScript and Node.js technologies. We bring together notable figures from both the Chinese and international JavaScript communities to share their knowledge and passion for JavaScript. Here is the program for the past JSConf China (<a href='http://2012.jsconf.cn' target='new'>2012</a>, <a href='http://2013.jsconf.cn' target='new'>2013</a>, <a href='http://2014.jsconf.cn' target='new'>2014</a>, <a href='http://2015.jsconf.cn' target='new'>2015</a>). </p>
          <p>This is an ideal way to demonstrate your organization's commitment to the JavaScript community. Sponsor support is typically used to cover the fees of the venue, catering, speakers, event promotion and operation. The support from sponsors allows us to offer tickets at lower prices, increasing attendance and support for the JS community in China. </p>
          <h4>Sponsorship Options</h4>
          <p>NingJS Conf has three sponsorship levels: gold, silver, bronze. Your support is very important to the conference, and the conference committee ensures that these contributions are well recognized. We list the benefits and costs below. We are open to any sponsorship needs - chat with an organizer about package details at <a href='mailto:support@jsconf.cn'>support@jsconf.cn</a>.</p>
          <div className='icon-group'>
            <ul className='icon-list'>
              <li><div>Gold Sponsor</div></li>
              <li><div>Sliver Sponsor</div></li>
              <li><div>Bronze Sponsor</div></li>
            </ul>
          </div>
          <h4>What else can you sponsor?</h4>
          <ul className='else'>
            <li>
              <h5>Speaker sponsor</h5>
              <p>Cover the transportation and accommodation of the speaker from your company</p>
            </li>
            <li>
              <h5>Afterparty food&beverage sponsor</h5>
              <p>Brand exposure limited to the afterparty/coffee break. Can be a non-tech type of brand.</p>
            </li>
            <li>
              <h5>Media partner</h5>
              <p>Non-cash partnership. Mutual relationship with the partner company while getting as much promotional value as possible.</p>
            </li>
          </ul>
          <div className='action'>
            <a className='button green'>DOWNLOAD THE SPONSOR PACKAGE</a>
          </div>
        </div>
      </article>
    )
  }
  render() {
    return (
      <div id='container' className='article call-for-sponsors'>
        {/* hero */}
        <section id='hero'>
          <div className='bg-container'>
            <div className='box'>
              {/* header */}
              <Header activeTag='Sponsors' />
              <header id='sub-header' className='container'>
                <a className='logo' href='/'><img src='./assets/images/logo.png' /></a>
                <a href='/en/' className='lang'>{__('中文')}</a>
                {/* SNS */}
                <div className='SNS'>
                  <a className='weibo' href='http://weibo.com/JSConfChina' target='_blank'><span>Weibo</span></a>
                  <a className='twitter' href='https://twitter.com/jsconfchina' target='_blank'><span>Twitter</span></a>
                  <a className='github' href='http://github.com/jsconfcn/NingJS' target='_blank'><span>GitHub</span></a>
                </div>
              </header>

              {/* masthead */}
              <div className='masthead'>
                <h1>{__('Call for Sponsors')}</h1>
                <p>{__('Interested in supporting the local JavaScript community in China? There is no better way then helping sponsor JSConf 2016 in Nanjing.')}</p>
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

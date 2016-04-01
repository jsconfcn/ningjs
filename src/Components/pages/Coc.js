import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Header from 'Components/Header'
import Footer from 'Components/Footer'
import { checkCurrentLanguage } from 'Helpers/language.js'
import 'styles/pages/article.scss'

export default class Index extends Component {
  _renderContent() {
    const isZh = checkCurrentLanguage()
    return isZh ? (
      <article className='wrapper'>
         <h2>简洁版</h2>
         <p>宁JS旨在为所有人提供一场平等的技术大会，没有性别、肤色、外表之分，亦没有种族信仰之别。大会不允许参会者有任何形式的和大会宗旨相悖的行为。会场包括演讲过程中不允许有任何骚扰到他人的言语攻击或者照片。参会者一旦被发现此类行为，将被逐出大会现场，概不退还参会费用。</p>
         <h2>完整版</h2>
         <h4>骚扰</h4>
         <p>骚扰包括在公共场合有带性别、肤色、外表、信仰倾向的无礼的言语评论、色情图片、故意恐吓、盯梢、跟踪、骚扰摄影或者录音、持续性地打断演讲者、不恰当的身体接触以及不受欢迎的性倾向。参会者必须遵守大会守则，不出现上述行为。</p>
         <h4>参展者 & 赞助商</h4>
         <p>所有会场内的参展者、赞助商以及会场工作人员等类似角色的人也都要遵守不能有骚扰他人行为的政策。特别要注意，参展者不应当使用任何带有性色彩的图片和行为。工作人员（包括志愿者)也不应当穿戴任何有性色彩的服饰/制服等。</p>
         <h4>参会者</h4>
         <p>如发现有骚扰行为的参会者，大会组织者有权采取以下正当行为予以阻止：对其进行警告、将其逐出会场，并不退还参会费用。如果你被人骚扰或者发现有人被骚扰了，请及时联系我们的工作人员大会工作人员都穿戴有统一的T恤衫和证件。大会工作人员也会很乐意帮助参会者联系酒店/会场安保人员、当地警察，阻止这类行为。为参会者提供一个安全的环境。希望你对此能够引起足够的注意。</p>
         <h4>工作人员信息</h4>
         <p>CoCo Yu<br/><a href='mailto:coco@wiredcraft.com'>coco@wiredcraft.com</a></p>
         <h4>会场 & 社交场所</h4>
         <p>我们希望参会者能够在所有的大会会场以及相关的社交场所遵守行为守则。</p>
         <h4>许可证</h4>
         <p>这份行为准则借鉴自Ada Initiative和其他志愿者创建的Geek Feminism wiki示例政策，遵守Creative Commons Zero许可证。</p>
      </article>
    ) : (
      <article className='wrapper'>
         <h2>Short Version</h2>
         <p>NingJS is dedicated to providing a harassment-free conference experience for everyone, regardless of gender, sexual orientation, disability, physical appearance, body size, race, or religion. We do not tolerate harassment of conference participants in any form. Sexual language and imagery is not appropriate for any conference venue, including talks. Conference participants violating these rules may be sanctioned or expelled from the conference without a refund at the discretion of the conference organizers.</p>
         <h2>Long Version</h2>
         <h4>Harassment</h4>
         <p>Harassment includes offensive verbal comments related to gender, sexual orientation, disability, physical appearance, body size, race, religion, sexual images in public spaces, deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention. Participants asked to stop any harassing behavior are expected to comply immediately.</p>
         <h4>Exhibitors & Sponsors</h4>
         <p>Exhibitors in the expo hall, sponsor or vendor booths, or similar activities are also subject to the anti-harassment policy. In particular, exhibitors should not use sexualized images, activities, or other material. Booth staff (including volunteers) should not use sexualized clothing/uniforms/costumes, or otherwise create a sexualized environment.</p>
         <h4>Participants</h4>
         <p>If a participant engages in harassing behavior, the conference organizers may take any action they deem appropriate, including warning the offender or expulsion from the conference with no refund. If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of conference staff immediately. Conference staff can be identified by t-shirts/special badges. Conference staff will be happy to help participants contact hotel/venue security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the conference. We value your attendance.</p>
         <h4>Staff Contact Information</h4>
         <p>CoCo Yu<br/><a href='mailto:coco@wiredcraft.com'>coco@wiredcraft.com</a></p>
         <h4>Venue & Social Events</h4>
         <p>We expect participants to follow these rules at all conference venues and conference-related social events.</p>
         <h4>License</h4>
         <p>This Code of Conduct was forked from the example policy from the Geek Feminism wiki, created by the Ada Initiative and other volunteers, which is under a Creative Commons Zero license.</p>
      </article>
    )
  }
  render() {
    return (
      <div className='article coc'>
        {/* hero */}
        <section id='hero'>
          <div className='bg-container'>
            <div className='box'>
              {/* header */}
              <Header />
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
                <h1>{__('Code of Conduct')}</h1>
                <p>Proposals are being accepted for the JS Conference China 2016 from now until Sep 01, 2016. </p>
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

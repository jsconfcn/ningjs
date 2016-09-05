import React, { Component } from 'react'
import 'styles/speakers/style.scss'

class Article extends Component {

  render() {
    const { __, name, avatar, title, slide, desc, social, company } = this.props
    const avatarEl = avatar ? <div className='avatar'><img src={avatar} /></div> : null
    const companyEL = company ? <h5>{company}</h5> : null
    const nameEl = name ? <div><a href={social}>{name}</a></div> : null
    return (
      <article>
        { avatarEl }
        <div className='content'>
          <a className='title' href={slide || '#'} title={__(title)}>{__(title)}</a>
          <p>{__(desc)}</p>
          { nameEl }
          { companyEL }
        </div>
      </article>
    )
  }
}

export default class Item extends Component {

  render() {
    const { __, speakers, time} = this.props
    return (
      <div className='schedule'>
        <h4>{time}</h4>
        <div className='speakers'>
        {
          speakers.map((i, j) => <Article {...i} __={__} key={j}/>)
        }
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import 'styles/speakers/style.scss'

class Avatar extends Component {
  render() {
    const {avatar, name, company, social } = this.props;
    if (!name) {
      return null
    }
    return (
      <div className='info'>
        <div className='avatar'><img src={avatar} alt={name}/></div>
        <div>
          <a href={social} title={name}>{name}</a>
          <h5>{company}</h5>
        </div>
      </div>
    )
  }
}

class Article extends Component {

  render() {
    const { __, name, avatar, title, slide, desc, social, company } = this.props
    const slideLink = slide ? (<div><a className='slide' href={slide} title={slide}>{__('SLIDE DOWNLOAD')}</a></div>) : null
    return (
      <article>
        <Avatar {...{avatar, name, company, social}} />
        <div className='content'>
          <span className='title'>{__(title)}</span>
          <p>{__(desc)}</p>
          {slideLink}
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

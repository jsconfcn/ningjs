import React, { Component } from 'react'
import 'styles/speakers/style.scss'

class Article extends Component {

  render() {
    const { __, name, avatar, title, desc, social } = this.props
    return (
      <article>
        {
          avatar
          ? <img className='avatar' src={avatar} />
          : null
        }
        <div className='content'>
          <h3>{__(title)}</h3>
          <p>{__(desc)}</p>
          {
            name
            ? <div><a href={social}>By {name}</a></div>
            : null
          }

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

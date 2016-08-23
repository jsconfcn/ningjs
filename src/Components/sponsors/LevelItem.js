import React, {Component} from 'react'

export default class LevelItem extends Component {
	render () {
    const {level, data} = this.props
    const sponsorArray = data.map((sponsor, i) => {
      return (
        <a key={i} href={sponsor.link} target='new' className={sponsor.class}><img src={sponsor.logo} /></a>
      )
    })
    return (
     <div className='level'>
      <h3>{ level }</h3>
      <div className='list'>
      { sponsorArray } 
      </div>
    </div>
    )
  }
}
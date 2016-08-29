import React, { Component } from 'react'
import _ from 'lodash'
import LevelItem from './LevelItem'

import 'styles/speakers/style.scss'

/* Sponsor data */
const sponsorData = require('./sponsors.json')

export default class Index extends Component {

  covert(arr1, arr2, arr3) {
    return arr1.reduce((p, n) => {
      p[n.name] = [n].concat(arr2.filter(i => i.name === n.name))
      return p
    }, {})
  }

  render() {
    const { __, query } = this.props

    const levels = Object.keys(sponsorData).map((level, i) => {
      return (<LevelItem __={__} key={i} level={level} data={sponsorData[level]} />)
    })
    return (
      <div className='sponsors-container'>
        { levels }
      </div>
    )
  }
}

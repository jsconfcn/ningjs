import React, { Component } from 'react'
import _ from 'lodash'
import Item from './item'

import 'styles/speakers/style.scss'

export default class Index extends Component {

  speakers() {
    return {
      'Day 1': [{
        time: '8:15',
        title: 'Check In'
      },{
        time: '9:15',
        title: 'Intro Session'
      },{
        time: '9:45',
        name: 'Evan You',
        avatar: '/assets/images/speakers/evan-you.jpg',
        title: 'Vue.js: the Past and the Future',
        social: 'https://github.com/yyx990803'
      }, {
        time: '10:15',
        name: 'James Kyle',
        avatar: '/assets/images/speakers/james-kyle.jpg',
        title: 'How to build a compiler',
        social: 'https://github.com/thejameskyle',
        company: 'Facebook'
      }, {
        time: '10:45',
        title: 'Break'
      }, {
        time: '11:00',
        name: '天猪',
        avatar: '/assets/images/speakers/tianzhu.png',
        title: '阿里node 团队开源项目，企业级框架EGG',
        social: 'https://github.com/eggjs',
        company: 'Alibaba UC Group'
      }, {
        time: '11:30',
        name: '严清',
        avatar: '/assets/images/speakers/yanqing.jpg',
        title: '聊聊 JS 测试框架',
        social: 'https://github.com/zensh',
        company: 'Teambition'
      }, {
        time: '12:00',
        title: 'Lunch & Break'
      }, {
        time: '13:30',
        name: 'Alexandre Strzelewicz',
        avatar: '/assets/images/speakers/alexandre.png',
        title: 'GridControl: Networked PM2 for Microservices applications',
        social: 'https://github.com/Unitech',
        company: 'PM2'
      }, {
        time: '14:00',
        name: '罗诗亚',
        avatar: '/assets/images/speakers/luoshiya.png',
        title: '3D on the Web',
        social: 'https://github.com/shiya',
        company: 'Autodesk'
      }, {
        time: '14:30',
        title: 'Break'
      }, {
        time: '14:40',
        title: 'Lighting Talk'
      }, {
        time: '15:10',
        name: 'Diego Marcos',
        avatar: '/assets/images/speakers/diego-marcos.png',
        title: 'Aframe and WebVR',
        social: 'https://github.com/dmarcos',
        company: 'Mozilla'
      }, {
        time: '15:40',
        name: '郭达峰',
        avatar: '/assets/images/speakers/guodafeng.png',
        title: 'Building a Unified Frontend and Mobile Team',
        social: 'https://github.com/dfguo',
        company: 'Strikingly'
      },{
        time: '16:10',
        title: 'Break'
      },{
        time: '16:20',
        title: 'Confirming'
      }, {
        time: '16:50',
        name: 'Ryan Day',
        avatar: '/assets/images/speakers/ryan.png',
        title: 'Npm install food',
        social: 'https://github.com/soldair',
        company: 'NPM'
      },{
        time: '17:20',
        title: 'Raffle'
      }, {
        time: '17:30',
        title: 'Table Discussion'
      }, {
        time: '18:10',
        title: 'After Party Announcements'
      }],
      'Day 2': [{
        time: '9:45',
        name: '孙坤鹏',
        avatar: '/assets/images/speakers/sunkunpeng.jpg',
        title: '单页应用“联邦制”实践',
        social: 'http://weibo.com/u/3275479734',
        company: 'UCloud'
      }, {
        time: '10:15',
        name: 'Kenneth Auchenberg',
        avatar: '/assets/images/speakers/kenneth.png',
        title: 'DevTools for the Progressive Web',
        social: 'https://kenneth.io',
        company: 'Microsoft'
      }, {
        time: '10:45',
        title: 'Break'
      }, {
        time: '11:00',
        name: 'Aliyun Node Team',
        avatar: '//2015.jsconf.cn/images/speakers/2.jpg',
        title: 'Waiting',
        social: 'https://github.com/aliyun-node',
        company: 'Aliyun'
      }, {
        time: '11:30',
        name: 'Karolina Szczur',
        avatar: '/assets/images/speakers/karolina.jpg',
        title: 'The Cost of Open Source',
        social: 'https://github.com/thefoxis',
        company: 'Envato'
      }, {
        time: '12:00',
        title: 'Lunch & Break'
      }, {
        time: '13:30',
        name: '徐达峰',
        avatar: '/assets/images/speakers/xudafeng.jpg',
        title: '面向未来的自动化测试-Macaca',
        social: 'https://github.com/xudafeng',
        company: 'Alipay'
      }, {
        time: '14:00',
        name: 'Ben Lesh',
        avatar: '/assets/images/speakers/ben-lesh.jpg',
        title: 'Managing Async with RxJS 5 at Netflix',
        social: 'https://github.com/blesh',
        company: 'Netflix'
      }, {
        time: '14:30',
        title: 'Break'
      }, {
        time: '14:40',
        title: 'Lighting Talk'
      },{
        time: '15:10',
        name: '梁伟盛',
        avatar: '/assets/images/speakers/dasheng.jpg',
        title: '移动海量服务下基于React的高性能同构实践',
        social: '/',
        company: 'Tencent IMWeb Team'
      }, {
        time: '15:40',
        name: 'Peter Liu',
        avatar: '/assets/images/speakers/peter.png',
        title: 'Build a Better App with Mapbox',
        social: 'https://github.com/peterqliu',
        company: 'Mapbox'
      },{
        time: '16:10',
        title: 'Break'
      },{
        time: '16:20',
        title: 'Confirming'
      }, {
        time: '16:50',
        name: '王龑',
        avatar: '/assets/images/speakers/wangyan.png',
        title: '前端 DevOps 实践',
        social: 'https://github.com/wyvernnot',
        company: 'OneAPM'
      },{
        time: '17:20',
        title: 'Raffle'
      }, {
        time: '17:30',
        title: 'Table Discussion'
      }, {
        time: '18:10',
        title: 'Waiting'
      }]
    }
  }

  covert(arr1, arr2) {
    return arr1.reduce((p, n) => {
      p[n.time] = [n].concat(arr2.filter(i => i.time === n.time))
      return p
    }, {})
  }

  render() {
    const { __, query } = this.props
    const speakers = this.speakers();
    const days = Object.keys(speakers);
    const schedules = this.covert(speakers[days[0]], speakers[days[1]])
    return (
      <div className='speakers-container'>
        <div className='days'>
          <div><h3>Day 1</h3><i>09.03</i></div>
          <div><h3>Day 2</h3><i>09.04</i></div>
        </div>
        {
          Object.keys(schedules).map((i, j) => <Item time={i} speakers={schedules[i]} __={__} key={j}/>)
        }
      </div>
    )
  }
}

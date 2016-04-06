import React, { Component } from 'react'
import { Link } from 'react-router'

import Header from 'Components/Header'
import Footer from 'Components/Footer'
import zhcn from '../../../intl/zh-cn'
import en from '../../../intl/en'
import 'styles/pages/index.scss'

const format = (locale) => {
  return (key) => {
    let v = null;
    if (locale === 'zh-cn') {
      v = zhcn[key]
    } else {
      v = en[key]
    }
    return v || key;
  }
}

export default class Index extends Component {

  changeLang(lang) {
    let {pathname, query} = this.props.location
    query.locale = lang
    this.context.router.replace({pathname: pathname, query})
  }

  render() {
    const {query} = this.props.location
    const __ = format(query.locale);
    return (
      <div id='container'>
        <Header __={__} query={query} changeLang={this.changeLang.bind(this)} />
        {React.cloneElement(this.props.children, {__, query})}
        <Footer __={__} query={query} />
      </div>
    )
  }
}

Index.contextTypes = {
  router: React.PropTypes.object.isRequired
}

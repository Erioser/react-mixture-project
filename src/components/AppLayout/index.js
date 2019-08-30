import React, { Component } from 'react'
import './index.scss'
import { Layout } from 'antd'
import { HashRouter as Router } from 'react-router-dom'

import AppLayoutSider from './particles/AppLayoutSider'
import AppLayoutHeader from './particles/AppLayoutHeader'
import AppLayoutContent from './particles/AppLayoutContent'

import { apiGetCityInfoByIp } from '@/api'
import GlobalContext from '@/components/GlobalContext'

class AppLayout extends Component {  
  state = {
    collapsed: false,
    city: null
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  getCityInfoByIp () {
    apiGetCityInfoByIp()
      .then(({data}) => {
        this.setState({ city: data.city })
      })
      .catch(error => console.lof(error))
  }

  getGlobalContextValue () {
    let value = {}
    value.city = this.state.city
    return value
  }

  componentDidMount () {
    this.getCityInfoByIp()
  }

  render() {
    let value = this.getGlobalContextValue()
    return (
      <Router>
        <GlobalContext.Provider value={value}>
          <Layout className="app-layout">
            <AppLayoutSider collapsed = {this.state.collapsed}/>
            <Layout>
              <AppLayoutHeader toggle = { this.toggle } collapsed = {this.state.collapsed}/>
              <AppLayoutContent/>
            </Layout>
          </Layout>
        </GlobalContext.Provider>
      </Router>
    )
  }
}

export default AppLayout
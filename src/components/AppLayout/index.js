import React, { Component } from 'react'
import './index.scss'
import { Layout } from 'antd'
import { HashRouter as Router } from 'react-router-dom'
import AppLayoutSider from './particles/AppLayoutSider'
import AppLayoutHeader from './particles/AppLayoutHeader'
import AppLayoutContent from './particles/AppLayoutContent'
class AppLayout extends Component {  
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Router>
        <Layout className="app-layout">
          <AppLayoutSider collapsed = {this.state.collapsed}/>
          <Layout>
            <AppLayoutHeader toggle = { this.toggle } collapsed = {this.state.collapsed}/>
            <AppLayoutContent/>
          </Layout>
        </Layout>
      </Router>
    )
  }
}

export default AppLayout
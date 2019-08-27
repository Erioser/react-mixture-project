import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Layout } from 'antd'

import LotteryHistoryPage from '@/pages/Lottery/LotteryHistory'
import LotteryDetailPage from '@/pages/Lottery/LotteryDetail'
import LotteryQueryPage from '@/pages/Lottery/LotteryQuery'

import BeautyImagesPage from '@/pages/BeautyImages'

import SpacePage from '@/pages/Space'

const { Content } = Layout
class AppLayoutContent extends Component {  
  render() {
    return (
      <Content className = "app-layout__content">
        <Route path="/lottery/history" component = { LotteryHistoryPage } />
        <Route path="/lottery/detail/:id/:no" component = { LotteryDetailPage } />
        <Route path="/lottery/query" component = { LotteryQueryPage } />
        
        <Route path="/beauty-images" component = { BeautyImagesPage } />
        
        <Route path="/space" component = { SpacePage } />
        <Redirect from="/" to="/space" />
      </Content>
    )
  }
}

export default AppLayoutContent
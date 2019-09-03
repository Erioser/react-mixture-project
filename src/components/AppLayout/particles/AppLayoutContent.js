import React, { Suspense, lazy } from 'react'
import { BasicPureComponent } from '@/service/BasicComponent'
import { Route, Redirect, Switch } from 'react-router-dom'
import { Layout, Spin } from 'antd'
import ErrorBoundary from '@/components/ErrorBoundary'
// import LotteryHistoryPage from '@/pages/Lottery/LotteryHistory'
// import LotteryDetailPage from '@/pages/Lottery/LotteryDetail'
// import LotteryQueryPage from '@/pages/Lottery/LotteryQuery'
// import BeautyImagesPage from '@/pages/BeautyImages'
// import SpacePage from '@/pages/Space'

const LotteryHistoryPage = lazy(() => import('@/pages/Lottery/LotteryHistory'))
const LotteryDetailPage =  lazy(() => import('@/pages/Lottery/LotteryDetail'))
const LotteryQueryPage =  lazy(() => import('@/pages/Lottery/LotteryQuery'))
const BeautyImagesPage =  lazy(() => import('@/pages/BeautyImages'))
const SpacePage =  lazy(() => import('@/pages/Space'))

const { Content } = Layout
class AppLayoutContent extends BasicPureComponent {  
  render() {
    return (
      <Content className = "app-layout__content">
        <ErrorBoundary>
          <Suspense fallback={<Spin/>}>
            <Switch>
              <Route path="/lottery/history" component = { LotteryHistoryPage } />
              <Route path="/lottery/detail/:id/:no" component = { LotteryDetailPage } />
              <Route path="/lottery/query" component = { LotteryQueryPage } />
              
              <Route path="/beauty-images" component = { BeautyImagesPage } />
              
              <Route path="/space" component = { SpacePage } />
              <Redirect from="/*" to="/space" />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </Content>
    )
  }
}

export default AppLayoutContent
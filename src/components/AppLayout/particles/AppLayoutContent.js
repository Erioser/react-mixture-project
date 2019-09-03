import React, { Suspense } from 'react'
import { BasicComponent } from '@/service/BasicComponent'
import { Route, Redirect, Switch } from 'react-router-dom'
import { Layout, Spin } from 'antd'
import { flatteningRoutes } from '@/router'
import ErrorBoundary from '@/components/ErrorBoundary'

const { Content } = Layout
class AppLayoutContent extends BasicComponent {  
  render() {
    return (
      <Content className = "app-layout__content">
        <ErrorBoundary>
          <Suspense fallback={<Spin/>}>
            <Switch>
              {
                flatteningRoutes.list.map(item => (
                  <Route key={ item.key } path={ item.path } component = { item.component } />
                ))
              }
              <Redirect from="/*" to={ flatteningRoutes.default } />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </Content>
    )
  }
}

export default AppLayoutContent
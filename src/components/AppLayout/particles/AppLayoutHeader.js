import React, { Component } from 'react'
import { Layout, Icon } from 'antd'
import GlobalContext from '@/components/GlobalContext'
import AppLayoutHeaderWeather from './AppLayoutHeaderWeather'
const { Header } = Layout
class AppLayoutHeader extends Component {
  render() {
    return (
      <GlobalContext.Consumer>   
        { 
          value => (
            <Header className="app-layout__header" style={{ background: '#fff', padding: 0 }}>
              <div className="app-layout__header-content--left">
                <Icon
                  className="trigger"
                  type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.props.toggle}
                />
              </div>
              <div className="app-layout__header-content--right">
                <AppLayoutHeaderWeather city = {value.city}/>
              </div>        
            </Header>
          ) 
        }
      </GlobalContext.Consumer>
    )
  }
}
// this.context
// AppLayoutHeader.contextType = GlobalContext

export default AppLayoutHeader
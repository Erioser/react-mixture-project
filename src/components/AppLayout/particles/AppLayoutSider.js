import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { NavLink } from 'react-router-dom'

const { SubMenu } = Menu
const { Sider } = Layout

const SubmenuTittle = ({ title }) => {
  return (
    <span>
      <Icon type="barcode" />
      <span>{title}</span>
    </span>
  )
}

class AppLayoutSider extends Component {
  render() {
    return (
      <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultOpenKeys={['lottery']} defaultSelectedKeys={['lottery-history']}>
          <SubMenu
            key="lottery"
            title={<SubmenuTittle title="彩票"/>}
          >
            <Menu.Item key="lottery-history">
              <NavLink to="/lottery/history">
                <Icon type="project" />
                <span>历史中奖信息</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="lottery-query">
              <NavLink to="/lottery/query">
                <Icon type="calculator" />
                <span>中奖计算器</span>
              </NavLink>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="space">
            <NavLink to="/space">
              <Icon type="border" />
              <span>预留空位</span>
            </NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}

export default AppLayoutSider
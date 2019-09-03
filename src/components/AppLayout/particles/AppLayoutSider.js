import React, { BasicPureComponent } from '@/service/BasicComponent'
import { Layout, Menu, Icon } from 'antd'
import { NavLink, withRouter } from 'react-router-dom'

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

class AppLayoutSider extends BasicPureComponent {

  constructor (props) {
    super(props)
    this.state = {
      defaultSelectedKeys: [],
      refreshKey: 0
    }
  }
  
  static getDerivedStateFromProps (props, state) {
    let keys = []
    let { pathname } = props.location 
    keys.push(pathname.replace('/', ''))
    return {
      defaultSelectedKeys: keys,
      refreshKey: state.refreshKey + 1
    }
  }
  render() {
    let { defaultSelectedKeys, refreshKey } = this.state
    return (
      <Sider trigger={null} collapsible collapsed={this.props.collapsed}>

        <div className="logo">
          { this.props.collapsed ? 'Murlin' : 'Murlin\'s React' }
        </div>
       
        <Menu key={refreshKey} theme="dark" mode="inline" defaultOpenKeys={['lottery']} defaultSelectedKeys={defaultSelectedKeys}>
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
          <Menu.Item key="beauty-images">
            <NavLink to="/beauty-images">
              <Icon type="file-image" />
              <span>美图推荐</span>
            </NavLink>
          </Menu.Item>
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

export default withRouter(AppLayoutSider)
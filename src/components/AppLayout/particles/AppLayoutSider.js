import React, { BasicComponent } from '@/service/BasicComponent'
import { Layout, Menu, Icon } from 'antd'
import { NavLink, withRouter } from 'react-router-dom'
import { routes } from '@/router'
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

class AppLayoutSider extends BasicComponent {

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

  renderMenuList () {
    return routes.list.map(route => {
      if (!route.children && route.link !== false) {
        return (
          <Menu.Item key={ route.key }>
            <NavLink to={ route.path }>
              <Icon type={ route.icon } />
              <span>{ route.title }</span>
            </NavLink>
          </Menu.Item>
        )
      }
      return (
        <SubMenu
          key={ route.key }
          icon={ route.icon }
          title={<SubmenuTittle title={ route.title }/>}
        >
          {
            route.children.map(item => item.link !== false && (
              <Menu.Item key={ item.key }>
                <NavLink to={ item.path }>
                  <Icon type={ item.icon } />
                  <span>{ item.title }</span>
                </NavLink>
              </Menu.Item>
            ))
          }
        </SubMenu>
      )
    })
  }

  getDefaultOpenKeys () {
    return routes.list.filter(item => item.children).map(item => item.key)
  }

  render() {
    let { defaultSelectedKeys, refreshKey } = this.state
    return (
      <Sider trigger={null} collapsible collapsed={this.props.collapsed}>

        <div className="logo">
          { this.props.collapsed ? 'Murlin' : 'Murlin\'s React' }
        </div>
       
        <Menu key={refreshKey} theme="dark" mode="inline" defaultOpenKeys={!this.props.collapsed ? this.getDefaultOpenKeys() : []} defaultSelectedKeys={defaultSelectedKeys}>
          { this.renderMenuList() }
        </Menu>
      </Sider>
    )
  }
}

export default withRouter(AppLayoutSider)
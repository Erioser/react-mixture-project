import React, { BasicComponent } from '@/service/BasicComponent'
import { Popover, Card, List } from 'antd'
import { apiGetWeather } from '@/api'
import { WeatherService } from '@/service'


const WeatherContent = ({ list, description }) => {
  return (
    <Card title={description} >
      <List
        size="small"
        bordered
        dataSource={list}
        renderItem={item => {
          return (
            <List.Item>{item}</List.Item>
          )
        }}
      />
    </Card>
  )
}

class AppLayoutHeaderWeather extends BasicComponent {
  state = {
    weather: null
  }
  async getWeatherByCity (props) {
    let city = props ? props.city : this.props.city
    if (city) {
      try {
        let data = await apiGetWeather({ city })
        this.setState({
          weather: WeatherService.formatWeatherData(data.data)
        })
      } catch (e) { console.log(e) }
    }
  }
  componentDidMount () {
    this.getWeatherByCity()
  }
  shouldComponentUpdate (props) {
    if (props.city !== this.props.city) {
      this.getWeatherByCity(props)
    }
    return this._shouldComponentUpdate()
  }
  render() {
    let { weather } = this.state
    if (!weather) return ''
    return (
      <div className="app-layout__header-weather">
        <Popover trigger="hover"
        content={<WeatherContent { ...weather } />}>
          { weather.title } 
        </Popover>      
      </div>
    )
  }
}

export default AppLayoutHeaderWeather
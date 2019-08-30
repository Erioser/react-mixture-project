import React, { Component } from 'react'
import { Popover, Card, List } from 'antd'
import { apiGetWeather } from '@/api'

const WeatherContent = (props) => {
  let { ganmao, forecast } = props.weather
  return (
    <Card title={ganmao} >
      <List
        size="small"
        bordered
        dataSource={forecast}
        renderItem={item => {
          let { date, fengli, fengxiang, high, low, type } = item
          return (
            <List.Item>{date} {type} {high} {low} {fengli} {fengxiang}</List.Item>
          )
        }}
      />
    </Card>
  )
}

class AppLayoutHeaderWeather extends Component {
  state = {
    weather: null
  }
  getWeatherByCity (props) {
    let city = props ? props.city : this.props.city
    if (city) {
      apiGetWeather({ city })
        .then(({ data }) => {
          this.setState({ weather: data.data })
        })
        .catch(e => console.log(e))
    }
  }
  componentDidMount () {
    this.getWeatherByCity()
  }
  shouldComponentUpdate (props, state) {
    if (props.city !== this.props.city) {
      this.getWeatherByCity(props)
    }
    return true
  }
  render() {
    let { weather } = this.state
    if (!weather) return ''

    let { city, ganmao, wendu, forecast } = weather
    let { date, type } = forecast[0]
    return (
      <div className="app-layout__header-weather">
        <Popover trigger="hover"
        content={<WeatherContent weather={{ forecast, ganmao }} />}>
          { city } { wendu }℃ { type } { date } 
        </Popover>      
      </div>
    )
  }
}

export default AppLayoutHeaderWeather
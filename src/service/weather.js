

export const WeatherService = {
  formatWeatherData (data) {
    let { city, ganmao, wendu, forecast } = data
    let { date, type } = forecast[0]
    let title = ` ${ city } ${ wendu }℃ ${ type } ${ date } `
    let list = forecast.map(item => {
      let { date, fengli, fengxiang, high, low, type } = item
      return `${date} ${type} ${high} ${low} ${fengli} ${fengxiang}`
    })
    return { title, list, description: ganmao }
  }
}

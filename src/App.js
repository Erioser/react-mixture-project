import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '@/store'
import AppLayout from './components/AppLayout'
class App extends Component {
  render () {
    return (
      <Provider store = {store}>
        <AppLayout/>
      </Provider>
    )
  }
}
export default App

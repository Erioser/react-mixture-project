import React, { BasicComponent } from '@/service/BasicComponent'
import { Provider } from 'react-redux'
import store from '@/store'
import AppLayout from './components/AppLayout'

class App extends BasicComponent {
  render () {
    return (
      <Provider store = {store}>
        <AppLayout/>
      </Provider>
    )
  }
}
export default App

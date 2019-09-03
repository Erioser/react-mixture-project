import React, { BasicPureComponent } from '@/service/BasicComponent'
import { Provider } from 'react-redux'
import store from '@/store'
import AppLayout from './components/AppLayout'

class App extends BasicPureComponent {
  render () {
    return (
      <Provider store = {store}>
        <AppLayout/>
      </Provider>
    )
  }
}
export default App

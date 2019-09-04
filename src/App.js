import React, { BasicComponent } from '@/service/BasicComponent'
import { Provider } from 'react-redux'
import store from '@/store'
import { HookStoreProvider } from '@/hooks/todolist'
import AppLayout from './components/AppLayout'

class App extends BasicComponent {
  render () {
    return (
      <Provider store = {store}>
        <HookStoreProvider>
          <AppLayout/>
        </HookStoreProvider>
      </Provider>
    )
  }
}
export default App

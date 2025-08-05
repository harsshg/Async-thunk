import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './android/app/src/REDUX/store'
import Form from './Components/Form'

const App = () => {
  return (
    <Provider store={store}>
    <View>
      <Form/>
    </View>
    </Provider>
  )
}

export default App
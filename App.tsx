import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import store from './redux/store';
import Test  from './src/test'
const App = () => {
  // const [open, setOpen] = useState(true);
  return (
    <Provider store={store} >
      <NativeBaseProvider>
        <Test/>
      </NativeBaseProvider>
    </Provider>
    
    
  )
}

export default App
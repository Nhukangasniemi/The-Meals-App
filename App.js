import React, { useState } from 'react';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import MealsNavigator from './navigation/MealsNavigator'
import { useScreens, enableScreens } from 'react-native-screens'
import { createStore, combineReducers} from 'redux'
import mealsReducer from './store/reducers/meals'
import {Provider} from 'react-redux'

useScreens() //React-native-screens making the app renders for better performance in large application

const rootReducer = combineReducers({
  meals: mealsReducer
})
const store = createStore(rootReducer, composeWithDevTools())

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)
  if (!fontLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />
  }

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}


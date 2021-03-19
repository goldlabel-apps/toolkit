import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { appReducer, appSlice } from './app/reducer'
import { p2TReducer, p2TSlice } from '../modules/Push2Talk/redux/reducer'

const reduxStore = () => {
  const reducer = combineReducers({
    app: appReducer,
    p2T: p2TReducer,
  })

  const preloadedState = {
    app: appSlice,
    p2T: p2TSlice,
  }
  
  const middleware = [
    ...getDefaultMiddleware({
      serializableCheck: false
    })
  ]
  const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer,
    middleware,
    preloadedState,
    enhancers: []
  })
  return store
}

export default reduxStore
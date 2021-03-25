import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { pingpongReducer, pingpongSlice } from './pingpong/reducer'

const reduxStore = () => {
  const reducer = combineReducers({
    pingpong: pingpongReducer,
  })

  const preloadedState = {
    pingpong: pingpongSlice,
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
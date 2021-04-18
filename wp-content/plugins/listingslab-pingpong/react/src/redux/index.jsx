import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { pingpongReducer, pingpongSlice } from './pingpong/reducer'
import { wordpressReducer, wordpressSlice } from './wordpress/reducer'

const reduxStore = () => {
  const reducer = combineReducers({
    pingpong: pingpongReducer,
    wordpress: wordpressReducer,
  })

  const preloadedState = {
    pingpong: pingpongSlice,
    wordpress: wordpressSlice,
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
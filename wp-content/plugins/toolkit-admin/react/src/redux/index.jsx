import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { appReducer, appSlice } from './app/reducer'
import { visitorsReducer, visitorsSlice } from './visitors/reducer'


const reduxStore = () => {
  const reducer = combineReducers({
    app: appReducer,
    visitors: visitorsReducer,
  })

  const preloadedState = {
    app: appSlice,
    visitors: visitorsSlice,
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
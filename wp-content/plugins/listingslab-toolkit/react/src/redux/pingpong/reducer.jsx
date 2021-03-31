import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  tings,
  subscribedTings,
  subscribingTings,
  showId,
  showHost,
  showBrowser,
} from "./actions"

export const pingpongSlice = {
  error: null,
  tings: [],
  subscribedTings: false,
  subscribingTings: false,
  showId: false,
  showHost: true,
  showBrowser: true,
}

const pingpongReducer = createReducer(pingpongSlice, {

  [showBrowser]: (state, action) => {
    state.showBrowser = action.showBrowser
    return state
  },

  [showId]: (state, action) => {
    state.showId = action.showId
    return state
  },
  
  [showHost]: (state, action) => {
    state.showHost = action.showHost
    return state
  },
  
  [subscribedTings]: (state, action) => {
    state.subscribedTings = action.subscribedTings
    return state
  },

  [subscribingTings]: (state, action) => {
    state.subscribingTings = action.subscribingTings
    return state
  },

  [tings]: (state, action) => {
    state.tings = action.tings
    return state
  },

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { pingpongReducer }
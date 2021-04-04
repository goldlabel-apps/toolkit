import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  tings,
  subscribedTings,
  subscribingTings,
  showId,
  showHost,
  showBrowser,
  tingId,
  showCountryName,
  showMode,
} from "./actions"

export const pingpongSlice = {
  error: null,
  tings: [],
  subscribedTings: false,
  subscribingTings: false,
  showId: true,
  showHost: true,
  showBrowser: true,
  showCountryName: true,
  tingId: false,
  showMode: `location`,
}

const pingpongReducer = createReducer(pingpongSlice, {

  [showMode]: (state, action) => {
    state.showMode = action.showMode
    return state
  },
  
  [showCountryName]: (state, action) => {
    state.showCountryName = action.showCountryName
    return state
  },

  [tingId]: (state, action) => {
    state.tingId = action.tingId
    return state
  },

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
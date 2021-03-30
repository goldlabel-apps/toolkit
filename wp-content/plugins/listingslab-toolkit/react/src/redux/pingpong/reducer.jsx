import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  tings,
  subscribedTings,
  subscribingTings,
} from "./actions"

export const pingpongSlice = {
  error: null,
  tings: [],
  subscribedTings: false,
  subscribingTings: false,
}

const pingpongReducer = createReducer(pingpongSlice, {

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
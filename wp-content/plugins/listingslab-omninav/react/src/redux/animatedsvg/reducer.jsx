import pJSON from '../../../package.json'
import { createReducer } from '@reduxjs/toolkit'
import {
  error,
} from "./actions"

export const animatedsvgSlice = {
  pJSON,
  error: null,
}

const animatedsvgReducer = createReducer( animatedsvgSlice, {

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { animatedsvgReducer }
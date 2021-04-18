import { createReducer } from '@reduxjs/toolkit'
import { getEnvironment } from './getEnvironment'
import {
  error,
} from "./actions"

export const wordpressSlice = {
  error: null,
  environment: getEnvironment(),
}

const wordpressReducer = createReducer( wordpressSlice, {

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { wordpressReducer }

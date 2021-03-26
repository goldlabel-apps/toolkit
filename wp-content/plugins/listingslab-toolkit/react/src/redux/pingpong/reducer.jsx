import { createReducer } from '@reduxjs/toolkit'
import {
  error,
} from "./actions"

export const pingpongSlice = {
  error: null,
}

const pingpongReducer = createReducer( pingpongSlice, {

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { pingpongReducer }

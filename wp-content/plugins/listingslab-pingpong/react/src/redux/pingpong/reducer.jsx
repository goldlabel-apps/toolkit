import pJSON from '../../../package.json'
import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  feedback,
  feedbackObj,
  dialog,
  overlay,
  ting,
  initted,
  initting,
  id,
  newMessage,
  gdprDone,
} from "./actions"

export const pingpongSlice = {
  pJSON,
  dialog: true,
  ting: {},
  gdprDone: false,
  id: null,
  overlay: false,
  feedback: false,
  feedbackObj: null,
  connectedAPI: false,
  connectingAPI: false,
  connectAPIDone: false,
  initted: false,
  initting: false,
  newMessage:{
    valid: false,
    message: ``,
  },
  error: null,
}

const pingpongReducer = createReducer(pingpongSlice, {

  [gdprDone]: (state, action) => {
    state.gdprDone = action.gdprDone
    return state
  },

  [newMessage]: (state, action) => {
    state.newMessage = action.newMessage
    return state
  },

  [id]: (state, action) => {
    state.id = action.id
    return state
  },

  [initting]: (state, action) => {
    state.initting = action.initting
    return state
  },
  
  [initted]: (state, action) => {
    state.initted = action.initted
    return state
  },

  [ting]: (state, action) => {
    state.ting = action.ting
    return state
  },

  [overlay]: (state, action) => {
    state.overlay = action.overlay
    return state
  },

  [dialog]: (state, action) => {
    state.dialog = action.dialog
    return state
  },

  [feedbackObj]: (state, action) => {
    state.feedbackObj = action.feedbackObj
    return state
  },

  [feedback]: (state, action) => {
    state.feedback = action.feedback
    return state
  },

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { pingpongReducer }

import pJSON from '../../../package.json'
import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  feedback,
  feedbackObj,
  dialog,
  dialogWordpress,
  overlay,
  ting,
  initted,
  initting,
  id,
  newMessage,
  gdprDone,
  messagePayload,
  messageSending,
} from "./actions"

export const pingpongSlice = {
  pJSON,
  dialog: true,
  dialogWordpress: false,
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
    message: `Here is a new message`,
  },
  messagePayload: null,
  messageSending: false,
  error: null,
}

const pingpongReducer = createReducer(pingpongSlice, {

  [messageSending]: (state, action) => {
    state.messageSending = action.messageSending
    return state
  },

  [messagePayload]: (state, action) => {
    state.messagePayload = action.messagePayload
    return state
  },

  [dialogWordpress]: (state, action) => {
    state.dialogWordpress = action.dialogWordpress
    return state
  },

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

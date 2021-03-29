import pJSON from '../../../package.json'
import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  feedback,
  feedbackObj,
  dialog,
  overlay,
  connectedAPI,
  connectingAPI,
  connectAPIDone,
  gdpr,
  visitor,
} from "./actions"

export const pingpongSlice = {
  pJSON,
  error: null,
  siteAvatar: `https://listingslab.com/wp-content/uploads/2021/03/cropped-logo192-1.png`,
  visitor: {},
  gdpr: false,
  dialog: true,
  overlay: false,
  feedback: false,
  feedbackObj: null,
  connectedAPI: false,
  connectingAPI: false,
  connectAPIDone: false,
}

const pingpongReducer = createReducer(pingpongSlice, {

  [visitor]: (state, action) => {
    state.visitor = action.visitor
    return state
  },
  
  [gdpr]: (state, action) => {
    state.gdpr = action.gdpr
    return state
  },
  
  [connectAPIDone]: (state, action) => {
    state.connectAPIDone = action.connectAPIDone
    return state
  },

  [connectingAPI]: (state, action) => {
    state.connectingAPI = action.connectingAPI
    return state
  },

  [connectedAPI]: (state, action) => {
    state.connectedAPI = action.connectedAPI
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
import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  feedbackShow,
  asynching,
  feedback,
  ipgeoFetched,
  ipgeo,
  visitor,
  visitorId,
  connected,
  onConnected,
  sourceOfTruth,
  pathname,
  pageTitle,
} from "./actions"

export const p2TSlice = {
  error: null,
  visitor: {},
  sourceOfTruth: null,
  pathname: null,
  pageTitle: null,
  visitorId: null,
  asynching: false,
  connected: false,
  onConnected: false,
  ipgeoFetched: false,
  ipgeo: null,
  feedbackShow: false,
  feedback: {
    status: `success`,
    message: `Feedback Successful`
  },
}

const p2TReducer = createReducer(p2TSlice, {

  [pageTitle]: (state, action) => {
    state.pageTitle = action.pageTitle
    return state
  },

  [pathname]: (state, action) => {
    state.pathname = action.pathname
    return state
  },
  
  [onConnected]: (state, action) => {
    state.onConnected = action.onConnected
    return state
  },

  [sourceOfTruth]: (state, action) => {
    state.sourceOfTruth = action.sourceOfTruth
    return state
  },

  [visitorId]: (state, action) => {
    state.visitorId = action.visitorId
    return state
  },
  
  [connected]: (state, action) => {
    state.connected = action.connected
    return state
  },
  
  [visitor]: (state, action) => {
    state.visitor = action.visitor
    return state
  },

  [ipgeo]: (state, action) => {
    state.ipgeo = action.ipgeo
    return state
  },
  
  [ipgeoFetched]: (state, action) => {
    state.ipgeoFetched = action.ipgeoFetched
    return state
  },
  
  [feedback]: (state, action) => {
    state.feedback = action.feedback
    return state
  },
  
  [asynching]: (state, action) => {
    state.asynching = action.asynching
    return state
  },

  [feedbackShow]: (state, action) => {
    state.feedbackShow = action.feedbackShow
    return state
  },

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { p2TReducer }

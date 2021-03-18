
import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  visitorOpen,
  selectedId,
  subscribing,
  subscribed,
  visitors,
  sites,
  siteFilter,
} from "./actions"

export const visitorsSlice = {
  error: null,
  visitorOpen: false,
  selectedId: null,
  hostname: window.location.hostname,
  subscribing: false,
  subscribed: false,
  visitors: [],
  sites: [],
  siteFilter: window.location.hostname,
  // siteFilter: process.env.REACT_APP_ENV === `PROD` ? window.location.hostname : `all`,
}

const visitorsReducer = createReducer(visitorsSlice, {

  [siteFilter]: (state, action) => {
    state.siteFilter = action.siteFilter
    return state
  },

  [selectedId]: (state, action) => {
    state.selectedId = action.selectedId
    return state
  },

  [subscribing]: (state, action) => {
    state.subscribing = action.subscribing
    return state
  },
  
  [subscribed]: (state, action) => {
    state.subscribed = action.subscribed
    return state
  },

  [sites]: (state, action) => {
    state.sites = action.sites
    return state
  },

  [visitors]: (state, action) => {
    state.visitors = action.visitors
    return state
  },

  [visitorOpen]: (state, action) => {
    state.visitorOpen = action.visitorOpen
    return state
  },

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { visitorsReducer }
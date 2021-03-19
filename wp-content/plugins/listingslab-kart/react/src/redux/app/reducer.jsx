import pJSON from '../../../package.json'
import { createReducer } from '@reduxjs/toolkit'
import { 
  getUrlParams, 
} from '../../lib'
import {
  error,
  fetching,
  locale,
  overlay,
  debugga,
  kart,
  strength,
} from "./actions"
import { exmplePostObj } from './exmplePostObj'

let affiliateId = ``
if ( window.pluginInfo  ){
  affiliateId = window.pluginInfo.advicator_affiliateId
}

export const appSlice = {
  debugga: false,
  pJSON,
  error: null,
  affiliateId,
  postObj: exmplePostObj,
  kart: false,
  locale: `en`,
  fetching: false,
  overlay: false,
  strength: 2,
  urlParams: getUrlParams(),
}

const appReducer = createReducer(appSlice, {

  [strength]: (state, action) => {
    state.strength = action.strength
    return state
  },
  
  [kart]: (state, action) => {
    state.kart = action.kart
    return state
  },

  [debugga]: (state, action) => {
    state.debugga = action.debugga
    return state
  },

  [overlay]: (state, action) => {
    state.overlay = action.overlay
    return state
  },
  
  [locale]: (state, action) => {
    state.userLocale = action.userLocale
    return state
  },

  [fetching]: (state, action) => {
    state.fetching = action.fetching
    return state
  },

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { appReducer }
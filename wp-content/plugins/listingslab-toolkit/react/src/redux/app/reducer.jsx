import pJSON from '../../../package.json'
import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  appMenuOpen,
  fullScreen,
  themeMode,
} from "./actions"

const toolkitData = {
    "name": "Listingslab",
    "description": "ToolKit for WordPress",
    "wpurl": "http://localhost:8888",
    "url": "http://localhost:8888",
    "admin_email": "listingslab@gmail.com",
    "charset": "UTF-8",
    "version": "5.7",
    "html_type": "text/html",
    "language": "en-US",
    "pingpong_active": false,
    "pwaify_active": false,
    "kart_active": false
}   

export const appSlice = {
  pJSON,
  error: null,
  fullScreen: false,
  appMenuOpen: false,
  themeMode: `light`,
  toolkitData,
}

const appReducer = createReducer(appSlice, {

  [themeMode]: (state, action) => {
    state.themeMode = action.themeMode
    return state
  },

  [fullScreen]: (state, action) => {
    state.fullScreen = action.fullScreen
    return state
  },

  [appMenuOpen]: (state, action) => {
    state.appMenuOpen = action.appMenuOpen
    return state
  },

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { appReducer }
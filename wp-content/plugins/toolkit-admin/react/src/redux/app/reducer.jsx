import pJSON from '../../../package.json'
import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  appMenuOpen,
  fullScreen,
  themeMode,
} from "./actions"

const devWpBloginfo = {
  name: `@ToolKit`,
  description: `Full React/WordPress`,
  wpurl: `https://listingslab.com/`,
  admin_email: `listingslab@gmail.com`,
  icon: `https://listingslab.com/wp-content/uploads/2021/03/cropped-cropped-ListingslabIconGreen.png`,
}

export const appSlice = {
  pJSON,
  error: null,
  fullScreen: false,
  appMenuOpen: false,
  themeMode: `light`,
  wpBloginfo: devWpBloginfo,
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
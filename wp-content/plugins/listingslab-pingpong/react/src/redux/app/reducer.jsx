import pJSON from '../../../package.json'
import { createReducer } from '@reduxjs/toolkit'
import { 
  getCustomisedTheme,
  getUrlParams, 
} from '../../lib'
import {
  error,
  appMenuOpen,
  fullScreen,
  themeMode,
  GDPROpen,
  fetching,
  userLocale,
  showWordpressSearch,
  showWordpressAdminLinks,
  title,
  showVisitor,
  overlay,
} from "./actions"

let mode = `default`
let isWordPress = false
let isLive = false
if ( window.wpBloginfo ) isWordPress = true
if ( window.location.origin === `https://cannastore.app`) {
  mode = `cannastore`
  isLive = true
}

const devWpBloginfo = {
  name: `DEV`,
  description: `Local Dev Server`,
  wpurl: `http://localhost:8888/`,
  admin_email: `listingslab@me.com`,
}

export const appSlice = {
  pJSON,
  error: null,
  title: `Welcome`,
  userLocale: `en`,
  fetching: false,
  overlay: false,
  showWordpressAdminLinks: false,
  mode,
  adminBarShowing: window.adminBarShowing ? window.adminBarShowing : false,
  fullScreen: false,
  appMenuOpen: false,
  themeMode: `light`,
  GDPROpen: false,
  showVisitor: false,
  wpBloginfo: window.wpBloginfo ? window.wpBloginfo : devWpBloginfo,
  logo: window.logo ? window.logo : `/logo192.png`,
  customisedTheme: getCustomisedTheme(),
  isWordPress,
  isLive,
  showWordpressSearch: false,
  urlParams: getUrlParams(),
}

const appReducer = createReducer(appSlice, {

  [overlay]: (state, action) => {
    state.overlay = action.overlay
    return state
  },

  [showVisitor]: (state, action) => {
    state.showVisitor = action.showVisitor
    return state
  },

  [showWordpressAdminLinks]: (state, action) => {
    state.showWordpressAdminLinks = action.showWordpressAdminLinks
    return state
  },
  
  [title]: (state, action) => {
    state.title = action.title
    return state
  },

  [showWordpressSearch]: (state, action) => {
    state.showWordpressSearch = action.showWordpressSearch
    return state
  },
  
  [userLocale]: (state, action) => {
    state.userLocale = action.userLocale
    return state
  },

  [fetching]: (state, action) => {
    state.fetching = action.fetching
    return state
  },
  
  [GDPROpen]: (state, action) => {
    state.GDPROpen = action.GDPROpen
    return state
  },

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
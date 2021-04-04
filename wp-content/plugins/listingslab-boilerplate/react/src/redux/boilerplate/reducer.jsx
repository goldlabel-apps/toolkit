import pJSON from '../../../package.json'
import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  feedback,
  feedbackObj,
  dialog,
  overlay,
  visitor,
  initted,
  initting,
  id,
} from "./actions"

export const boilerplateSlice = {
  pJSON,
  error: null,
  dialog: false,
  id: null,
  visitor: {},
  gdprMessage: {
    avatar: `https://listingslab.com/wp-content/uploads/2021/03/cropped-logo192-1.png`,
    from: `Listingslab`,
    subject: `GDPR Privacy Policy`,
    message: `A GDPR Privacy Policy is an important part of moving towards GDPR compliance. 
    This document is an informative, detailed and concise Privacy Policy that informs 
    users of the rights they have under the GDPR. If your business has a presence in the 
    EU, provides goods or services in the EU, or tracks users and behaviours in the EU 
    then it is likely you will require a Privacy Policy that is GDPR compliant. `,
  },
  overlay: false,
  feedback: false,
  feedbackObj: null,
  connectedAPI: false,
  connectingAPI: false,
  connectAPIDone: false,
  initted: false,
  initting: false,
}

const boilerplateReducer = createReducer( boilerplateSlice, {

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

  [visitor]: (state, action) => {
    state.visitor = action.visitor
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

export { boilerplateReducer }
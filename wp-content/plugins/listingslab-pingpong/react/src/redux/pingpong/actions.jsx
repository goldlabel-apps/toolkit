import { createAction } from '@reduxjs/toolkit'
import { getStore } from '../../'

export const error = createAction(`PINGPONG/ERROR`)
export const feedback = createAction(`PINGPONG/FEEDBACK`)
export const feedbackObj = createAction(`PINGPONG/FEEDBACK/OBJ`)
export const dialog = createAction(`PINGPONG/DIALOG`)

export const toggleDialog = bool => {
	const store = getStore()
	store.dispatch({type: `PINGPONG/DIALOG`, dialog: bool })
	return true
}

export const throwError = error => {
	const store = getStore()
	store.dispatch({type: `PINGPONG/ERROR`, error })
	return true
}

export const setFeedback = feedbackObj => {
	const store = getStore()
	store.dispatch({type: `PINGPONG/FEEDBACK/OBJ`, feedbackObj })
	return true
}

export const toggleFeedback = bool => {
	const store = getStore()
	store.dispatch({type: `PINGPONG/FEEDBACK`, feedback: bool })
	return true
}

import { createAction } from '@reduxjs/toolkit'
import { 
	getStore,
} from '../../'

export const error = createAction(`ANIMATEDSVG/ERROR`) 

export const throwError = error => {
	const store = getStore()
	store.dispatch({type: `ANIMATEDSVG/ERROR`, error })
	return true
}

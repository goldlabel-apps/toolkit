import { createAction } from '@reduxjs/toolkit'
import { 
	getStore,
} from '../../'

export const error = createAction(`WORDPRESS/ERROR`) 

export const throwError = error => {
	const store = getStore()
	store.dispatch({type: `WORDPRESS/ERROR`, error })
	return true
}

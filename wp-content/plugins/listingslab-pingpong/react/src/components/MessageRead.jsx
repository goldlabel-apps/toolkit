import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    CardContent,
} from '@material-ui/core/'
import { 
	MessageGDPR,
} from  './'

const useStyles = makeStyles( theme => ({
	messageRead: {
	},
}))

export default function MessageRead( props ) {
	
	const classes = useStyles() 

	const pingpongSlice = useSelector(state => state.pingpong)
    const {
      gdpr,
    } = pingpongSlice

    // console.log ( 'gdpr', gdpr )
    
	return	<div className={clsx( classes.messageRead )}>
				<CardContent>
					{ !gdpr ? <MessageGDPR /> : null }
				</CardContent>
			</div>
}

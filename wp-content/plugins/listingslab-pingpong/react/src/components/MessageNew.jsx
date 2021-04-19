import React from 'react'
import { useSelector } from 'react-redux' 
import {
	updateNewMessage,
	sendNewMessage,
} from '../redux/pingpong/actions'
import clsx from 'clsx' 
import {
    makeStyles,
    Button,
    // LinearProgress,
} from '@material-ui/core/' 
import { TextBox } from './'
import { 
	Icon,
} from '../theme'

const useStyles = makeStyles( theme => ({
	messageBox: {
	},
	card:{
		width: '100%',
		paddingTop: theme.spacing(),
	},
	btnTxt:{
		marginRight: theme.spacing(),
		marginLeft: theme.spacing(),
		textTransform: 'none',
	},
	grow:{
		flexGrow: 1,
	},
	sendBtn: {
		marginTop: theme.spacing(),
	},
}))

export default function MessageNew( props ) {
	
	const classes = useStyles()
	const pingpongSlice = useSelector(state => state.pingpong)
    const {
     	newMessage,
     	messagePayload,
     	messageSending,
    } = pingpongSlice

	return	<div className={clsx( classes.card )}>
	
									
					{ !messageSending ? <React.Fragment>
						<TextBox options={{
							id: `newMessage`,
							label: `New Message`,
							autoFocus: true,
							variant: `outlined`,
							color: `primary`,
							rows: 4,
							value: newMessage.message,
							onChange: (e) => {
								updateNewMessage( e.target.value )
							}
						}}/>
						<Button
							className={clsx( classes.sendBtn )}
							fullWidth
							variant={ `contained` }
							color={ `primary` }
							onClick={ ( e ) => {
								e.preventDefault()
								sendNewMessage()
							}}>
							<span className={clsx( classes.btnTxt )}>
								Send
							</span>
							<Icon icon={ `send` } />
						</Button>
					</React.Fragment> : null }
					
					
					<pre>
						{ JSON.stringify( messagePayload, null, 2 ) } 
					</pre>
				
			</div>
}

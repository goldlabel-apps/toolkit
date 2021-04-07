import React from 'react'
import { useSelector } from 'react-redux' 
import {
	updateNewMessage
} from '../redux/pingpong/actions'
import { 
  getTingGeoStr,
  getTingDeviceStr,
  getTingFlag,

} from '../lib/ting'
import clsx from 'clsx' 
import {
    makeStyles,
    Avatar,
    Button,
    Card,
    CardHeader,
    CardContent,
    CardActions,
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
		background: 'none',
    	boxShadow: 'none',
    	border: 'none',
	},
	btnTxt:{
		marginRight: theme.spacing(),
		marginLeft: theme.spacing(),
	},
	grow:{
		flexGrow: 1,
	},
}))

export default function MessageNew( props ) {
	
	const classes = useStyles()
	const pingpongSlice = useSelector(state => state.pingpong)
    const {
     	ting,
     	newMessage,
    } = pingpongSlice

	return	<Card className={clsx( classes.card )}>
				
				<CardContent>
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
				</CardContent>
				<CardActions>

					<CardHeader 
						className={clsx( classes.grow )}
						title={ `${ getTingDeviceStr( ting ) }`}
						subheader={ `${ getTingGeoStr( ting ) }`}
						avatar={ <Avatar src={ getTingFlag( ting ) }/> }
						action={ <Button
							variant={ `outlined` }
							color={ `primary` }
							onClick={ ( e ) => {
								e.preventDefault()
								console.log ('Send')
							}}>
							<span className={clsx( classes.btnTxt )}>
								Send
							</span>
							<Icon icon={ `message` } />
						</Button> } />

				</CardActions>
			</Card>
}

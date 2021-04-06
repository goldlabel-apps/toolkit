import React from 'react'
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

export default function MessageSend( props ) {
	
	const classes = useStyles()

	return	<Card className={clsx( classes.card )}>
				<CardHeader 
					title={ `New Message` }
					subheader={ `from...`}
					avatar={ <Avatar src={ `https://listingslab.com/wp-content/uploads/2021/04/anon-avatar.png` }/> }
				/>
				<CardContent>
					<TextBox options={{
						autoFocus: true,
						variant: `standard`,
						id: `newMessage`,
					}}/>					
				</CardContent>
				<CardActions>
					<div className={clsx( classes.grow )} />
					<Button
						variant={ `contained` }
						color={ `primary` }
						onClick={ ( e ) => {
							e.preventDefault()
							console.log ('Send')
						}}>
						<span className={clsx( classes.btnTxt )}>
							Send
						</span>
						<Icon icon={ `message` } />
					</Button>
				</CardActions>
			</Card>
}

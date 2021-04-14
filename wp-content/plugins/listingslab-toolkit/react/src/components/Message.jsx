import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    ButtonBase,
    Avatar,
    Card,
    CardHeader,
    CardContent,
    Badge,
    Typography,
} from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
	card: {
		background: 'none',
	    boxRadius: 'none',
	    boxShadow: 'none',
	    border: 'none',
	},
	messageBtn:{
		width: '100%',
		display: 'block',
		textAlign: 'left',
	},
}))

export default function Message( props ) {
	
	const classes = useStyles() 
	const { message } = props
	let badge = 1
	const appSlice = useSelector(state => state.app)
	const {
		environment,
	} = appSlice
	const {
		name,
		avatar,
	} = environment
	const {
		read,
		subject,
		body,
	} = message

	if ( read ) badge = null

	return	<ButtonBase 
				color={ `primary` }
				className={ clsx( classes.messageBtn ) } 
				onClick={ (e) => {
					e.preventDefault()
				}}>
				<Card className={ clsx( classes.card ) } >
					<CardHeader 
						title={ `from ${ name }` }
						subheader={ subject }
						avatar={<Badge 
									color={ `secondary` }
									badgeContent={ badge } >
									<Avatar src={ avatar }/>
								</Badge>}
					/>
					<CardContent>
						<Typography variant={ `body2` }>
							{ body }
						</Typography>
					</CardContent>
				</Card>
			</ButtonBase>
}


/*
<pre>
	{ JSON.stringify( ting, null, 2 ) }
</pre>
*/
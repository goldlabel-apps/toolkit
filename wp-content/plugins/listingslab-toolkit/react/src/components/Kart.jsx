import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Card,
    CardHeader,
    Avatar,
} from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
	card:{
		margin: theme.spacing(),
		// minHeight: 325,
	},
	btnTxt: {
		marginRight: theme.spacing(),
		marginLeft: theme.spacing(),
	},
}))

export default function PingPong( props ) {
	
	const classes = useStyles()
	const appSlice = useSelector(state => state.app)
    const {
      wpBloginfo,
    } = appSlice
    const {
      icon,
    } = wpBloginfo

	return	<Card className={ clsx( classes.card ) }>
				<CardHeader 
					title={ `@Kart` }
					// subheader={ `Advicator Plugin` }
					avatar={ <Avatar src={ icon } /> }
					/>

				
			</Card>
}


/*
action={ <React.Fragment>
								<IconButton
									color={ `secondary` }
									onClick={ () => {} }>
									<Icon icon={ `close` } />
								</IconButton>
							</React.Fragment> }
*/
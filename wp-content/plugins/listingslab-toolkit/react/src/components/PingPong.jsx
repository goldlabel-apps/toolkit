import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Card,
    CardHeader,
    Avatar,
} from '@material-ui/core/'
// import  { Icon } from '../theme'
// import { SwitchesGroup } from './'

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
      toolkitData,
    } = appSlice
    const {
      icon,
    } = toolkitData

	return	<Card className={ clsx( classes.card ) }>
				<CardHeader 
					title={ `@PingPong` }
					// subheader={ `Advicator Plugin` }
					avatar={ <Avatar src={ icon } /> }
				/>

				
			</Card>
}


/*

<CardContent>
					<Typography variant={ `body1` } gutterBottom>
						Enable?
					</Typography>
				</CardContent>


action={ <React.Fragment>
								<IconButton
									color={ `secondary` }
									onClick={ () => {} }>
									<Icon icon={ `close` } />
								</IconButton>
							</React.Fragment> }
*/
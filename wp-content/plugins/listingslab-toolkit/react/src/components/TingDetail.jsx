import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Button,
    Avatar,
    Card,
    CardHeader,
    CardActions,
} from '@material-ui/core/'
import {
	selectTing,
	getTingFromId,
	deleteTing,
} from '../redux/pingpong/actions'
import {
	getFlagByCountryCode,
	getTingDeviceStr,
	getTingPage,
} from '../lib'

import { Icon } from '../theme'

const useStyles = makeStyles(theme => ({
	card: {
		background: 'none',
	    boxRadius: 'none',
	    boxShadow: 'none',
	    border: 'none',
	},
	btnTxt: {
		marginRight: theme.spacing(),
		marginLeft: theme.spacing(),
		textTransform: 'none',
	},
	returnBtn:{
		cursor: 'pointer',
	}
}))

export default function TingDetail( props ) {
	const classes = useStyles()
	const pingpongSlice = useSelector(state => state.pingpong)
	const {
		tingId
	} = pingpongSlice
	const ting = getTingFromId( tingId )
	const {
		countryCode2,
	} = ting
	return	<Card className={ clsx( classes.card ) }>
				<CardHeader 
				 	className={ clsx( classes.returnBtn ) }
					onClick={ (e) => {
						e.preventDefault()
						selectTing ( false )
					}}
					title={ getTingDeviceStr( ting ) }
					subheader={ getTingPage( ting ) }
					avatar={ <Avatar src={ getFlagByCountryCode( countryCode2 ) } /> }
				/>

				<CardActions>
					<React.Fragment>

						<Button
							onClick={ (e) => {
								e.preventDefault()
								selectTing ( false )
							}}>
							
							<Icon icon={ `left` } color={ `primary` } />
							<span className={ clsx( classes.btnTxt ) }>
								Back
							</span>
						</Button>

						<Button
							variant={ `outlined` }
							onClick={ (e) => {
								e.preventDefault()
								if ( window.confirm('really really?') ){
									deleteTing ( tingId )
								}
								
							}}>
							<Icon icon={ `delete` } color={ `primary` } />
							<span className={ clsx( classes.btnTxt ) }>
								Delete
							</span>
							
						</Button>


					</React.Fragment>
				</CardActions>
					
			</Card>
}

/*
<pre>
		            	ting { JSON.stringify( ting, null, 2 ) }
		          	</pre>
*/
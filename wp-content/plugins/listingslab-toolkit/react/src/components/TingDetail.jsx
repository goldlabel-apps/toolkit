import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
	selectTing,
	getTingFromId,
} from '../redux/pingpong/actions'
import {
    makeStyles,
    Button,
    Card,
    CardHeader,
    CardContent,
    CardActions,
} from '@material-ui/core/'
// import { Icon } from '../theme'

const useStyles = makeStyles(theme => ({
	card: {
		margin: theme.spacing(),
	},
}))

export default function TingDetail( props ) {
	
	const classes = useStyles()
	const pingpongSlice = useSelector(state => state.pingpong)
	const {
		tingId
	} = pingpongSlice

	const ting = getTingFromId( tingId )

	return	<Card className={ clsx( classes.card ) }>
				<CardHeader 
					title={ `Ting Detail` }
					subheader={ `description` }
					action={<Button
								variant={ `outlined` }
								onClick={ (e) => {
									e.preventDefault()
									selectTing ( false )
								}}>
								Close
							</Button>}
				/>

				<CardContent>
					<pre>
		            	ting { JSON.stringify( ting, null, 2 ) }
		        	</pre>
				</CardContent>

				<CardActions>
					<Button
						variant={ `outlined` }
						onClick={ (e) => {
							e.preventDefault()
							selectTing ( false )
						}}>
						Save & Close
					</Button>

				</CardActions>
				
			</Card>
}


/*
          <pre>
            nothingSelected { JSON.stringify( ting, null, 2 ) }
          </pre>
*/
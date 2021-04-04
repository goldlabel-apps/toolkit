import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
	selectTing,
	getTingFromId,
	deleteTing,
} from '../redux/pingpong/actions'
import {
	getFlagByCountryCode,
	getTingTitle,
	getTingSubheading,
} from '../lib'
import {
    makeStyles,
    IconButton,
    Avatar,
    Card,
    CardHeader,
} from '@material-ui/core/'
import { Icon } from '../theme'

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

	const {
		countryCode2,
	} = ting


	return	<Card className={ clsx( classes.card ) }>
				<CardHeader 
					title={ getTingTitle( ting ) }
					subheader={ getTingSubheading( ting ) }
					avatar={ <Avatar src={ getFlagByCountryCode( countryCode2 ) } /> }
					action={<React.Fragment>

								<IconButton
									variant={ `outlined` }
									onClick={ (e) => {
										e.preventDefault()
										if ( window.confirm('really really?') ){
											deleteTing ( tingId )
										}
										
									}}>
									<Icon icon={ `delete` } color={ `primary` } />
								</IconButton>


								<IconButton
									variant={ `outlined` }
									onClick={ (e) => {
										e.preventDefault()
										selectTing ( false )
									}}>
									<Icon icon={ `close` } color={ `primary` } />
								</IconButton>
							</React.Fragment>}
				/>

				


				
				
			</Card>
}


/*

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

				
          <pre>
            nothingSelected { JSON.stringify( ting, null, 2 ) }
          </pre>
 <CardContent>
					<pre>
		            	ting { JSON.stringify( ting, null, 2 ) }
		        	</pre>
				</CardContent>         
*/
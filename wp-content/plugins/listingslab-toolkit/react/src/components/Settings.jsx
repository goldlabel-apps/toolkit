import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
    Card,
    CardContent,
    CardHeader,
    IconButton,
    Typography,
} from '@material-ui/core/'
import  { Icon } from '../theme'
import { SwitchesGroup } from './'

const useStyles = makeStyles(theme => ({
	card:{
		margin: theme.spacing(),
		minHeight: 325,
	},
	btnTxt: {
		marginRight: theme.spacing(),
		marginLeft: theme.spacing(),
	},
}))

export default function Settings( props ) {
	
	const classes = useStyles()


    React.useEffect(() => {
	}, [])


	return	<Card className={ clsx( classes.card ) }>
				<CardHeader 
					title={ `Affiliate Postback` }
					// subheader={ `Advicator Plugin` }
					// avatar={ <Avatar src={ `/svg/locale_flags/cn.svg` } /> }
					action={ <React.Fragment>
								<IconButton
									color={ `secondary` }
									onClick={ () => {} }>
									<Icon icon={ `close` } />
								</IconButton>
							</React.Fragment> }/>

				<CardContent>
					<Typography variant={ `body1` } gutterBottom>
						Other wordpress affiliate plugins typically create a new user role for the affiliates, and allow the user to login to see their sales stats. However unless this is a quick set of features or something you could easily add to the existing WooCommerce reports (which I doubt) you can omit making any reporting system however the requirement for this would be to allow multiple affiliates account (postback URL would be dictated by the visitors landing URL containing source= and the value dictating which affiliate)
					</Typography>

					<SwitchesGroup />
				</CardContent>
			</Card>
}

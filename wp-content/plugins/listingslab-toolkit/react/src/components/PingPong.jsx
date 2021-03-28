import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
    Card,
    CardHeader,
    Typography,
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
	noShadow: {
		boxShadow: 'none',
	},
}))

export default function PingPong( props ) {
	
	const classes = useStyles()

	return	<Card className={ clsx( classes.card, classes.noShadow ) }>
				<CardHeader 
					disableTypography
					title={ <Typography variant={ `h6` }>
                              @PingPong
                            </Typography> }
					subheader={ <Typography  variant={ `body1` }>
                                  Greet your visitors. No need to wait for them to contact you. Handles GDPR issues too
                                </Typography> }
				/>
			</Card>
}

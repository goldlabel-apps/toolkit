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
	title: {
		color: theme.palette.secondary.main,
	}
}))

export default function PingPong( props ) {
	
	const classes = useStyles()

	return	<Card className={ clsx( classes.card, classes.noShadow ) }>
				<CardHeader 
					disableTypography
					title={ <Typography gutterBottom className={ clsx( classes.title ) }>
                              @PingPong
                            </Typography> }
					subheader={ <Typography>
                                  Greet your visitors. No need to wait for them to contact you. Handles GDPR issues too
                                </Typography> }
				/>
			</Card>
}

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
}))

export default function APIKey( props ) {
	
	const classes = useStyles()

	return	<Card className={ clsx( classes.card ) }>
				<CardHeader 
                    disableTypography
                    
                    title={ <Typography variant={ `h6` }>
                              Your API Key
                            </Typography> }
                    subheader={ <Typography  variant={ `body1` }>
                                  Single click signup
                                </Typography> }
                  />
			</Card>
}

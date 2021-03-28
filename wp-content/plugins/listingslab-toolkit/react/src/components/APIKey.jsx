import React from 'react'
// import { useSelector } from 'react-redux'
import clsx from 'clsx'
import {
    makeStyles,
    Card,
} from '@material-ui/core/'
import { Footer } from './'

const useStyles = makeStyles(theme => ({ 
	card:{
		margin: theme.spacing(),
		// minHeight: 325,
	},
	noShadow: {
		boxShadow: 'none',
	},
}))

export default function APIKey( props ) {
	
	const classes = useStyles() 
	// const appSlice = useSelector(state => state.app)
	// const {
 //      // apiKey,
 //      fingerprint,
 //    } = appSlice

	return	<Card className={ clsx( classes.card, classes.noShadow ) }>
				<Footer />
			</Card>
}

/*
				<CardHeader 
                    disableTypography
                    
                    title={ <Typography variant={ `h6` }>
                              API Key
                            </Typography> }
                    subheader={ <Typography  variant={ `body1` }>
                                  { apiKey }
                                </Typography> }
                  />
*/
import React from 'react'
// import { useSelector } from 'react-redux'
import clsx from 'clsx'
import {
    makeStyles,
    Card,
} from '@material-ui/core/'
import { Footer } from './'

const useStyles = makeStyles(theme => ({ 
	plainAccordion:{
		boxShadow: 'none',
	},
	grow: {
		flexGrow: 1,
	},
	dialogTitleIcon: {
		marginTop: theme.spacing( 0.5 ),
		marginRight: theme.spacing( 2 ),
	},
	root: {
    	width: '100%',
	},
	heading: {
		marginTop: theme.spacing( 0.5 ),
	    fontSize: theme.typography.pxToRem( 15 ),
	    fontWeight: theme.typography.fontWeightRegular,
	},
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
	// const appSlice = useSelector(state => state.app)
	// const {
 //      // apiKey,
 //      fingerprint,
 //    } = appSlice

	return	<Card className={ clsx( classes.card ) }>
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
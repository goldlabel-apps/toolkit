import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Card,
    CardHeader,
    //Avatar,
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
	const appSlice = useSelector(state => state.app)
    const {
      toolkitData,
    } = appSlice
    const {
      wpurl,

    } = toolkitData

	return	<Card className={ clsx( classes.card ) }>
				<CardHeader 
                    disableTypography
                    
                    title={ <Typography variant={ `h6` }>
                              APIKey
                            </Typography> }
                    subheader={ <Typography  variant={ `body1` }>
                                  { wpurl }
                                </Typography> }
                  />
			</Card>
}


/*
avatar={ <Avatar src={ avatar } /> }
action={ <React.Fragment>
								<IconButton
									color={ `secondary` }
									onClick={ () => {} }>
									<Icon icon={ `close` } />
								</IconButton>
							</React.Fragment> }
*/
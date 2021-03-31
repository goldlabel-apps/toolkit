import React from 'react'
import { useSelector } from 'react-redux'
import {
	subscribeTings,
} from '../redux/pingpong/actions'
import clsx from 'clsx'
import {
    makeStyles,
    Card,
    CardHeader,
    CardContent,
    Typography,
} from '@material-ui/core/'
import {
	TingPanel,
	TingFilters,
} from './'

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
		color: theme.palette.primary.main,
	}
}))

export default function PingPong( props ) {
	
	const classes = useStyles()

	const pingpongSlice = useSelector(state => state.pingpong)
	const {
		// error,
		tings,
	} = pingpongSlice

	React.useEffect(() => {
        const {
          subscribedTings,
          subscribingTings,
        } = pingpongSlice 
        if ( !subscribedTings && !subscribingTings ) subscribeTings()
    }, [pingpongSlice])

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
				<TingFilters />
					
					{ tings.map ((item, i) => {
						return 	<TingPanel ting={ item } key={ `ting_${i}` }>
									<Typography>
									{ item.fingerprint }
									</Typography>
								</TingPanel>
					}) }

			</Card>
}

/*

				<pre>
					{ JSON.stringify( tings, null, 2 ) }
				</pre>
*/
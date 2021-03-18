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

export default function About( props ) {
	
	const classes = useStyles()


    React.useEffect(() => {
	}, [])


	return	<Card className={ clsx( classes.card ) }>
					
				<CardHeader 
					title={ `About` }
					subheader={ `Advicator Plugin` }
					// avatar={ <Avatar src={ `/svg/locale_flags/cn.svg` } /> }
					action={ <React.Fragment>
								<IconButton
									color={ `secondary` }
									onClick={ () => {} }>
									<Icon icon={ `close` } />
								</IconButton>
							</React.Fragment> }/>
					<CardContent>
						<Typography variant={ `body1` }>
							Sed sodales ex hendrerit dapibus congue. Maecenas sit amet lacinia elit. Sed auctor ut tellus non ullamcorper. 
						</Typography>
					</CardContent>
			</Card>
}

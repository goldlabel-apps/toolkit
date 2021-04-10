import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
    Grid,
} from '@material-ui/core/'
import { Hosts } from './'

const useStyles = makeStyles(theme => ({
	tingFilters:{
		// marginLeft: theme.spacing(),
		// marginRight: theme.spacing(),
	},
	grow: {
		flexGrow: 1,
	},
}))

export default function TingFilters( props ) {
	
	const classes = useStyles() 
	
	return	<div className={ clsx( classes.tingFilters ) } >
				<Grid container>
					<Grid item>
			        	<Hosts />
			        </Grid>
			        <Grid item className={ clsx( classes.grow ) } />  
			    </Grid>	
			</div>
}

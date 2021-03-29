import React from 'react'
import clsx from 'clsx'
import { 
  gotoURL,
} from '../redux/pingpong/actions'
import {
    makeStyles,
    // useTheme,
    Link,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Grid,
    Typography,
} from '@material-ui/core/'
import { 
	Icon,
} from '../theme'

const useStyles = makeStyles( theme => ({
	help: {
		marginBottom: theme.spacing( 1.5 ),
	},
	link: {
		cursor: 'pointer',
	},
	plainAccordion: {
		border: 'none',
		boxShadow: 'none',
	},
	grow: {
		flexGrow: 1,
	},
	dialogTitleIcon: {
		marginTop: theme.spacing( 0.5 ),
		marginRight: theme.spacing( 2 ),
	},
	btnTxt: {
		marginLeft: theme.spacing( 2 ),
		marginRight: theme.spacing( 2 ),
	},
	root: {
    	width: '100%',
	},
	heading: {
		display: 'block',
		marginTop: theme.spacing( 0.45 ),
	},
}))

export default function Help( props ) {
	
	const classes = useStyles()
	// const theme = useTheme()
	// const secondaryColor = theme.palette.secondary.main

	return	<div className={clsx( classes.help )}>
				<Accordion 
					defaultExpanded={ true }
					className={clsx( classes.plainAccordion )}>
					<AccordionSummary
			          expandIcon={ <Icon icon={`panel-toggle`} color={ `primary` }/> }
			          aria-controls={ `Help` }
			          id={ `help` } >
				        <Grid container>
							<Grid item>
								<div className={clsx( classes.dialogTitleIcon )}>
									<Icon icon={ `toolkit` } color={ `inherit` } />
								</div>
							</Grid>
							
						</Grid>
        			</AccordionSummary>
        			<AccordionDetails>
        				<Typography variant={ `body2` }>
							A suite of WordPress Plugins which open up a world of 
							good stuff to any tired old WordPress site. 
							<Link 
								className={clsx( classes.link )}
								onClick={ (e) => {
									e.preventDefault()
									gotoURL(`https://github.com/listingslab-software/toolkit/tree/master/docs`, `_blank`)
								}}
								
								
							>
							Documentation
							</Link> for WordPress 
							Administrators, Developers and DevOps
						</Typography>
					</AccordionDetails>
				</Accordion>
		</div>
}

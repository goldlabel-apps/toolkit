import React from 'react'
import clsx from 'clsx'
// import { 
//   toggleDialog,
// } from '../redux/pingpong/actions'
import {
    makeStyles,
    // useTheme,
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
	// const secondary = theme.palette.secondary.main

	return	<div className={clsx( classes.help )}>
				<Accordion 
					defaultExpanded={ true }
					className={clsx( classes.plainAccordion )}>
					<AccordionSummary
			          expandIcon={ <Icon icon={`panel-toggle`} color={ `primary` }/> }
			          aria-controls={ `Help` }
			          id={ `help` } >
				        <Grid container>
							<Grid item >
								<div className={clsx( classes.dialogTitleIcon )}>
									<Icon icon={ `settings` } color={ `primary` } />
								</div>
							</Grid>
							<Grid item>
								<Typography variant={ `body1` } className={classes.heading}>
									{ `@_ToolKit` }
								</Typography>
							</Grid>
						</Grid>
        			</AccordionSummary>
        			<AccordionDetails>
        				<Typography variant={ `body2` }>
						Modules are a new concept we are playing with. They’re along the lines of components, but bigger. They’re more like whole standalone apps which can be inclued into other apps
						</Typography>
					</AccordionDetails>
				</Accordion>
		</div>
}

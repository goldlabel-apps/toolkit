import React from 'react'
import clsx from 'clsx'
import { 
  toggleDialog,
  gotoURL,
} from '../redux/pingpong/actions'
import {
    makeStyles,
    useTheme,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Grid,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
} from '@material-ui/core/'
import { 
	Icon,
} from '../theme'

const useStyles = makeStyles( theme => ({
	links: {
		marginBottom: theme.spacing( 1.5 ),
	},
	fullWidth:{
		width: '100%',
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
	dialogTitleText:{
		marginTop: theme.spacing( 0.5 ),
	},
	btnTxt: {
		marginLeft: theme.spacing( 2 ),
		marginRight: theme.spacing( 2 ),
	},
	root: {
    	width: '100%',
	},
	heading: {
		marginTop: theme.spacing( 0.45 ),
	},
}))

export default function ToolKit( props ) {
	
	const classes = useStyles()
	const theme = useTheme()
	const secondaryColor = theme.palette.secondary.main

	return	<div className={clsx( classes.links )}>
				<Accordion 
					defaultExpanded={ false }
					className={clsx( classes.plainAccordion )}>
					<AccordionSummary
			          expandIcon={ <Icon icon={`panel-toggle`} color={ `primary` }/> }
			          aria-controls={ `Help` }
			          id={ `help` } >
				        <Grid container>
							<Grid item>
								<Typography className={clsx( classes.dialogTitleText )}>
									Links
								</Typography>
							</Grid>
						</Grid>
        			</AccordionSummary>
        			<AccordionDetails>
	        			<List dense className={clsx( classes.fullWidth )}>
							<ListItem 
								button
								onClick={ e => {
									e.preventDefault()
									gotoURL(`/wp-admin/admin.php?page=listingslab-toolkit%2Fphp%2FToolKit.php`, `_self`)
									toggleDialog( false )
								}}>
								<ListItemIcon>
									<Icon icon={ `wordpress` } color={ secondaryColor } />
								</ListItemIcon>
								<ListItemText 
									primary={ `WordPress Admin` }
									// secondary={ `WordPress Admin Page` }
								/>
							</ListItem>
						</List>
					</AccordionDetails>
				</Accordion>
		</div>
}

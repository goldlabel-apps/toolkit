import React from 'react'
import clsx from 'clsx'
// import { useSelector } from 'react-redux' 
import { 
  toggleDialog,
} from '../redux/pingpong/actions'
import { 
  gotoURL,
} from '../redux/pingpong/actions'
import {
    makeStyles,
    useTheme,
    Link,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Grid,
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

	// const pingpongSlice = useSelector(state => state.pingpong)
 //    const {
 //      gdpr,
 //    } = pingpongSlice

	return	<div className={clsx( classes.help )}>
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
									@_ToolKit
								</Typography>
							</Grid>
						</Grid>
        			</AccordionSummary>
        			<AccordionDetails>
        				<Grid container>
	        				<Grid item xs={ 12 }>
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
							</Grid>
							<Grid item xs={ 12 }>
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
							</Grid>
						</Grid>
					</AccordionDetails>
				</Accordion>
		</div>
}

/*

<Grid item>
								<div className={clsx( classes.dialogTitleIcon )}>
									<Icon icon={ `toolkit` } color={ `inherit` } />
								</div>
							</Grid>

							*/
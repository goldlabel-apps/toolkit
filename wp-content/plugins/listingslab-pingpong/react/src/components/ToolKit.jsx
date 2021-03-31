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
    Button,
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
		// flexGrow: 1,
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
	heading: {
		marginTop: theme.spacing( 0.45 ),
	},
}))

export default function ToolKit( props ) {
	
	const classes = useStyles()
	const theme = useTheme()
	const primaryColor = theme.palette.primary.main
 	const isOpen = false

	return	<div className={clsx( classes.help )}>
				<Accordion 
					defaultExpanded={ isOpen }
					className={ clsx( classes.plainAccordion )} >
					<AccordionSummary
			          expandIcon={ <Icon icon={`panel-toggle`} color={ `primary` }/> }
			          aria-controls={ `Help` }
			          id={ `help` } >
				        <Grid container>
				        	<Grid item>
				        		<Button
				        			variant={ `text` }
				        			color={ `primary` }
				        			onClick={ (e) => {
				        				e.preventDefault()
				        				toggleDialog( false )
				        			}}>
				        			<Icon icon={ `close` } color={ `inherit` } />
				        			<span className={ clsx( classes.btnTxt )}>
				        				Close
				        			</span>
									
								</Button>
				        	</Grid>
							
						</Grid>
        			</AccordionSummary>
        			<AccordionDetails>
        				<Grid container>
	        				<Grid item xs={ 12 }>
		        				<Typography variant={ `body2` }>
									Listingslab @_ToolKit is a suite of WordPress Plugins 
									which open up a world of good stuff to any tired old 
									WordPress site. View the <Link 
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
											<Icon icon={ `wordpress` } color={ primaryColor } />
										</ListItemIcon>
										<ListItemText 
											primary={ `WordPress` }
										/>
									</ListItem>

									<ListItem 
										button
										onClick={ e => {
											e.preventDefault()
											gotoURL(`https://github.com/listingslab-software/toolkit`, `_blank`)
											toggleDialog( false )
										}}>
										<ListItemIcon>
											<Icon icon={ `xml` } color={ `primary` } />
										</ListItemIcon>
										<ListItemText 
											primary={ `GitHub` }
										/>
									</ListItem>
								</List>
							</Grid>
						</Grid>
					</AccordionDetails>
				</Accordion>
		</div>
}

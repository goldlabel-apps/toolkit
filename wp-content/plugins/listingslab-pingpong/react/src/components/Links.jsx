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
	const primaryColor = theme.palette.primary.main

	return	<div className={clsx( classes.links )}>
				<Accordion 
					defaultExpanded={ false }
					className={clsx( classes.plainAccordion )}>
					<AccordionSummary
			          expandIcon={ <Icon icon={`panel-toggle`} color={ `primary` }/> }
			          aria-controls={ `Help` }
			          id={ `help` } >
				        
        			</AccordionSummary>
        			<AccordionDetails>
	        			<List dense className={clsx( classes.fullWidth )}>
							
								<ListItem 
										button
										onClick={ e => {
											e.preventDefault()
											gotoURL(`/wp-admin/`, `_self`)
											toggleDialog( false )
										}}>
										<ListItemIcon>
											<Icon icon={ `wordpress` } color={ primaryColor } />
										</ListItemIcon>
										<ListItemText 
											primary={ `Dashboard` }
										/>
									</ListItem>



									<ListItem 
										button
										onClick={ e => {
											e.preventDefault()
											gotoURL(`/wp-admin/admin.php?page=listingslab-toolkit%2Fphp%2FToolKit.php`, `_self`)
											toggleDialog( false )
										}}>
										<ListItemIcon className={clsx( classes.indented )}>
											<Icon icon={ `wordpress` } color={ primaryColor } />
										</ListItemIcon>
										<ListItemText 
											primary={ `@ToolKit` }
										/>
									</ListItem>

									<ListItem 
										
										button
										onClick={ e => {
											e.preventDefault()
											gotoURL(`/wp-admin/plugins.php`, `_self`)
											toggleDialog( false )
										}}>
										<ListItemIcon className={clsx( classes.indented )}>
											<Icon icon={ `wordpress` } color={ primaryColor } />
										</ListItemIcon>
										<ListItemText 
											primary={ `Plugins` }
										/>
									</ListItem>


									<ListItem 
										button
										onClick={ e => {
											e.preventDefault()
											gotoURL(`/wp-admin/customize.php?return=%2Fwp-admin%2Fadmin.php%3Fpage%3Dlistingslab-toolkit%252Fphp%252FToolKit.php`, `_self`)
											toggleDialog( false )
										}}>
										<ListItemIcon className={clsx( classes.indented )}>
											<Icon icon={ `wordpress` } color={ primaryColor } />
										</ListItemIcon>
										<ListItemText 
											primary={ `Customise` }
										/>
									</ListItem>



									<ListItem 
										
										button
										onClick={ e => {
											e.preventDefault()
											gotoURL(`/wp-admin/post-new.phpNew Post`, `_self`)
											toggleDialog( false )
										}}>
										<ListItemIcon className={clsx( classes.indented )}>
											<Icon icon={ `wordpress` } color={ primaryColor } />
										</ListItemIcon>
										<ListItemText 
											primary={ `New Post` }
										/>
									</ListItem>


						</List>

						<Grid item xs={ 12 }>
								<List dense className={clsx( classes.fullWidth )}> 

									<ListItem 
										button
										onClick={ e => {
											e.preventDefault()
											gotoURL(`https://github.com/listingslab-software/toolkit`, `_blank`)
											toggleDialog( false )
										}}>
										<ListItemIcon>
											<Icon icon={ `github` } color={ primaryColor } />
										</ListItemIcon>
										<ListItemText 
											primary={ `GitHub` }
										/>
									</ListItem>



									<ListItem 
										button
										onClick={ e => {
											e.preventDefault()
											gotoURL(`https://github.com/listingslab-software/toolkit/tree/master/docs`, `_blank`)
											toggleDialog( false )
										}}>
										<ListItemIcon>
											<Icon icon={ `docs` } color={ `primary` } />
										</ListItemIcon>
										<ListItemText 
											primary={ `Docs` }
										/>
									</ListItem>

								</List>
							</Grid>
					</AccordionDetails>
				</Accordion>
		</div>
}

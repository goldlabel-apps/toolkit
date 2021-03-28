import React from 'react'
import clsx from 'clsx'
// import { useSelector } from 'react-redux'
import { 
  toggleDialog,
  gotoURL,
} from '../redux/pingpong/actions'
import {
    makeStyles,
    useTheme,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
} from '@material-ui/core/'
import { 
	Icon,
} from '../theme'

const useStyles = makeStyles( theme => ({
	instructions: {
	},
	plainAccordion:{
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
		marginTop: theme.spacing( 0.5 ),
	    fontSize: theme.typography.pxToRem( 15 ),
	    fontWeight: theme.typography.fontWeightRegular,
	},
}))

export default function Choice( props ) {
	
	const classes = useStyles()
	const theme = useTheme()
	const secondary = theme.palette.secondary.main

	return	<div className={clsx( classes.none )}>
						<List dense>
							
							<ListItem 
								button
								onClick={ e => {
									e.preventDefault()
									gotoURL(`/wp-admin/admin.php?page=listingslab-toolkit%2Fphp%2FToolKit.php`, `_self`)
									toggleDialog( false )
								}}>
								<ListItemIcon>
									<Icon icon={ `wordpress` } color={ secondary } />
								</ListItemIcon>
								<ListItemText 
									primary={ `@_ToolKit Manager` }
									// secondary={ `WordPress Admin Page` }
								/>

								
							</ListItem>
						</List>
					</div>
}

/*
<ListItem 
								button
								onClick={ e => {
									e.preventDefault()
								}}>
								<ListItemIcon>
									<Icon icon={ `message` } color={ `secondary` } />
								</ListItemIcon>
								<ListItemText 
									primary={ `Leave a message` }
									secondary={ `no email required` }
								/>
								
							</ListItem>
*/
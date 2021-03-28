import React from 'react'
import { useSelector } from 'react-redux'
import {
	gotoURL,
} from '../redux/app/actions'
import clsx from 'clsx'
import {
    makeStyles,
    useTheme,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
} from '@material-ui/core/'
import { Icon } from '../theme'
const useStyles = makeStyles(theme => ({
	card:{
		margin: theme.spacing(),
		background: 'none',
	    boxRadius: 'none',
	    boxShadow: 'none',
	    border: 'none',
	},
	btnTxt: {
		marginRight: theme.spacing(),
		marginLeft: theme.spacing(),
	},
}))

export default function Footer( props ) {
	
	const classes = useStyles() 
	const theme = useTheme()
	const secondary = theme.palette.secondary.main

	const appSlice = useSelector(state => state.app)
	const {
		// name,
     	admin_email,
    } = appSlice.toolkitData

	return	<List dense className={ clsx (classes.none) }>

				<ListItem 
					button
					onClick={ e => {
						e.preventDefault() 
						console.log ( 'admin_email', admin_email )
						gotoURL(`/`, `_self`)
					}}>
					<ListItemIcon>
						<Icon icon={ `link` } color={ `inherit` } />
					</ListItemIcon>
					<ListItemText 
						primary={ `Homepage` }
					/>
				</ListItem>

				<ListItem 
					button
					onClick={ e => {
						e.preventDefault() 
						console.log ( '@PingPong', admin_email )
					}}>
					<ListItemIcon>
						<Icon icon={ `right` } color={ `inherit` } />
					</ListItemIcon>
					<ListItemText 
						primary={ `@PingPong` }
					/>
				</ListItem>

				<ListItem 
					button
					onClick={ e => {
						e.preventDefault() 
						console.log ( '@PingPong', admin_email )
					}}>
					<ListItemIcon>
						<Icon icon={ `right` } color={ `inherit` } />
					</ListItemIcon>
					<ListItemText 
						primary={ `@PWAify` }
						// secondary={ `${name} homepage` }
					/>
				</ListItem>

				<ListItem 
					button
					onClick={ e => {
						e.preventDefault()
						console.log ( 'secondary', secondary )
						gotoURL(`https://github.com/listingslab-software/toolkit`, `_blank`)
					}}>
					<ListItemIcon>
						<Icon icon={ `link` } color={ `inherit` } />
					</ListItemIcon>
					<ListItemText 
						primary={ `GitHub` }
						// secondary={ `Open Source & Free` }
					/>
				</ListItem>

				<ListItem 
					button
					onClick={ e => {
						e.preventDefault()
						gotoURL(`https://listingslab.com`, `_blank`)
					}}>
					<ListItemIcon>
						<Icon icon={ `link` } color={ `inherit` } />
					</ListItemIcon>
					<ListItemText 
						primary={ `listingslab.com` }
					/>
				</ListItem>

				

				
			</List>
}

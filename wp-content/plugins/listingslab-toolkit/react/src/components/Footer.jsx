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
      admin_email,
    } = appSlice.toolkitData

	return	<List dense className={ clsx (classes.none) }>
				<ListItem 
					button
					onClick={ e => {
						e.preventDefault()
						console.log ( 'secondary', secondary )
						gotoURL(`https://github.com/listingslab-software/toolkit`, `_blank`)
					}}>
					<ListItemIcon>
						<Icon icon={ `right` } color={ `secondary` } />
					</ListItemIcon>
					<ListItemText 
						primary={ `GitHub Respository` }
						secondary={ `Open Source & Free` }
					/>
				</ListItem>

				<ListItem 
					button
					onClick={ e => {
						e.preventDefault() 
						console.log ( 'admin_email', admin_email )
						gotoURL(`/`, `_self`)
					}}>
					<ListItemIcon>
						<Icon icon={ `right` } color={ `secondary` } />
					</ListItemIcon>
					<ListItemText 
						primary={ `Home` }
					/>
				</ListItem>
			</List>
}

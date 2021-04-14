import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
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

export default function Nav( props ) {
	
	const classes = useStyles() 

	return	<React.Fragment>
					
				<List dense className={ clsx (classes.none) }>
					<ListItem 
						button
						onClick={ e => {
							e.preventDefault() 
						}}>
						<ListItemIcon>
							<Icon icon={ `right` } color={ `primary` } />
						</ListItemIcon>
						<ListItemText 
							primary={ `@_ToolKit` }
						/>
					</ListItem>

					<ListItem 
						button
						onClick={ e => {
							e.preventDefault() 
						}}>
						<ListItemIcon>
							<Icon icon={ `right` } color={ `primary` } />
						</ListItemIcon>
						<ListItemText 
							primary={ `@PingPong` }
						/>
					</ListItem>

					<ListItem 
						button
						onClick={ e => {
							e.preventDefault() 
						}}>
						<ListItemIcon>
							<Icon icon={ `right` } color={ `primary` } />
						</ListItemIcon>
						<ListItemText 
							primary={ `@PWAify` }
						/>
					</ListItem>
					
				</List>

			</React.Fragment>
}

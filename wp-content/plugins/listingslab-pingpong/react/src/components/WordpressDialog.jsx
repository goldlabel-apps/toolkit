import React from 'react'
import { useSelector } from 'react-redux'
import clsx from 'clsx'
import { 
  toggleWordpressDialog,
  gotoURL,
} from '../redux/pingpong/actions'
import {
	makeStyles,
	useTheme,
	useMediaQuery,
    Dialog,
    IconButton,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
} from '@material-ui/core/'
import { 
	Icon,
} from '../theme'

const useStyles = makeStyles((theme) => ({
  wordpressDialog:{
  	padding: theme.spacing(),
  	marginBottom:  45,
  },
  dialogTitle:{
	marginTop: theme.spacing(2),
  },
  titleTxt:{
	marginLeft: theme.spacing(4),
  },
  closeTrigger: {
    position: 'absolute',
    right: theme.spacing(),
    bottom: theme.spacing(),
    background: 'white',
  },
}))

export default function PingPongDialog( props ) {

	const classes = useStyles() 	
	const theme = useTheme()
	const primaryColor = theme.palette.primary.main
	const pingpongSlice = useSelector(state => state.pingpong)
	const {
		ting,
	} = pingpongSlice
	let isMobile = !useMediaQuery( '( min-width: 600px )' )
	let fullScreen = false
	if (isMobile){
		fullScreen = true
	}

	const closeDialog = () => {
		toggleWordpressDialog( false )
	}

	return	<Dialog
				open
				fullWidth
				fullScreen={ fullScreen }
				maxWidth={ `sm` }
				onClose={ closeDialog } >
				<div className={ clsx( classes.wordpressDialog )}>

					<List>

						<ListItem 
							button
							onClick={ (e) => { 
								e.preventDefault()
								gotoURL(`/wp-admin/`, `_self`)
							}}>
							<ListItemAvatar>
								<Icon icon={ `wordpress` } color={ primaryColor } />
							</ListItemAvatar>
							<ListItemText 
								primary={ `Dashboard` }
							/>
						</ListItem>

						
						<ListItem 
							button
							onClick={ (e) => { 
								e.preventDefault()
								gotoURL(`/wp-admin/admin.php?page=listingslab-toolkit%2Fphp%2FToolKit.php`, `_self`)
							}}>
							<ListItemAvatar>
								<Icon icon={ `toolkit` } color={ `primary` } />
							</ListItemAvatar>
							<ListItemText 
								primary={ `@ToolKit` }
							/>
						</ListItem>


						<ListItem 
							button
							onClick={ (e) => { 
								e.preventDefault()
								gotoURL(`/wp-admin/customize.php?return=%2Fwp-admin%2Fadmin.php%3Fpage%3Dlistingslab-toolkit%252Fphp%252FToolKit.php`, `_self`)
							}}>
							<ListItemAvatar>
								<Icon icon={ `theme` } color={ `primary` } />
							</ListItemAvatar>
							<ListItemText 
								primary={ `Customise Theme` }
							/>
						</ListItem>


						<ListItem 
							button
							onClick={ (e) => { 
								e.preventDefault()
								gotoURL(`/wp-admin/edit.php`, `_self`)
							}}>
							<ListItemAvatar>
								<Icon icon={ `edit` } color={ `primary` } />
							</ListItemAvatar>
							<ListItemText 
								primary={ `Edit Posts` }
							/>
						</ListItem>

						<ListItem 
							button
							onClick={ (e) => { 
								e.preventDefault()
								gotoURL(`/wp-admin/post-new.php`, `_self`)
							}}>
							<ListItemAvatar>
								<Icon icon={ `create` } color={ `primary` } />
							</ListItemAvatar>
							<ListItemText 
								primary={ `New Post` }
							/>
						</ListItem>

					</List>
			
				</div>
				<IconButton
						className={ clsx( classes.closeTrigger )}
	        			variant={ `text` }
	        			color={ `primary` }
	        			onClick={ (e) => {
	        				e.preventDefault()
	        				console.log ('wordpress', ting.host )
	        				toggleWordpressDialog( false )
	        			}}>
	        			<Icon icon={ `close` } color={ `inherit` } />				
					</IconButton>
			</Dialog>
}

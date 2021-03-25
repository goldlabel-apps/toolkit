import React from 'react'
import clsx from 'clsx'
// import { useSelector } from 'react-redux'
import { 
  toggleDialog,
} from '../redux/pingpong/actions'
import {
    makeStyles,
    useTheme,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
} from '@material-ui/core/'
import { 
	Icon,
} from '../theme'

const useStyles = makeStyles(theme => ({
	wordPressSearch: {
	},
	grow: {
		flexGrow: 1,
	},
	dialogTitleIcon: {
		marginTop: theme.spacing( 0.5 ),
		marginRight: theme.spacing(2),
	},
	btnTxt: {
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
	},
}))



export default function PingPongDialog( props ) {
	
	const classes = useStyles()
	const theme = useTheme()
	const secondary = theme.palette.secondary.main
	// const appSlice = useSelector(state => state.app)
	// const {
	// 	wpBloginfo,
	// } = appSlice

	// console.log ('wpBloginfo', wpBloginfo)

	const closeDialog = () => {
		toggleDialog( false )
	}

	return	<Dialog
				open
				fullWidth
				maxWidth={ `xs` }
				onClose={ closeDialog } >

				<DialogTitle className={clsx( classes.dialogTitle )}>
					<Grid container>
						<Grid item >
							<div className={clsx( classes.dialogTitleIcon )}>
								<Icon icon={ `wordpress` } color={ secondary } />
							</div>
						</Grid>
						<Grid item>
							{ `Ping Pong Dialog` }
						</Grid>
					</Grid>
	            </DialogTitle>

	            <DialogContent>
					<div className={clsx( classes.wordPressSearch )}>
						
						<List dense>

							<ListItem 
								button
								onClick={ e => {
									e.preventDefault()
									window.open(`/wp-admin/`, `_self`)
									toggleDialog( false )
								}}>
								<ListItemIcon>
									<Icon icon={ `settings` } color={ `secondary` } />
								</ListItemIcon>
								<ListItemText 
									primary={ `Dashboard` }
								/>
							</ListItem>

							<ListItem 
								button
								onClick={ e => {
									e.preventDefault()
									window.open(`/wp-admin/customize.php?return=%2Fwp-admin%2Fthemes.php`, `_self`)
									toggleDialog( false )
								}}>
								<ListItemIcon>
									<Icon icon={ `theme` } color={ `secondary` } />
								</ListItemIcon>
								<ListItemText 
									primary={ `Theme` }
								/>
							</ListItem>

							<ListItem 
								button
								onClick={ e => {
									e.preventDefault()
									window.open(`/wp-admin/admin.php?page=pingpong`, `_self`)
									toggleDialog( false )
								}}>
								<ListItemIcon>
									<Icon icon={ `p2t` } color={ `secondary` } />
								</ListItemIcon>
								<ListItemText 
									primary={ `PingPong` }
								/>
							</ListItem>

							<ListItem 
								button
								onClick={ e => {
									e.preventDefault()
									window.open(`/wp-admin/post-new.php`, `_self`)
									toggleDialog( false )
								}}>
								<ListItemIcon>
									<Icon icon={ `add` } color={ `secondary` } />
								</ListItemIcon>
								<ListItemText 
									primary={ `New Blog` }
								/>
							</ListItem>


							<ListItem 
								button
								onClick={ e => {
									e.preventDefault()
									window.open(`/wp-admin/post-new.php?post_type=product`, `_self`)
									toggleDialog( false )
								}}>
								<ListItemIcon>
									<Icon icon={ `add` } color={ `secondary` } />
								</ListItemIcon>
								<ListItemText 
									primary={ `New Store Item` }
								/>
							</ListItem>

						</List>
					</div>

				</DialogContent>
				<DialogActions>
					<IconButton
						variant={ `outlined` }
						color={ `primary` }
						onClick={ closeDialog }>
						<Icon icon={ `close` } />
					</IconButton>
				</DialogActions>
			</Dialog>
}

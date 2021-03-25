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
    Typography,
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
								<Icon icon={ `pingpong` } color={ `secondary` } />
							</div>
						</Grid>
						<Grid item>
							<Typography variant={ `h6` } color={ `textSecondary` } >
								{ `@PingPong` }
							</Typography>
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
									<Icon icon={ `wordpress` } color={ secondary } />
								</ListItemIcon>
								<ListItemText 
									primary={ `Dashboard` }
									secondary={ `Greet your visitors` }
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

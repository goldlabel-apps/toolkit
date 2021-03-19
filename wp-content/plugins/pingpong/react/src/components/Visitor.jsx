import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { 
  toggleVisitor,
} from '../redux/app/actions'
import {
    makeStyles,
    // useTheme,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Grid,
    IconButton,
} from '@material-ui/core/'
import { Icon } from '../theme'

const useStyles = makeStyles(theme => ({
	visitor: {
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

export default function Visitor( props ) {
	
	const classes = useStyles()
	// const theme = useTheme()
	// const secondary = theme.palette.secondary.main
	const appSlice = useSelector(state => state.app)
	const {
		showVisitor,
	} = appSlice

	const closeDialog = () => {
		toggleVisitor( false )
	}

	return	<Dialog
				open={ showVisitor }
				fullScreen
				onClose={ closeDialog }
			>
				<DialogTitle className={clsx( classes.dialogTitle )}>
					<Grid container>
						<Grid item >
							<div className={clsx( classes.dialogTitleIcon )}>
								<Icon icon={ `fingerprint` } color={ `secondary` } />
							</div>
						</Grid>
						<Grid item>
							Your fingerprint
						</Grid>
					</Grid>
	            </DialogTitle>

	            <DialogContent>
					<div className={clsx( classes.visitor )}>
						Visitor
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

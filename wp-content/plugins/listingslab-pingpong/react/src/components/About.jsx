import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux' 
import { 
  toggleDialog,
} from '../redux/pingpong/actions'
import {
    makeStyles,
    // useTheme,
    Button,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
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
	indented:{
		marginLeft: theme.spacing( 2 ),
	},
}))

export default function About( props ) {
	
	const classes = useStyles()
	// const theme = useTheme()
	// const primaryColor = theme.palette.primary.main

	const pingpongSlice = useSelector(state => state.pingpong)
	const {
     	pJSON,
    } = pingpongSlice
    const { 
    	description, 
    } = pJSON


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
		        				<Typography gutterBottom>
									{ description }
								</Typography>
							</Grid>
						</Grid>
					</AccordionDetails>
				</Accordion>
		</div>
}

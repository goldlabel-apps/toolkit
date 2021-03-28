import React from 'react'
// import { useSelector } from 'react-redux'
import {
	gotoURL,
} from '../redux/app/actions'
import clsx from 'clsx'
import {
    makeStyles,
    // useTheme,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Grid,
    Typography,
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

export default function QuickLinks( props ) {
	
	const classes = useStyles() 


	return	<React.Fragment>
				<Accordion 
						defaultExpanded={ false }
						className={clsx( classes.plainAccordion )
					}>
					<AccordionSummary
			          expandIcon={ <Icon icon={`panel-toggle`} color={ `primary` }/> }
			          aria-controls={ `Help` }
			          id={ `help` } >
				        <Grid container>
							
							<Grid item>
								<Typography variant={ `button` } className={classes.btnTxt}>
									{ `Quick Links` }
								</Typography>
							</Grid>
						</Grid>
        			</AccordionSummary>
        			<AccordionDetails>
        				
        				<List dense className={ clsx (classes.none) }>
        					<ListItem 
								button
								onClick={ e => {
									e.preventDefault()
									gotoURL(`/`, `_self`)
								}}>
								<ListItemIcon>
									<Icon icon={ `link` } color={ `primary` } />
								</ListItemIcon>
								<ListItemText 
									primary={ `Homepage` }
								/>
							</ListItem>
        					<ListItem 
								button
								onClick={ e => {
									e.preventDefault()
									gotoURL(`https://github.com/listingslab-software/toolkit`, `_blank`)
								}}>
								<ListItemIcon>
									<Icon icon={ `link` } color={ `primary` } />
								</ListItemIcon>
								<ListItemText 
									primary={ `GitHub` }
								/>
							</ListItem> 

							<ListItem 
								button
								onClick={ e => {
									e.preventDefault()
									gotoURL(`https://listingslab.com`, `_blank`)
								}}>
								<ListItemIcon>
									<Icon icon={ `link` } color={ `primary` } />
								</ListItemIcon>
								<ListItemText 
									primary={ `listingslab.com` }
								/>
							</ListItem>
        				</List>
					</AccordionDetails>
				</Accordion>
			</React.Fragment>
}

/*
	const theme = useTheme()
	const secondary = theme.palette.secondary.main

	const appSlice = useSelector(state => state.app)
	const {
		// name,
     	admin_email,
    } = appSlice.toolkitData
*/
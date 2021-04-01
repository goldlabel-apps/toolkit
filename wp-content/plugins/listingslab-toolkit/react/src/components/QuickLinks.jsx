import React from 'react'
// import { useSelector } from 'react-redux'
import {
	gotoURL,
} from '../redux/app/actions'
import clsx from 'clsx'
import {
    makeStyles,
    Button,
    // useTheme,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    // Grid,
    // Typography,
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
	plainAccordion:{
		border: 'none',
		boxShadow: 'none',
	},
	fullW: {
		width: '100%',
	},
	btnTxt: {
		marginRight: theme.spacing(),
		marginLeft: theme.spacing(),
	},
	title: {
		color: theme.palette.primary.main,
	}
}))

export default function QuickLinks( props ) {
	
	const classes = useStyles() 
	const isOpen = false

	return	<React.Fragment>
				<Accordion 
						defaultExpanded={ isOpen }
						className={clsx( classes.plainAccordion )
					}>
					<AccordionSummary
			          expandIcon={ <Icon icon={`panel-toggle`} color={ `primary` }/> }
			          aria-controls={ `Help` }
			          id={ `help` } >

			              <Button 
				            variant={ `text` }
				            color={ `default` }>
				              <Icon icon={ `food` } color={ `primary` } />
				              <span className={ clsx( classes.btnTxt )  }>
				              	Links
				              </span>
				          </Button> 
				        
        			</AccordionSummary>
        			

        			<AccordionDetails>
        				
        				<List dense className={ clsx (classes.fullW) }>
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
									gotoURL(`/wp-admin/plugin-install.php`, `_self`)
								}}>
								<ListItemIcon>
									<Icon icon={ `link` } color={ `primary` } />
								</ListItemIcon>
								<ListItemText 
									primary={ `Update plugin` }
								/>
							</ListItem>

							<ListItem 
								button
								onClick={ e => {
									e.preventDefault()
									gotoURL(`https://github.com/listingslab-software/toolkit/raw/master/wp-content/plugins/listingslab-toolkit.zip`, `_blank`)
								}}>
								<ListItemIcon>
									<Icon icon={ `link` } color={ `primary` } />
								</ListItemIcon>
								<ListItemText 
									primary={ `Latest Zip` }
								/>
							</ListItem>

							<ListItem 
								button
								onClick={ e => {
									e.preventDefault()
									gotoURL(`/wp-admin/customize.php?return=%2Fwp-admin%2Fadmin.php%3Fpage%3Dlistingslab-toolkit%252Fphp%252FToolKit.php`, `_self`)
								}}>
								<ListItemIcon>
									<Icon icon={ `link` } color={ `primary` } />
								</ListItemIcon>
								<ListItemText 
									primary={ `Customizer` }
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
<Grid container>
							<Grid item>
								<Typography variant={ `button` } 
									className={ clsx( classes.btnTxt, classes.title ) }>
									{ `Quick Links` }
								</Typography>
							</Grid>
						</Grid>
*/
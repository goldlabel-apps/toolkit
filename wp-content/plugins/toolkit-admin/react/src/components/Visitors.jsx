import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import  { 
	subscribeVisitors,
	toggleVisitor,
	deleteVisitor,
	getSites,

} from '../redux/visitors/actions'
// import { 
// 	getFlagByCountryCode,
// 	// getIconByHostname,
// } from '../lib'
import {
    makeStyles,
    CardContent,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
} from '@material-ui/core/'
import { 
	Visitor,
	// SiteSelect,
} from './'
import  { Icon } from '../theme'

const useStyles = makeStyles(theme => ({
	basic: {
		// marginTop: theme.spacing(2),
	},
	thinify: {
    	fontWeight: 'lighter',
  	},
	card: {
		border: 'none',
		borderRadius: 'none',
		boxShadow: 'none',
	},
	btnTxt: {
		marginRight: theme.spacing(),
		marginLeft: theme.spacing(),
	},
	grow: {
		flexGrow: 1,
	},
	siteIcon:{
		width: 60,
		height: 60,
	}
}))

export default function Visitors( props ) {
	
	const classes = useStyles()
	// const appSlice = useSelector(state => state.app)
	const visitorsSlice = useSelector(state => state.visitors)
	const {
    	visitors,
    	siteFilter,
    } = visitorsSlice
    // const iconSrc = getIconByHostname(siteFilter)    

    // const {
    // 	wpBloginfo,
    // } = appSlice
    
    // console.log ('', wpBloginfo.name, wpBloginfo.description )

    React.useEffect(() => {
    	const {
    		subscribing,
    		subscribed,
    	} = visitorsSlice
    	if ( !subscribing && !subscribed ) {
    		subscribeVisitors()
    		getSites()
    	}
	}, [visitorsSlice])

	return	<div className={classes.basic}>
				
				
				<Visitor />
				<div className={ clsx ( classes.card ) }>
					<CardContent>
						{	visitors.length ? <React.Fragment>
							<List dense>
								{ visitors.map( (item, i) => {
									let showItem = false
									if (siteFilter === item.hostname) showItem = true
									if (siteFilter === `all`) showItem = true
									if ( !showItem ) return null
									const {
										// countryCode2,
										city,
										countryName,
										stateProv,
										pageTitle,
									} = item
									
									return	<ListItem
												key={ `visitor_${i}` }
												button
												onClick={ ( e ) => {
													e.preventDefault()
													toggleVisitor( true, item.id )
												}}>
					
				
					<ListItemText 
						primary={ `${ city } ${ stateProv } ${ countryName }` }
						secondary={ pageTitle ? `${ pageTitle }` : null }
						
					/>


					<ListItemSecondaryAction>
	                    
	                    <IconButton 
	                    	edge={ `end` }
	                    	aria-label={ `delete` }
	                    	onClick={ (e) => {
	                    		const really = window.confirm(`really really?`)
								if (really){
									deleteVisitor( item.id )
								}
	                    	}}>
	                      <Icon icon={ `delete` } color={ `secondary`} />
	                    </IconButton>

	                    <IconButton 
	                    	edge={ `end` }
	                    	aria-label={ `right` }
	                    	onClick={ (e) => {
	                    		e.preventDefault()
	                    		console.log ('right', item)
	                    	}}>
	                      <Icon icon={ `right` } color={ `secondary`} />
	                    </IconButton>

	                </ListItemSecondaryAction>



											</ListItem>})}
								</List>
							</React.Fragment> : null }
					</CardContent>
				</div>
			</div>
}


/*
action={ <React.Fragment>
								<Typography variant={ `body1` }>
									PingPong
								</Typography>
								
								</React.Fragment> }

${ osName } ${ browserName }
<ListItemIcon>
						<Avatar src={ getFlagByCountryCode( countryCode2 ) } />
					</ListItemIcon>


<CardHeader 
					disableTypography
					// avatar={ iconSrc ? <Avatar 
					// 						className={ clsx( classes.siteIcon )}
					// 						src={ iconSrc } /> : null }
					title={ <Typography variant={ `h5` } className={ clsx( classes.thinify )} >
                  				Visitors
                			</Typography> }

                	// subheader={ <Typography variant={ `h6` } className={ clsx( classes.thinify )} >
                 //  				{ wpBloginfo.description }
                	// 		</Typography> }
                			
					action={ <React.Fragment>
								<SiteSelect />
							</React.Fragment> }
			
				/>

*/

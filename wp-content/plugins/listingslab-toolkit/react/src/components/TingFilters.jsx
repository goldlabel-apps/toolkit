import React from 'react'
import { useSelector } from 'react-redux'
import {
	toggleShowHost,
	toggleShowId, 
	toggleShowBrowser,
	toggleShowCountryName,
} from '../redux/pingpong/actions'
import clsx from 'clsx'
import {
    makeStyles,
    FormGroup,
	FormControlLabel,
    Checkbox,
    IconButton,
    Collapse,
} from '@material-ui/core/'
import { Icon } from '../theme'

const useStyles = makeStyles(theme => ({
	tingFilters:{
		// marginLeft: theme.spacing(),
		// marginRight: theme.spacing(),
	},
	btnTxt: {
		marginRight: theme.spacing(),
		marginLeft: theme.spacing(),
	},
	plainAppbar:{
		border: 'none',
		boxShadow: 'none',
	},
	white: {
		color: 'white',
	},
}))

export default function TingFilters( props ) {
	
	const classes = useStyles() 
	const pingpongSlice = useSelector(state => state.pingpong)
	const {
		showId,
		showHost, 
		showBrowser, 
		showCountryName,
	} = pingpongSlice

	const [open, setOpen] = React.useState( false )

	return	<div className={ clsx( classes.tingFilters ) } >
				
	          		<IconButton 
			            color={ `primary` }
			            onClick={ (e) => {
					          		e.preventDefault() 
					          		setOpen( !open )
					          	}}>
			              <Icon icon={ `filter` } color={ `primary` } />
			        </IconButton> 

					<Collapse 
						in={ open } 
						timeout="auto" 
						unmountOnExit
					>
						<FormGroup>

						<FormControlLabel
								label={ `Country` }
						        control={
						          <Checkbox 
						          	checked={ showCountryName }
						          	color={ `secondary` }
						            name={ `showCountryNameToggle` }
						          	onClick={ (e) => {
						          		e.preventDefault() 
						          		toggleShowCountryName( !showCountryName )
						          	}}
						          />
						        }/>

							<FormControlLabel
								label={ `ID` }
						        control={
						          <Checkbox 
						          	checked={ showId }
						          	color={ `secondary` }
						            name={ `showIdToggle` }
						          	onClick={ (e) => {
						          		e.preventDefault() 
						          		toggleShowId( !showId )
						          	}}
						          />
						        }/>

							<FormControlLabel
								label={ `Host` }
						        control={
						          <Checkbox 
						          	checked={ showHost }
						          	color={ `secondary` }
						            name={ `showHostToggle` }
						          	onClick={ (e) => {
						          		e.preventDefault() 
						          		toggleShowHost( !showHost )
						          	}}
						          />
						        }/>


							<FormControlLabel
								label={ `Browser` }
						        control={
						          <Checkbox 
						          	checked={ showBrowser }
						          	color={ `secondary` }
						            name={ `showBrowserToggle` }
						          	onClick={ (e) => {
						          		e.preventDefault() 
						          		toggleShowBrowser( !showBrowser )
						          	}}
						          />
						        }/>
	    				</FormGroup>
    				</Collapse>
			</div>
}

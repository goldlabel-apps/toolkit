import React from 'react'
import { useSelector } from 'react-redux'
import {
	toggleShowHost,
	toggleShowId, 
	toggleShowBrowser,
} from '../redux/pingpong/actions'
import clsx from 'clsx'
import {
    makeStyles,
    FormGroup,
	FormControlLabel,
    Checkbox,
    Button,
    Collapse,
} from '@material-ui/core/'
import { Icon } from '../theme'

const useStyles = makeStyles(theme => ({
	tingFilters:{
		marginLeft: theme.spacing(),
		marginRight: theme.spacing(),
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
	} = pingpongSlice

	const [open, setOpen] = React.useState( false )

	return	<div className={ clsx( classes.tingFilters ) } >
				
	          		<Button 
			            variant={ `text` }
			            color={ `default` }
			            onClick={ (e) => {
					          		e.preventDefault() 
					          		setOpen( !open )
					          	}}>
			              <Icon icon={ `settings` } color={ `primary` } />
			              <span className={ clsx( classes.btnTxt )  }>
			              	Filter Settings
			              </span>
			        </Button> 

					<Collapse 
						in={ open } 
						timeout="auto" 
						unmountOnExit
					>
						<FormGroup>

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

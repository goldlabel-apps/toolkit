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
    AppBar,
    Toolbar,
    Checkbox,
} from '@material-ui/core/'
// import { Icon } from '../theme'

const useStyles = makeStyles(theme => ({
	tingFilters:{
		marginLeft: theme.spacing(),
		marginRight: theme.spacing(),
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

	return	<div className={ clsx( classes.tingFilters ) } >
				<AppBar 
					position={ `static` } 
					color={ `default` }
					className={ clsx( classes.plainAppbar ) }
				>
		          <Toolbar>
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
		          </Toolbar>
		        </AppBar>
			</div>
}

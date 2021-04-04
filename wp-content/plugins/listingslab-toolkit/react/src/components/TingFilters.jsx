import React from 'react'
import { useSelector } from 'react-redux'
import {
	toggleShowHost,
	toggleShowId, 
	toggleShowBrowser,
	toggleShowCountryName,
	setShowMode,
} from '../redux/pingpong/actions'
import clsx from 'clsx'
import {
	withStyles,
    makeStyles,
    FormGroup,
	FormControlLabel,
    Checkbox,
    IconButton,
    Collapse,
    Switch,
    Typography,
    Grid,
} from '@material-ui/core/'
import { Icon } from '../theme'

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    height: 14,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch)


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
	grow: {
		flexGrow: 1,
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
		showMode,
	} = pingpongSlice
	const [open, setOpen] = React.useState( false )

	let showModeChecked = false
	if ( showMode === `location` ) showModeChecked = true
	
	return	<div className={ clsx( classes.tingFilters ) } >
				<Grid container>

			        <Grid item>
				        <FormGroup>
				            <Typography component={ `div` }>
				              <Grid 
				              	container
				              	component={ `label` }  
				              	alignItems={ `center` }
				              	spacing={ 1 } >
				                <Grid item>Device</Grid>
				                <Grid item>
				                  <AntSwitch 
				                  	name={ `showModeSwitch` }
				                  	checked={ showModeChecked } 
				                  	onClick={ ( e ) => {
				                  		e.preventDefault()
				                  		// console.log ( 'showMode', showMode)
				                  		setShowMode( showMode === `device` ? `location` : `device` )
				                  	}}
				                  />
				                </Grid>
				                <Grid item>Location</Grid>
				              </Grid>
				            </Typography>
				          </FormGroup>
			          </Grid>

			          <Grid item className={ clsx( classes.grow ) } />
			           
			         <Grid item>
		          		<IconButton 
				            color={ `primary` }
				            onClick={ (e) => {
						          		e.preventDefault() 
						          		setOpen( !open )
						          	}}>
				              <Icon icon={ `filter` } color={ `primary` } />
				        </IconButton> 
			        </Grid>

			       </Grid>

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

import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import  { 
	setSiteFilter,
} from '../redux/visitors/actions'
import {
    makeStyles,
    NativeSelect,
	InputLabel,
	FormControl,
	FormHelperText,
} from '@material-ui/core/'
// import  { Icon } from '../theme'

const useStyles = makeStyles(theme => ({
	siteSelect:{
		// border: '1px solid red',
	},
	formControl: {
	    margin: theme.spacing(1),
	    minWidth: 120,
	},
	  selectEmpty: {
	  marginTop: theme.spacing(2),
	},
}))

export default function SiteSelect( props ) {
	
	const classes = useStyles()
	const visitorsSlice = useSelector(state => state.visitors)
	const {
    	sites,
    	siteFilter,
    } = visitorsSlice
	if ( !sites.length ) return null	

	const selectSite = (e) => {
		e.preventDefault()
		setSiteFilter( e.target.value )
	}

	// console.log ('hostname', visitorsSlice.hostname)
	// || process.env.REACT_APP_ENV !== `DEV`
	if ( visitorsSlice.hostname !==  `listingslab.com`  ) return null
	
	return	<div className={ clsx( classes.siteSelect ) }>
				<FormControl className={ clsx( classes.formControl ) }>
			        
			        <InputLabel htmlFor="site-selector">
			        	Hostname
			        </InputLabel>
			        
			        <NativeSelect
			          value={ siteFilter }
			          inputProps={{
			            name: 'site',
			            id: 'site-selector',
			          }}
			          onChange={ selectSite }>

			          <option value={ `all` }>All</option>

			          { sites.map( (item, i) => {
			          	const { 
			          		name,
			          		hostname,
			          	} = item
			          	return <option 
			          				key={ `site_${i}` }
			          				value={ hostname }>
			          				{ name }
			          			</option>
			          }) }

			        </NativeSelect>
			        <FormHelperText>
			        	Only on listingslab.com
			        </FormHelperText>
			      
			      </FormControl>
			</div>
	
}

/*
<FormHelperText>
			        	Select site 
			        </FormHelperText>
*/
import React from 'react'
import clsx from 'clsx'
// import { useSelector } from 'react-redux'
import {
	selectTing,
} from '../redux/pingpong/actions'
import { 
	getTingDeviceStr,
	getFlagByCountryCode,
	getTingTitle,
	getTingPage,
} from '../lib'
import {
    makeStyles,
    ButtonBase,
    Avatar,
    Card,
    CardHeader,
} from '@material-ui/core/'
// import { Icon } from '../theme'

const useStyles = makeStyles(theme => ({
	card: {
		background: 'none',
	    boxRadius: 'none',
	    boxShadow: 'none',
	    border: 'none',
	},
	tingBtn:{
		width: '100%',
		display: 'block',
		textAlign: 'left',
	},
}))

export default function TingPanel( props ) {
	
	const classes = useStyles() 
	const { ting } = props
	const {
		id,
		countryCode2,
	} = ting
	return	<ButtonBase 
				color={ `primary` }
				className={ clsx( classes.tingBtn ) } 
				onClick={ (e) => {
					e.preventDefault()
					selectTing( id )
				}}>
				<Card className={ clsx( classes.card ) } >
					<CardHeader 
						title={ getTingDeviceStr( ting ) }
						subheader={ getTingPage( ting ) }
						avatar={<Avatar src={ getFlagByCountryCode( countryCode2 ) } />}
					/>
					
				</Card>
			</ButtonBase>
}

/*
<pre>
	{ JSON.stringify( ting, null, 2 ) }
</pre>
*/
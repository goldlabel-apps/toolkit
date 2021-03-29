import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
    TextField,
} from '@material-ui/core/'

const useStyles = makeStyles( theme => ({
	textBox: {
		width: '100%',
	},
}))

export default function TextBox( props ) {
	
	const classes = useStyles()
	return	<TextField
				className={clsx( classes.textBox )}
				id={ `outlined-multiline-flexible` }
				label={`Multiline Text Input`}
				variant={ `outlined` }
				multiline
				rowsMax={4}
				onChange={ ( e ) => { 
					e.preventDefault()
						console.log ( e.target.value )
					}}
		    />
}

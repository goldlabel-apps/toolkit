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
	const { 
		options,
	} = props
	if ( !options ) return null
	const {
		label,
		autoFocus,
		variant,
		color,
		onChange,
		value,
		rows,
	} = options

	return	<TextField
				className={clsx( classes.textBox )}
				autoFocus={ autoFocus }
				id={ `outlined-multiline-flexible` }
				rows={ rows }
				label={ label }
				color={ color }
				value={ value }
				variant={ variant }
				multiline
				rowsMax={ 4 }
				onChange={ onChange }
		    />
}

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
	} = options

	const validate = () => {
		let isValid = false
		return isValid
	}

	const onChange = (e) => {
		validate()
		console.log ('onChange', e.target.value)
	}

	return	<TextField
				className={clsx( classes.textBox )}
				autoFocus={ autoFocus }
				id={ `outlined-multiline-flexible` }
				label={ label }
				variant={ variant }
				multiline
				rowsMax={ 4 }
				onChange={ onChange }
		    />
}

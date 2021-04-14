import React from 'react'
import { useSelector } from 'react-redux'
import {
  selectHost,
} from '../redux/pingpong/actions'
import {
    makeStyles,
    TextField,
    fade,
} from '@material-ui/core/'
import {
    Autocomplete,
} from '@material-ui/lab/'


const useStylesReddit = makeStyles((theme) => ({
  root: {
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#fcfcfb',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:hover': {
      backgroundColor: '#fff',
    },
    '&$focused': {
      backgroundColor: '#fff',
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
  focused: {},
}));


export default function ComboBox( props ) {
  const { options } = props
  if ( !options ) return null
  const {
    id,
    getList,
    labelAttribute,
    label,

  } = options
  const list = getList()
  const pingpongSlice = useSelector(state => state.pingpong)
  const {
      selectedHost,
  } = pingpongSlice

  const classes = useStylesReddit();
  
  return <React.Fragment>
            <Autocomplete
              style={{
                width: 300,
              }} 
              id={ id } 
              options={ list }
              inputValue={ selectedHost.host }
              renderInput={ ( params ) => {
                return <TextField 
                         label={ label }
                         InputProps={{ classes, disableUnderline: true }} 
                         {...props}
                         { ...params }
                       />
              }}
              getOptionLabel={ ( option ) => option[labelAttribute]}
              onChange={ (e, newValue) => {
                // console.log ('selectHost', newValue)
                selectHost( { host: newValue } )
              }}
            />
        </React.Fragment>

}

import React from 'react'
import { useSelector } from 'react-redux'
// import {
//   selectHost,
// } from '../redux/pingpong/actions'
import {
    TextField,
} from '@material-ui/core/'
import {
    Autocomplete,
} from '@material-ui/lab/'


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
  
  // console.log ( 'selectedHost', selectedHost )
  
  return <React.Fragment>
            <Autocomplete 
              id={ id }
              options={ list }
              inputValue={ selectedHost.host }
              renderInput={ ( params ) => {
                return <React.Fragment>
                   <TextField 
                     { ...params } 
                     label={ label }
                     variant={ `filled` }
                   />
                  </React.Fragment>} }
              getOptionLabel={ ( option ) => option[labelAttribute]}
              style={{ 
                width: '300',
              }}
              onChange={ (e, newValue) => {
                console.log ('selectHost', newValue)
                // selectHost( { host:newValue } )
              }}
              onInputChange={( e, newInputValue ) => {
                // selectHost( { host: newInputValue } )
              }}
            />
        </React.Fragment>

}

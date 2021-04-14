import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
  setFeedback,
  toggleFeedback,
} from '../redux/app/actions'
import {    
  makeStyles,
  Snackbar,
} from '@material-ui/core/'
import MuiAlert from '@material-ui/lab/Alert'

function Alert(props) {
  return  <MuiAlert 
            elevation={ 6 } 
            variant={ `filled` } 
            {...props}/>
}

const useStyles = makeStyles((theme) => ({
  feedback: {
  },
}))

export default function Feedback() {
  
  const classes = useStyles()
  const feedbackTime = 5000
  const appSlice = useSelector(state => state.app)
  const {
    feedbackObj,
  } = appSlice
  if ( !feedbackObj ) return null
  const { 
    severity,
    message,
  } = feedbackObj
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setFeedback( null )
    toggleFeedback( false )
  }

  return <Snackbar 
            className={ clsx( classes.none ) }
            open={ true } 
            autoHideDuration={ feedbackTime } 
            onClose={ handleClose }>
            <Alert 
              onClose={ handleClose } 
              severity={ severity }>
                { message }
            </Alert>
          </Snackbar>
}

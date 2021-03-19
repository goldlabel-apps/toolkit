import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
  closeFeedback,
} from '../redux/actions'
import {    
  makeStyles,
  Snackbar,
} from '@material-ui/core/'
import MuiAlert from '@material-ui/lab/Alert'

function Alert(props) {
  return  <MuiAlert 
            elevation={ 6 } 
            variant={ `filled` } 
            {...props}
          />
}

const useStyles = makeStyles((theme) => ({
  feedback: {
  },
}))

export default function Feedback() {
  
  const classes = useStyles()
  const feedbackTime = 5000
  const p2TSlice = useSelector(state => state.p2T) 
  const { 
    feedback,
    feedbackShow,
  } = p2TSlice
  const {
    message,
    status,
  } = feedback

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    closeFeedback()
  }

  return <Snackbar 
            className={ clsx( classes.none ) }
            open={ feedbackShow } 
            autoHideDuration={ feedbackTime } 
            onClose={ handleClose }>
            <Alert 
              onClose={ handleClose } 
              severity={ status }>
                { message }
            </Alert>
          </Snackbar>
}

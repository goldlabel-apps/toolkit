import React from 'react'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Backdrop,
    CircularProgress,
} from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 123,
    color: '#fff',
  },
}))

export default function Overlay() {
  const classes = useStyles()

  const appSlice = useSelector(state => state.app)
  const {
    overlay,
  } = appSlice

  return (
    <div>
      <Backdrop 
        className={ classes.backdrop } 
        open={ overlay }>
        <CircularProgress color={ `inherit` } />
      </Backdrop>
    </div>
  )
}

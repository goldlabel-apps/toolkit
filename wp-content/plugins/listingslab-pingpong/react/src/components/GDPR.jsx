import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
  agreeGDPR,
} from '../modules/Push2Talk/redux/actions'
import {
  toggleGDPROpen,
} from '../redux/app/actions'
import {    
  makeStyles,
  Snackbar,
  Link,
  Button,
  Typography,
} from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
  gdpr: {
    background: 'white',
    padding: theme.spacing(1.5),
    borderRadius: theme.spacing(0.5),
  },
  link: {
  	color: theme.palette.secondary.main,
  	cursor: 'pointer',
  },
  alertText:{
    color: 'black',
  },
  yesBtn:{
    marginLeft: theme.spacing(3),
  },
}))

export default function GDPR() {
  
  const classes = useStyles()
  const appSlice = useSelector(state => state.app)
  const {
	  GDPROpen,
  } = appSlice

  const closeGDPR = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    toggleGDPROpen(false)
  }

  return <Snackbar 
            className={ clsx( classes.gdpr ) }
            open={ GDPROpen } 
            autoHideDuration={ 0 }>
            <React.Fragment>
              	<Typography 
                  variant={ `body2` } gutterBottom>
                	<Link 
                  			className={ clsx ( classes.link )}
                  			onClick={ (e) => {
                  				e.preventDefault()
                  				window.open( `https://listingslab.com/gdpr`, `_blank` )
                  			}}>
                  Privacy is important
                  </Link>
                </Typography>
                <Button
                  className={ clsx( classes.yesBtn ) }
                	variant={ `contained` }
                	color={ `primary` }
                	onClick={ (e) => {
                          e.preventDefault()
                          closeGDPR()
                          agreeGDPR()
                  }}>
                	Agreed?
                </Button>
              </React.Fragment>
          </Snackbar>
}

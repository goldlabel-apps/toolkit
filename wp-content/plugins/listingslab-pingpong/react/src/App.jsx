import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { 
  toggleFeedback, 
  setFeedback,
} from './redux/pingpong/actions'
import {
  theme, 
} from './theme'
import {
  makeStyles,
  MuiThemeProvider, 
  createMuiTheme,
  IconButton,
  Badge,
} from '@material-ui/core/'
import { Icon } from './theme'
import { 
  Feedback,
} from './components'

const useStyles = makeStyles((theme) => ({
  appWrap: {
  },
}))

export default function App() {  

    const classes = useStyles()

    const pingpongSlice = useSelector(state => state.pingpong)
    const {
      feedback,
    } = pingpongSlice

    // console.log( 'feedback', feedback )

    return <MuiThemeProvider theme={createMuiTheme(theme)}>
              <div className={ clsx( classes.appWrap ) }>
                  <IconButton
                    component={ `div` }
                    onClick={ (e) => {
                      e.preventDefault()
                      setFeedback( {
                        message: `Nice one bruv`,
                        severity: `success`,
                      } )
                      toggleFeedback( true )

                    }}                      
                  >
                    <Badge badgeContent={ 0 } color={ `secondary` } >
                      <Icon icon={ `pingpong` } color={ `primary` } />
                    </Badge>
                  </IconButton>    

                  { feedback ? <Feedback /> : null }

              </div>
            </MuiThemeProvider> 
}

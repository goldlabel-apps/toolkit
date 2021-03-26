import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { 
  toggleDialog,
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
  PingPongDialog,
  Overlay,
} from './components'

const useStyles = makeStyles((theme) => ({
  appWrap: {
  },
}))

export default function App() {  

    const classes = useStyles()

    const pingpongSlice = useSelector(state => state.pingpong)
    const {
      dialog,
      overlay,
      feedback,
    } = pingpongSlice

    return <MuiThemeProvider theme={createMuiTheme(theme)}>
              <div className={ clsx( classes.appWrap ) }>
                  <IconButton
                    component={ `div` }
                    onClick={ (e) => {
                      e.preventDefault()
                      toggleDialog( true )
                    }}>
                    <Badge badgeContent={ null } color={ `secondary` } >
                      <Icon icon={ `pingpong` } color={ `primary` } />
                    </Badge>
                  </IconButton>    
                  { overlay ? <Overlay /> : null }
                  { dialog ? <PingPongDialog /> : null }
                  { feedback ? <Feedback /> : null }
              </div>
            </MuiThemeProvider> 
}

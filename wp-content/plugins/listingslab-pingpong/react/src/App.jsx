import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
  initPingPong,
} from './redux/pingpong/actions'
import {
  theme, 
} from './theme'
import {
  makeStyles,
  MuiThemeProvider, 
  createMuiTheme,
  LinearProgress,
} from '@material-ui/core/'
// import { Icon } from './theme'
import { 
  Feedback,
  PingPongDialog,
  Overlay,
  PingPongButton,
} from './components'

const useStyles = makeStyles((theme) => ({
  appWrap: {
  },
  topRight: {
    zIndex: 12345,
    position: 'fixed',
    top: theme.spacing(0.5),
    right: theme.spacing(0.5),
  },
  progress:{
    zIndex: 123456,
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 0,
  }
}))

export default function App() {  

    const classes = useStyles()
    const pingpongSlice = useSelector(state => state.pingpong)
    const {
      error,
      dialog,
      overlay,
      feedback,
      id,
    } = pingpongSlice

    React.useEffect(() => {
        const {
          initting,
          initted,
        } = pingpongSlice 
        if ( !initting && !initted ) initPingPong()
    }, [pingpongSlice])

    if ( error ) return <MuiThemeProvider theme={ createMuiTheme(theme) }>
                          <Feedback />
                         </MuiThemeProvider>                         

    if ( !id ) return <MuiThemeProvider theme={ createMuiTheme(theme) }>
                        <div className={ clsx( classes.progress ) }>
                          <LinearProgress color={ `primary` } />
                        </div>
                      </MuiThemeProvider> 

    return <MuiThemeProvider theme={ createMuiTheme(theme) }>
              <div className={ clsx( classes.appWrap ) }>
                  { overlay ? <Overlay /> : null }
                  { feedback ? <Feedback /> : null }
                  { dialog ? <PingPongDialog /> : <PingPongButton /> }
                  
              </div>
            </MuiThemeProvider> 
}

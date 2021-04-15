import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
  initPingPong,
  doGdpr,
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
  WordpressDialog,
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
    // height: 1,
    // overflow: 'hidden',
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
      dialogWordpress,
      overlay,
      feedback,
      id,
    } = pingpongSlice

    React.useEffect(() => {
        const {
          initting,
          initted,
          ting,
          gdprDone,
        } = pingpongSlice 
        if ( !initting && !initted ) initPingPong()
        const {
          gdpr,
          messages,
        } = ting 

        // if (){
          // doGdpr
        // }
        // console.log ( 'useEffect', initted, gdprDone, gdpr,  messages)
        if (initted && !gdprDone && !gdpr && !messages ) doGdpr()

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
                  { dialogWordpress ? <WordpressDialog /> : null }
                  
              </div>
            </MuiThemeProvider> 
}

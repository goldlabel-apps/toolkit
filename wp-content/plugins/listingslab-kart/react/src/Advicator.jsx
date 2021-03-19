import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
  theme, 
} from './theme'
import {
  makeStyles,
  MuiThemeProvider, 
  createMuiTheme,
  CssBaseline,
  LinearProgress,
  Backdrop,
  CircularProgress,
  // Typography,
} from '@material-ui/core/'
import { 
  renderKartToDom 
} from './lib'
import {
  Debugga,
  BottomAppBar,
} from './components'

const useStyles = makeStyles((theme) => ({
  appWrap: {
    margin: 'auto',
    paddingBottom: theme.spacing(0.75),
  },
  linearProgress: {
    height: 6,
  },
  grow: {
    flexGrow: 1,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}))

export default function Advicator() {  
    
    const classes = useStyles()
    const appSlice = useSelector(state => state.app)
    const {
      fetching,
      overlay,
    } = appSlice

    React.useEffect(() => {
      const {
        kart
      } = appSlice
      if(!kart){
        renderKartToDom()
      }
      
    }, [appSlice])

    return <MuiThemeProvider theme={createMuiTheme(theme)}>
              <CssBaseline />

              { overlay ? <Backdrop open className={ clsx( classes.backdrop ) } >
                <CircularProgress color={ `inherit` } />
              </Backdrop> : null }
              
              <div className={ clsx( classes.app )}>
                    <div className={ clsx( classes.linearProgress )}>
                      { fetching ? <LinearProgress color={ `secondary` } /> : null }
                    </div>
                    <Debugga />
                    <BottomAppBar />

              </div>
              
            </MuiThemeProvider> 
}
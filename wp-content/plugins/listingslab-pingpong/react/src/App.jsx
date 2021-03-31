import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { 
  toggleDialog,
  initPingPong,
} from './redux/pingpong/actions'
import {
  theme, 
} from './theme'
import {
  makeStyles,
  Tooltip,
  MuiThemeProvider, 
  createMuiTheme,
  IconButton,
  Badge,
  CircularProgress,
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
  topRight: {
    zIndex: 12345,
    position: 'fixed',
    top: theme.spacing(),
    right: theme.spacing(),
  },
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

    const unread = 0

    React.useEffect(() => {
        const {
          initting,
          initted,
        } = pingpongSlice 
        if ( !initting && !initted ) initPingPong()
    }, [pingpongSlice])

    if ( error ) return <MuiThemeProvider theme={createMuiTheme(theme)}>
                          <Feedback />
                         </MuiThemeProvider>                         

    if ( !id ) return <MuiThemeProvider theme={createMuiTheme(theme)}>
                        <CircularProgress color={ `inherit` } />
                      </MuiThemeProvider> 

    return <MuiThemeProvider theme={createMuiTheme(theme)}>
              <div className={ clsx( classes.appWrap ) }>
                  { overlay ? <Overlay /> : null }
                  { feedback ? <Feedback /> : null }
                  { dialog ? <PingPongDialog /> : <div className={ clsx( classes.topRight ) }>

                    <Tooltip
                         title={ `@_ToolKit` }
                         aria-label={ `by Listingslan` }
                       >
                        <IconButton
                          component={ `div` }
                          onClick={ (e) => {
                            e.preventDefault()
                            toggleDialog( true )
                          }}>
                      <Badge badgeContent={ unread } color={ `primary` } >
                        <Icon icon={ `toolkit` } color={ 'primary' } />
                      </Badge>
                    </IconButton></Tooltip>
                  </div> }
              </div>
            </MuiThemeProvider> 
}

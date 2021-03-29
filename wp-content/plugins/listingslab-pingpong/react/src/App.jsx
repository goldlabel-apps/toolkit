import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { 
  toggleDialog,
  connectAPI,
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
      error,
      dialog,
      gdpr,
      overlay,
      feedback,
      connectedAPI,
    } = pingpongSlice

    React.useEffect(() => {
        const {
          connectedAPI,
          connectingAPI,
          connectAPIDone,
        } = pingpongSlice
        if ( !connectedAPI && !connectingAPI && !connectAPIDone ) connectAPI()
    }, [pingpongSlice])

    return <MuiThemeProvider theme={createMuiTheme(theme)}>
              <div className={ clsx( classes.appWrap ) }>

                  { error ? <IconButton
                    component={ `div` }
                    onClick={ (e) => {
                      e.preventDefault()
                      alert ('API Connection Failed :(')
                    }}>
                      <Icon icon={ `error` } color={ `error` } />
                  </IconButton> : null }

                  { connectedAPI ? <Tooltip
                       title={ `@_ToolKit` }
                       aria-label={ `by Listingslan` }
                     >
                      <IconButton
                        component={ `div` }
                        onClick={ (e) => {
                          e.preventDefault()
                          toggleDialog( true )
                        }}>
                    <Badge badgeContent={ !gdpr ? 1 : 0 } color={ `primary` } >
                      <Icon icon={ `toolkit` } color={ 'primary' } />
                    </Badge>
                  </IconButton></Tooltip>  : null }
                  { overlay ? <Overlay /> : null }
                  { dialog ? <PingPongDialog /> : null }
                  { feedback ? <Feedback /> : null }
              </div>
            </MuiThemeProvider> 
}

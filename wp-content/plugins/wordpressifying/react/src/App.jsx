import pJSON from '../package.json'
import React from 'react'
import { useSelector } from 'react-redux'
import clsx from 'clsx'
import {
  theme, 
} from './theme'
import {
  makeStyles,
  MuiThemeProvider, 
  createMuiTheme,
  Typography,
} from '@material-ui/core/'
import { 
  PingPong,
  Overlay,
  Feedback,
} from './components'

const useStyles = makeStyles((theme) => ({
  app: {
    background: '#f1f1f1',
    margin: theme.spacing( 2 ),
  },
  version:{
    padding: theme.spacing(),
    textAlign: 'center',
  },
}))

export default function App() {
  
    const classes = useStyles()    
    const appSlice = useSelector(state => state.app)
    const {
      feedback
    } = appSlice
    const {
      version,
    } = pJSON

    return <MuiThemeProvider theme={createMuiTheme(theme)}>
              <div className={ clsx( classes.app ) }>
                <Overlay />
                { feedback ? <Feedback /> : null }
                <PingPong />
                <Typography 
                  variant={ `body2` } 
                  color={ `textSecondary` }
                  className={ clsx( classes.version ) }>
                  vs { version }
                </Typography>
              </div>
            </MuiThemeProvider> 
}

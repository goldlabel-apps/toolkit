import pJSON from '../package.json'
import React from 'react'
import clsx from 'clsx'
// import { useSelector } from 'react-redux'
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
  QuickLinks,
  PingPong,
  Overlay,
} from './components'

const useStyles = makeStyles((theme) => ({
  app: {
  },
  version:{
    padding: theme.spacing(),
    textAlign: 'center',
  },
}))

export default function App() {
  
    const classes = useStyles()    
    const {
      version,
    } = pJSON

    return <MuiThemeProvider theme={createMuiTheme(theme)}>
              <div className={ clsx( classes.app ) }>
                <Overlay />
                <QuickLinks />
                <PingPong />
                <Typography 
                  variant={ `body2` } 
                  className={ clsx( classes.version ) }>
                  version { version }
                </Typography>
              </div>
            </MuiThemeProvider> 
}

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
} from '@material-ui/core/'
import { 
  QuickLinks,
  PingPong,
  Overlay,
} from './components'

const useStyles = makeStyles((theme) => ({
  app: {
  },
}))

export default function App() {
  
    const classes = useStyles()    

    return <MuiThemeProvider theme={createMuiTheme(theme)}>
              <div className={ clsx( classes.app ) }>
                <Overlay />
                <QuickLinks />
                <PingPong />
              </div>
            </MuiThemeProvider> 
}

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
  CssBaseline,
  IconButton,
  Badge,
} from '@material-ui/core/'
import { Icon } from './theme'

const useStyles = makeStyles((theme) => ({
  appWrap: {
    // border: '1px solid red',
    // margin: 'auto',
    // paddingBottom: theme.spacing(0.75),
  },
  iconBut:{
    // border: '1px solid green',
  },
}))

export default function App() {  
    const classes = useStyles()

    return <MuiThemeProvider theme={createMuiTheme(theme)}>
              <CssBaseline />              
              <div className={ clsx( classes.appWrap ) }>
                
                  <IconButton
                    component={ `div` }
                    className={ clsx( classes.iconBut ) }
                    onClick={ (e) => {
                      e.preventDefault()
                      console.log ('@PP')
                    }}>
                  <Badge 
                    badgeContent={4} 
                    color={ `secondary` }
                  >
                    <Icon icon={ `pingpong` } color={ `primary` } />
                    </Badge>
                  </IconButton>
                
              </div>
            </MuiThemeProvider> 
}
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
  Grid,
  Typography,
  Backdrop,
  CircularProgress,
} from '@material-ui/core/'
import {
  DefaultWordPress,
  Dialup,
  GDPR,
  Visitor,
  Fingerprint,
} from './components'
import { Push2Talk } from './modules/Push2Talk'

const useStyles = makeStyles((theme) => ({
  appWrap: {
    margin: 'auto',
    paddingBottom: theme.spacing(0.75),
  },
  topBarGrid:{
    margin: 'auto',
    maxWidth: 980,
  },
  topRight:{
    padding: theme.spacing(1.5),
    textAlign: 'right',
  },
  title:{
    marginTop: 32,
    marginLeft: 90,
  },
  dialUp: {
  },
  leftBit:{
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(),
    paddingRight: theme.spacing(),
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

export default function App() {  
    const classes = useStyles()
    const appSlice = useSelector(state => state.app)
    const {
      customisedTheme,
      fetching,
      wpBloginfo,
      overlay,
    } = appSlice

    return <MuiThemeProvider theme={createMuiTheme(theme)}>
              <CssBaseline />

              { overlay ? <Backdrop open className={ clsx( classes.backdrop ) } >
                <CircularProgress color={ `inherit` } />
              </Backdrop> : null }
              

              <div style={{ 
                  background: customisedTheme.lightBg 
                }}
                className={ clsx( classes.app )}>

                    <div className={ clsx( classes.linearProgress )}>
                      { fetching ? <LinearProgress color={ `secondary` } /> : null }
                    </div>

                    <Grid container className={ clsx( classes.topBarGrid )}>

                      <Grid item className={ clsx( classes.dialUp )}>
                        <Dialup />
                        <Typography color={ `error` } className={ clsx( classes.title )}>
                          { wpBloginfo.name }
                        </Typography>
                        
                      </Grid>

                      <Grid item className={ clsx( classes.grow )} />

                      <Grid item className={ clsx( classes.topRight )}>
                        <Fingerprint />
                      </Grid>
                        
                      <div className={ clsx( classes.appWrap )}>
                        <DefaultWordPress />
                      </div>  
                      
                  </Grid>
              </div>
              <Push2Talk />
              <Visitor />
              <GDPR />
            </MuiThemeProvider> 
}
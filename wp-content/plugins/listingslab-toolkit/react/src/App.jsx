import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { 
  themeDark, 
  themeLight, 
} from './theme'
import {
  makeStyles,
  MuiThemeProvider, 
  createMuiTheme,
  Avatar,
  Card,
  CardHeader,
  Typography,
  Grid,
} from '@material-ui/core/'
import { 
  APIKey,
  PingPong, 
  Footer, 
  Overlay,
} from './components'

const useStyles = makeStyles((theme) => ({
  app: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(),
  },
  card:{
    margin: theme.spacing(),
    background: 'none',
    boxRadius: 'none',
    boxShadow: 'none',
    border: 'none',
  },
}))

export default function App() {
  
    const classes = useStyles()
    const appSlice = useSelector(state => state.app)
    const {
      themeMode,
      toolkitData,
    } = appSlice
    
    let theme = themeDark

    const {
      name,
      // description,
      avatar,
    } = toolkitData

    if ( themeMode === `light` ) theme = themeLight

    return <MuiThemeProvider theme={createMuiTheme(theme)}>
              <Overlay />
              <div className={ clsx( classes.app ) }>
                <Card className={ clsx( classes.card ) }>
                  <CardHeader 
                    disableTypography
                    avatar={ <Avatar src={ avatar } /> }
                    title={ <Typography variant={ `h6` }>
                              { name }
                            </Typography> }
                    // subheader={ <Typography  variant={ `body1` }>
                    //               { description }
                    //             </Typography> }
                  />
                </Card>

                 <Grid container>
                  
                  <Grid item xs={ 9 } >
                    <PingPong />
                  </Grid>

                  <Grid item xs={ 3 } >
                    <APIKey />
                  </Grid>

                  <Grid item xs={ 12 } >
                    <Footer />
                  </Grid>

                  
                </Grid>
               
              </div>
            </MuiThemeProvider> 
}

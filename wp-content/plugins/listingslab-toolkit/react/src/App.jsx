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
  Grid,
} from '@material-ui/core/'
import { 
  APIKey,
  PingPong,
  Overlay,
  ButtonAppBar,
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
    } = appSlice
    
    let theme = themeDark

    if ( themeMode === `light` ) theme = themeLight

    return <MuiThemeProvider theme={createMuiTheme(theme)}>
              <Overlay />
              <div className={ clsx( classes.app ) }>
                
                  
                 <Grid container>

                    <Grid item xs={ 12 } >
                      <ButtonAppBar />
                    </Grid>

                    <Grid item xs={ 4 } >
                      <APIKey />
                    </Grid>

                    <Grid item xs={ 8 } >
                      <PingPong />
                    </Grid>

                  </Grid>
               
              </div>
            </MuiThemeProvider> 
}


/*
<Card className={ clsx( classes.card ) }>
                  <CardHeader 
                    disableTypography
                    action={ <Avatar src={ avatar } /> }
                    title={ <Typography variant={ `h6` }>
                              { name }
                            </Typography> }
                    // subheader={ <Typography  variant={ `body1` }>
                    //               { description }
                    //             </Typography> }
                  />
                </Card>
*/
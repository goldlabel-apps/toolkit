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
  Grid,
} from '@material-ui/core/'
import { 
  QuickLinks,
  PingPong,
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

    return <MuiThemeProvider theme={createMuiTheme(theme)}>
              <Overlay />
              <div className={ clsx( classes.app ) }>
                 <Grid container>
                  <Grid item xs={ 12 } md={ 12 } >
                      <QuickLinks />
                    </Grid>
                    <Grid item xs={ 12 } md={ 12 } >
                      <PingPong />
                    </Grid>
                  </Grid>
              </div>
            </MuiThemeProvider> 
}











/*

<Grid item xs={ 12 } >
                      <ButtonAppBar />
                    </Grid>

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
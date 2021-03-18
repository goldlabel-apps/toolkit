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
  Grid,
} from '@material-ui/core/'
import { 
  Visitors,
 } from './components'

const useStyles = makeStyles((theme) => ({
  app: {
    marginTop: theme.spacing(),
    marginRight: theme.spacing(),
  },
  card:{
    margin: theme.spacing(),
  },
}))

export default function App() {
  
    const classes = useStyles()
    const appSlice = useSelector(state => state.app)
    const {
      themeMode,
      wpBloginfo,
    } = appSlice
    let theme = themeDark

    const {
      name,
      description,
      icon,
    } = wpBloginfo

    if ( themeMode === `light` ) theme = themeLight

    return <MuiThemeProvider theme={createMuiTheme(theme)}>
              <div className={ clsx( classes.app ) }>
                <Card className={ clsx( classes.card ) }>
                  <CardHeader 
                    avatar={ <Avatar src={ icon } /> }
                    title={ name }
                    subheader={ description }
                  />
                </Card>
                <Grid container>
                  <Grid item xs={ 12 } >
                    <Visitors />
                  </Grid>
                </Grid>
              </div>
            </MuiThemeProvider> 
}
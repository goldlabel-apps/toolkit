import React from 'react'
import clsx from 'clsx'
import { toggleDebugga } from '../redux/app/actions'

import {
    makeStyles,
    AppBar,
    Toolbar,
    Fab,
    Avatar,
} from '@material-ui/core/'
// import { Icon } from '../theme'

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  noBg:{
    background: 'none',
    border: 'none',
    boxShadow: 'none',
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    // left: 8,
    right: 8,
    margin: '0 auto',
  },
}))

export default function BottomAppBar() {
  const classes = useStyles()
  return <AppBar position="fixed" color="primary" className={ clsx ( classes.appBar, classes.noBg)}>
          <Toolbar className={ classes.noBg }>
            <Fab 
              color={ `secondary` }
              className={ classes.fabButton }
              onClick={ (e) => {
                e.preventDefault()
                toggleDebugga( true )
              }}>
              <Avatar src={ `https://woocommerce-368502-1795531.cloudwaysapps.com/wp-content/uploads/2021/03/Icon250.png` } />
            </Fab>
          </Toolbar>
        </AppBar>
}

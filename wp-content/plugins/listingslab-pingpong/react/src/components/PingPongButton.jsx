import React from 'react'
import clsx from 'clsx'
import { 
  toggleDialog,
} from '../redux/pingpong/actions'
import {    
  makeStyles,
  AppBar,
  Toolbar,
  Button,
} from '@material-ui/core/'
// import { 
//   Icon,
// } from '../theme'

const useStyles = makeStyles( theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    background: 'none',
    boxShadow: 'none',
    border: 'none',
  },
  grow: {
    flexGrow: 1,
  },
  triggerButton: {
    position: 'absolute',
    right: theme.spacing(),
    textTransform: 'none',
  },
  fabButton: {
    position: 'absolute',
    right: 0,
  },
}))

export default function BottomAppBar() {
  const classes = useStyles()

  return <AppBar 
          className={ clsx( classes.appBar )}
          position={ `fixed` }>
          <Toolbar>
            <Button
              variant={ `contained` }
              color={  `primary` }
              className={ clsx(classes.triggerButton) } 
              onClick={ (e) => {
                            e.preventDefault()
                            toggleDialog( true )
                          }}>
              @_ToolKit
            </Button>
          </Toolbar>
        </AppBar>
}

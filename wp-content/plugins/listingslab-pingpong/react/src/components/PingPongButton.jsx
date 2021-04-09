import React from 'react'
import { useSelector } from 'react-redux' 
import clsx from 'clsx'
import { 
  toggleDialog,
  gotoURL,
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
  triggerButton1: {
    position: 'absolute',
    left: theme.spacing(),
    textTransform: 'none',
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
  const pingpongSlice = useSelector(state => state.pingpong)
  const {
     version,
  } = pingpongSlice.pJSON

  console.log ( 'version', version )


  return <AppBar 
          className={ clsx( classes.appBar )}
          position={ `fixed` }>
          <Toolbar>
            <Button
              variant={ `outlined` }
              color={  `primary` }
              className={ clsx(classes.triggerButton1) } 
              onClick={ (e) => {
                            e.preventDefault()
                            gotoURL(`/wp-admin/admin.php?page=listingslab-toolkit%2Fphp%2FToolKit.php`, `_self`)
                          }}>
              @ToolKit { version }
            </Button>

            <Button
              variant={ `contained` }
              color={  `primary` }
              className={ clsx(classes.triggerButton) } 
              onClick={ (e) => {
                            e.preventDefault()
                            toggleDialog( true )
                          }}>
              @PingPong
            </Button>

          </Toolbar>
        </AppBar>
}

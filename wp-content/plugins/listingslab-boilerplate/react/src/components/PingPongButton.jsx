import React from 'react'
import clsx from 'clsx'
import { 
  toggleDialog,
} from '../redux/pingpong/actions'
import {    
  makeStyles,
  AppBar,
  Toolbar,
  Fab,
} from '@material-ui/core/'
import { 
  Icon,
} from '../theme'

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
  fabButton: {
    position: 'absolute',
    padding: theme.spacing(),
    zIndex: 123456,
    top: 0,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}))

export default function BottomAppBar() {
  const classes = useStyles()

  return <AppBar 
          className={ clsx( classes.appBar )}
          position={ `fixed` }
          color={ `secondary` } 
          >
          <Toolbar>
            <Fab 
              className={ clsx(classes.fabButton) }
              color={ `primary` } 
              aria-label={ `ToolKit` }
              onClick={ (e) => {
                            e.preventDefault()
                            toggleDialog( true )
                          }}
            >
              <Icon icon={ `toolkit` } color={ `white` } />
            </Fab>
          </Toolbar>
        </AppBar>
}






/*

<IconButton 
              edge="start" 
              color="inherit" 
              aria-label="open drawer">
              <MenuIcon />
            </IconButton>

                        <div className={ clsx( classes.grow )} />
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton edge="end" color="inherit">
              <MoreIcon />
            </IconButton>

*/
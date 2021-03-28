import React from 'react'
import { useSelector } from 'react-redux'
import clsx from 'clsx'
import {
  makeStyles,
  AppBar, 
  Toolbar,
  Button, 
  Typography
} from '@material-ui/core/'
import { Icon } from '../theme'

const useStyles = makeStyles((theme) => ({
  buttonAppBar: {
    margin: theme.spacing(),
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  noShadow: {
    boxShadow: 'none',
  },
  btnTxt: {
    marginRight: theme.spacing(),
    marginLeft: theme.spacing(),
  },
}))

export default function ButtonAppBar() {
  
  const classes = useStyles()
  const appSlice = useSelector(state => state.app)
  const {
      name,
  } = appSlice.toolkitData

  return (
    <div className={ classes.buttonAppBar }>
      <AppBar 
        className={ classes.noShadow }
        position={ `static` }
        color={`default`}
      >
        <Toolbar>
          
          <Typography 
            variant={ `h6` } 
            className={ classes.title }>
            { name }
          </Typography> 

          <Button 
            variant={ `outlined` }
            color={ `default` }>
              <Icon icon={ `account` } color={ `inherit` } />
              <span className={ clsx( classes.btnTxt )  }>Account</span>
          </Button> 

        </Toolbar>
      </AppBar>
    </div>
  )
}

/*
<IconButton 
            edge={ `start` }
            className={ classes.menuButton }
          >
            <Icon icon={`settings`} color={ `secondary` } />
          </IconButton>
*/
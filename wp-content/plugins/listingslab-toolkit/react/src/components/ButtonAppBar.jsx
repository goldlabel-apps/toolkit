import React from 'react'
import { useSelector } from 'react-redux'
import {
  makeStyles,
  AppBar, 
  Toolbar,
  Button,
  IconButton, 
  Typography
} from '@material-ui/core/'
import { Icon } from '../theme'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(),
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

export default function ButtonAppBar() {
  
  const classes = useStyles()
  const appSlice = useSelector(state => state.app)
  const {
      name,
  } = appSlice.toolkitData

  return (
    <div className={classes.root}>
      <AppBar 
        position={ `static` }
        color={`primary`}
      >
        <Toolbar>
          <IconButton 
            edge={ `start` }
            className={ classes.menuButton }
          >
            <Icon icon={`settings`} color={ `secondary` } />
          </IconButton>
          <Typography 
            variant={ `h6` } 
            className={classes.title}>
            { name }
          </Typography> 

          <Button 
            variant={ `contained` }
            color={ `secondary` }>
              Account
          </Button> 

        </Toolbar>
      </AppBar>
    </div>
  )
}

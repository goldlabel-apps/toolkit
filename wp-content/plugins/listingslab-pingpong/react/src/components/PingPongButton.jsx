import React from 'react'
import { useSelector } from 'react-redux' 
import clsx from 'clsx'
import { 
  toggleDialog,
  gotoURL,
} from '../redux/pingpong/actions'
import {    
  makeStyles,
  useTheme,
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Chip,
} from '@material-ui/core/'
import { 
  Icon,
  IconGithub,
} from '../theme'

const useStyles = makeStyles( theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    background: 'none',
    boxShadow: 'none',
    border: 'none',
  },
  btnTxt:{
    marginRight: theme.spacing(),
    marginLeft: theme.spacing(),
    textTransform: 'none',
  },
  grow: {
    flexGrow: 1,
  },
  badgeText:{
    color: 'white',
  },
  githubChip:{
    background: 'none',
  },
  toolkitTrigger: {
    position: 'absolute',
    right: theme.spacing(),
    textTransform: 'none',
    // border: '1px solid ' + theme.palette.primary.main,
    background: 'white',
  },
  pingpongTrigger: {
    position: 'absolute',
    right: 55 + theme.spacing(),
    textTransform: 'none',
    // border: '1px solid ' + theme.palette.primary.main,
    background: 'white',
  },
}))

export default function BottomAppBar() {
  
  const classes = useStyles()
  const theme = useTheme()
  const primary = theme.palette.primary.main
  const pingpongSlice = useSelector(state => state.pingpong)
  const {
     version,
  } = pingpongSlice.pJSON

  return <AppBar 
          className={ clsx( classes.appBar )}
          position={ `fixed` }>
          <Toolbar>

              <IconButton
                color={  `secondary` }
                className={ clsx( classes.toolkitTrigger ) } 
                onClick={ (e) => {
                            e.preventDefault()
                            gotoURL(`/wp-admin/admin.php?page=listingslab-toolkit%2Fphp%2FToolKit.php`, `_self`)
                          }}>
                  <Icon icon={ `toolkit` } color={ `primary` } />
              </IconButton>

            
              <IconButton
                color={  `secondary` }
                className={ clsx( classes.pingpongTrigger ) } 
                onClick={ (e) => {
                              e.preventDefault()
                              toggleDialog( true )
                            }}>
                <Badge
                  badgeContent={ 0 } 
                  color={ `secondary` }
                >
                  <Icon icon={ `pingpong` } color={ `primary` } />
                </Badge>
              </IconButton>
           
              <Chip 
                className={ clsx( classes.githubChip ) } 
                avatar={ <IconGithub fill={ primary } /> }
                label={ version } 
                onClick={ ( e ) => {
                  e.preventDefault()
                  gotoURL( `https://github.com/listingslab-software/toolkit/`, `_blank`)
                }}
              />
                
          </Toolbar>
        </AppBar>
}

/*
                <span className={ clsx(classes.btnTxt ) } >
                @ToolKit { version }
              </span>
*/

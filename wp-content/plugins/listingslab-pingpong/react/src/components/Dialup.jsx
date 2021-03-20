import React from 'react'
import { useSelector } from 'react-redux'
import { 
  // toggleWordpressSearch,
  toggleWordpressAdminLinks,
  goHome,
} from '../redux/app/actions'
import clsx from 'clsx'
import {
  makeStyles,
  Avatar,
} from '@material-ui/core/'
import {
  SpeedDial,
  SpeedDialAction,
} from '@material-ui/lab/'
import { 
  theme,
  IconWordPress,
  IconHome,
} from '../theme'

const useStyles = makeStyles((theme) => ({
  dialup: {
    transform: 'translateZ(0px)',
    flexGrow: 1,
  },
  exampleWrapper: {
    position: 'relative',
    marginTop: theme.spacing(2),
  },
  speedDial: {
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
      left: theme.spacing(2),
    },
  },
}))

const actions = [

  {
    name: `Home`,
    icon: <IconHome fill={ theme.palette.primary.main } />, 
    onClick: (e) => {
      e.preventDefault()
      goHome()
    } 
  },
  
  {
    name: `WordPress`,
    icon: <IconWordPress fill={ theme.palette.primary.main } />, 
    onClick: (e) => {
      e.preventDefault()
      toggleWordpressAdminLinks( true )
    } 
  },
]

export default function Dialup() {

  const classes = useStyles()
  const appSlice = useSelector(state => state.app)
  const {
    logo,
  } = appSlice
  const [open, setOpen] = React.useState( false )

  const handleClose = () => {
    setOpen( false )
  }

  const handleOpen = () => {
    setOpen( true )
  }

  return <div className={classes.dialup}>
      <div className={ clsx(classes.exampleWrapper) }>
        <SpeedDial
          open={ open }
          ariaLabel={ `Dialup` }
          direction={ 'right' }
          className={ classes.speedDial }
          icon={<Avatar src={ logo } alt={ `home` } />}
          onClose={ handleClose }
          onOpen={ handleOpen }>
          {actions.map((action) => (
              <SpeedDialAction
                key={ action.name }
                tooltipPlacement={ `bottom-start` }
                icon={ action.icon }
                tooltipTitle={ action.name }
                onClick={ action.onClick }
              />
          ))}
        </SpeedDial>
      </div>
    </div>
}

/*
          onClick={ (e) => {
            e.preventDefault()
            if (e.target.alt === `home`){
              window.open( `/`, `_self` )
            }
          }}
*/
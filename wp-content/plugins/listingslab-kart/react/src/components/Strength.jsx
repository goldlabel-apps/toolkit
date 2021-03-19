import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { setStrength } from '../redux/app/actions'
import {
    makeStyles,
    Slider,
    Typography,
} from '@material-ui/core/'
// import { Icon } from '../theme'

const useStyles = makeStyles(theme => ({
  strengthWrap: {
    textAlign: 'center',
    marginTop: theme.spacing(4),
    width: '100%',
  },
  strengthSlider: {
    width: '90%',
    margin: 'auto',
    marginBottom: theme.spacing(3),
  },
  lightFont:{
    fontWeight: 'lighter',
  },
  perDay:{

  },
  noBg:{
    background: 'none',
    border: 'none',
    boxShadow: 'none',
  },
}))

const strengths = [
  {
    value: 1,
    label: 'Mild',
  },
  {
    value: 2,
    label: 'Moderate',
  },
  {
    value: 3,
    label: 'Stronger',
  },
]


export default function Strength() {
  
  const classes = useStyles()
  const appSlice = useSelector(state => state.app)
  const {
    strength,
  } = appSlice

  React.useEffect(() => {
  }, [])

  return <div className={ clsx (classes.strengthWrap )}>
            <div className={ clsx (classes.strengthSlider )}>
              <Typography 
                gutterBottom
                className={ clsx (classes.lightFont )}
                variant={ `h6` } >
              { strength } x 20mg gummy/day
              </Typography>
              <Slider
                color={ `primary` }
                value={ strength }
                step={ 1 }
                min={1}
                max={3}
                marks={ strengths }
                onChange={(e, newValue) => {
                  e.preventDefault()
                  setStrength( newValue )
                }}
              />
              
          </div>
        </div>
}


import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
  subscribeTings,
  getTingFromId,
} from '../redux/pingpong/actions'
import {
    makeStyles,
    useScrollTrigger,
    Typography,
    CardContent,
    Grid,
} from '@material-ui/core/'
import {
  TingPanel,
  TingFilters,
  TingDetail,
} from './'

const useStyles = makeStyles(theme => ({
  card:{
    // margin: theme.spacing(),
    // minHeight: 325,
  },
  btnTxt: {
    marginRight: theme.spacing(),
    marginLeft: theme.spacing(),
  },
  noShadow: {
    boxShadow: 'none',
  },
  title: {
    color: theme.palette.primary.main,
  }
}))

function ElevationScroll(props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

export default function PingPong(props) {

  const classes = useStyles()
  const pingpongSlice = useSelector(state => state.pingpong)
  React.useEffect(() => {
        // console.log ('pingpongSlice', pingpongSlice)
        const {
          subscribedTings,
          subscribingTings,
        } = pingpongSlice 
        if ( !subscribedTings && !subscribingTings ) subscribeTings()
    }, [ pingpongSlice ]) 

  
  const {
    tingId,
    tings,
  } = pingpongSlice

  const ting = getTingFromId( tingId )
  let nothingSelected = false
  if (!ting) nothingSelected = true

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <CardContent>
          <TingFilters/>
        </CardContent>
      </ElevationScroll>

        <Grid container>

        { nothingSelected ? null : <Grid item xs={ 6 } className={ clsx( classes.none ) }>
            <TingDetail />
          </Grid> }


          <Grid item xs={ nothingSelected ? 12 : 6 } >
            { tings.map ((item, i) => {
              if ( i > 1 ) return null
              return  <TingPanel ting={ item } key={ `ting_${i}` }>
                        <Typography>
                        { item.fingerprint }
                        </Typography>
                      </TingPanel>
            })}
          </Grid>
                    </Grid>

    </React.Fragment>
  )
}

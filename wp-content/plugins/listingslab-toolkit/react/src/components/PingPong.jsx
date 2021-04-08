import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
  subscribeTings,
  getTingFromId,
} from '../redux/pingpong/actions'
import {
    makeStyles,
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
        <CardContent>
          <TingFilters/>
        </CardContent>
        <Grid container>
          <Grid item xs={ nothingSelected ? 12 : 6 } >
            { tings.map ((item, i) => {
              if ( i > 5 ) return null
              return  <TingPanel ting={ item } key={ `ting_${i}` } />
            })}
          </Grid>
           { nothingSelected ? null : <Grid item xs={ 6 } className={ clsx( classes.none ) }>
            <TingDetail />
          </Grid> }
        </Grid>
    </React.Fragment>
  )
}

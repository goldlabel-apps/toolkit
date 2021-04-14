import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
  subscribeTings,
  getTingFromId,
  openFirst,
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
          openedFirst,
          tings,
        } = pingpongSlice 
        if ( !subscribedTings && !subscribingTings ) subscribeTings()
        if ( !openedFirst && tings.length) {
          openFirst()
        }
    }, [ pingpongSlice ]) 
  
  const {
    tingId,
    tings,
    selectedHost,
  } = pingpongSlice

  const ting = getTingFromId( tingId )
  let nothingSelected = false
  if (!ting) nothingSelected = true

  return <React.Fragment>
          <CardContent>
            <TingFilters/>
          </CardContent>
          <Grid container>
            { !nothingSelected ? null : <Grid item xs={ 12 } >
              { tings.map ((item, i) => {
                if (item.host === selectedHost || selectedHost === `All` ){
                  return  <TingPanel ting={ item } key={ `ting_${i}` } />
                }
                return null
              })}
              </Grid> }
             { nothingSelected ? null : <Grid item xs={ 12 } className={ clsx( classes.none ) }>
              <TingDetail />
            </Grid> }
          </Grid>
        </React.Fragment>
}

import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
  subscribeTings,
} from '../redux/pingpong/actions'
import {
    makeStyles,
    useScrollTrigger,
    Typography,
    Box,
    Container,
    CardContent,
} from '@material-ui/core/'
import {
  TingPanel,
  TingFilters,
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
  const {
    tings,
  } = pingpongSlice

  React.useEffect(() => {
        const {
          subscribedTings,
          subscribingTings,
        } = pingpongSlice 
        if ( !subscribedTings && !subscribingTings ) subscribeTings()
    }, [pingpongSlice])

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <CardContent>
          <TingFilters/>
        </CardContent>
      </ElevationScroll>
      <Container>
        <Box className={ clsx( classes.none ) }>
          { tings.map ((item, i) => {
            return  <TingPanel ting={ item } key={ `ting_${i}` }>
                  <Typography>
                  { item.fingerprint }
                  </Typography>
                </TingPanel>
          }) }
        </Box>
      </Container>
    </React.Fragment>
  )
}

import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
  makeStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
  Link,
  AppBar, 
  Toolbar,
  Tooltip,
  IconButton,
} from '@material-ui/core/'
import { Icon } from '../theme'
import {
  toggleAccordian,
} from '../redux/pingpong/actions'
import {
  gotoURL,
} from '../redux/app/actions'
import {
  getTingTimeAgo,
} from '../lib'
import {
  Message,
} from './'

const useStyles = makeStyles((theme) => ({
  tingAccordion: {
    width: '100%',
  },
  grow:{
    flexGrow: 1,
  },
  btnTxt: {
    marginRight: theme.spacing(),
    marginLeft: theme.spacing(),
    textTransform: 'none',
  },
  link: {
    cursor: 'pointer',
  },
  blockType:{
    display: 'block',
  },
  heading: {
    textTransform: 'uppercase',
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  bottomPad:{
    margin: theme.spacing(),
  },
  noShadow: {
    boxShadow: 'none',
  },
}))

export default function TingAccordion( props ) {

  const classes = useStyles()
  const { ting } = props
  if ( !ting ) return null

  const {
    browserName,
    browserMajor,
    host,
    path,
    docTitle,
    favourite,
  } = ting
  const pingpongSlice = useSelector(state => state.pingpong)
  const {
    expandedAccordians,
    messages,
  } = pingpongSlice
  const {
    historyOpen,
    messagesOpen,
    deviceOpen,
  } = expandedAccordians

  return <div className={ clsx( classes.tingAccordion ) }>

          <Grid container>
            

            <Grid item xs={ 12 }>

                <Accordion 
                  
                  expanded={ historyOpen }
                  onChange={ (e, newExpanded)=> {
                    e.preventDefault()
                    toggleAccordian( `historyOpen` )
                  }}>
                  <AccordionSummary
                    expandIcon={ <Icon icon={ `leveldown` } color={ `primary` }/> }
                    aria-controls={ `Latest` }
                    id={ `Latest-header` }>
                    <Typography className={ classes.heading }></Typography>
                  </AccordionSummary>
                  <AccordionDetails className={ clsx( classes.blockType ) }>

                 
                   
                   <Typography variant={ `body2` }>
                     favourite? { favourite ? `yes` : `no` }
                   </Typography>
                   
                    <Typography variant={ `body1` }>
                      <Link 
                        className={ clsx( classes.link ) }
                        onClick={ (e) => {
                          e.preventDefault()
                          gotoURL( `${ process.env.REACT_APP_PROTOCOL }${ host }${ path }`, `_blank` )
                        }}>
                          { host }{ path }
                      </Link>
                    </Typography>

                    <Typography variant={ `body1` }>
                      { docTitle !== `dev server` ? docTitle : `` }
                    </Typography>

                    <Typography variant={ `body2` }>
                      { getTingTimeAgo( ting ) }
                    </Typography>
                    

                  </AccordionDetails>
                </Accordion>
            </Grid>

            
            
            <Grid item xs={ 12 }>

              <Grid container>
                <Grid item xs={ 12 } sm={ 6 }>
                    <Accordion 
                      expanded={ messagesOpen }
                      onChange={ (e, newExpanded)=> {
                        e.preventDefault()
                        toggleAccordian( `messagesOpen` )
                      }}>
                      <AccordionSummary
                        expandIcon={ <Icon icon={ `leveldown` } color={ `primary` }/> }
                        aria-controls={ `device` }
                        id={ `device-header` }>
                        <Typography className={ classes.heading }>Messages</Typography>
                      </AccordionSummary>

                      <AccordionDetails className={ clsx( classes.blockType ) }>
                        <Message message={ messages[0] } />
                      </AccordionDetails>
                    
                    </Accordion>
                </Grid>

                <Grid item xs={ 12 } sm={ 6 }>
                      <Accordion 
                        expanded={ deviceOpen }
                        onChange={ (e, newExpanded)=> {
                          e.preventDefault()
                          toggleAccordian( `deviceOpen` )
                        }}>
                        <AccordionSummary
                          expandIcon={ <Icon icon={ `leveldown` } color={ `primary` }/> }
                          aria-controls={ `device` }
                          id={ `device-header` }>
                          <Typography className={ classes.heading }>Device</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={ clsx( classes.blockType ) }>
                          <Typography>
                            <small>Browser</small> { browserName } { browserMajor }
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    
                  
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <AppBar 
              className={ classes.none }
              position={ `static` }
              color={`default`}
            >
            <Toolbar >
                
                <Tooltip title={ `Favourite` }>
                  <IconButton
                      onClick={ (e) => {
                        e.preventDefault()
                        console.log ('Favourite')
                      }}>
                    <Icon icon={ `favourite` } color={ `primary` } />  
                  </IconButton>
                </Tooltip>
                
                <Tooltip title={ `Delete` }>
                  <IconButton
                      onClick={ (e) => {
                        e.preventDefault()
                        if ( window.confirm('really really?') ){
                          // deleteTing ( tingId )
                        }
                      }}>
                      <Icon icon={ `delete` } color={ `primary` } />
                  </IconButton>
                </Tooltip>
            </Toolbar>
          </AppBar>

        </div>
}


/*
<Grid item xs={ 12 } sm={ 6 }>
              <Accordion 
                expanded={ otherOpen }
                onChange={ (e, newExpanded)=> {
                  e.preventDefault()
                  toggleAccordian( `other` )
                }}>
                <AccordionSummary
                  expandIcon={ <Icon icon={ `leveldown` } color={ `primary` }/> }
                  aria-controls={ `other` }
                  id={ `other-header` }>
                  <Typography className={ classes.heading }>Other</Typography>
                </AccordionSummary>
                <AccordionDetails className={ clsx( classes.blockType ) }>
                  <div><Typography>
                  <small>path</small> { path}
                  </Typography></div>
                </AccordionDetails>
              </Accordion>
            </Grid>

<pre>
                          { JSON.stringify( messages, null, 2 ) }
                        </pre>



<Accordion 
                    expanded={ locationOpen }
                    onChange={ (e, newExpanded)=> {
                      e.preventDefault()
                      toggleAccordian( `locationOpen` )
                    }}>
                    <AccordionSummary
                      expandIcon={ <Icon icon={ `leveldown` } color={ `primary` }/> }
                      aria-controls={ `location` }
                      id={ `location-header` }>
                      <Typography className={ classes.heading }>Location</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={ clsx( classes.blockType ) }>
                      <div><Typography>
                      <small>continentCode</small> { continentCode}
                      </Typography></div>
                      <div><Typography>
                        <small>isp</small> { isp }
                      </Typography></div>
                    </AccordionDetails>
                  </Accordion>


*/
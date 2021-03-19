import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { 
  toggleDebugga,
  toggleOverlay,
} from '../redux/app/actions'
import {
    makeStyles,
    Dialog,
    DialogContent,
    DialogTitle,
    Typography,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
} from '@material-ui/core/'
import { Icon } from '../theme'

// import { Strength } from './'

const useStyles = makeStyles(theme => ({
  debugger: {
  },
  media: {
    height: 0,
    paddingTop: '20%', // 56.25%=16:9
    marginBottom: theme.spacing(),
  },
  titleText:{
    marginTop: theme.spacing(),
  },
  grow: {
    flexGrow: 1,
  },
  dialogTitle:{
  },
  dialogTitleIcon:{
    marginRight: theme.spacing(2),
  },
  lightFont:{
    fontWeight: 'lighter',
  },
  trigger:{
    cursor: 'pointer',
  },
  margin10:{
    margin: 10,
  },
}))

export default function Debugga() {
  
  const classes = useStyles()
  const appSlice = useSelector(state => state.app)
  const {
    debugga,
  } = appSlice

  return <Dialog
            fullWidth
            maxWidth={ `xs` }
            open={ debugga }
            onClose={ () => { toggleDebugga( false )} }>
               <DialogTitle className={ clsx (classes.dialogTitle )}>
                 <Grid container>

                   
                   <Grid item>
                     <Typography 
                        gutterBottom
                        className={ clsx ( classes.lightFont, classes.titleText )}
                        variant={ `h6` } >
                          { process.env.REACT_APP_APP }  
                     </Typography>
                   </Grid>

                   <Grid item className={ clsx (classes.grow )} />
                   <Grid item>
                     <IconButton 
                       color={ `primary` }
                       className={ classes.none }
                       onClick={ (e) => {
                          e.preventDefault()
                          toggleDebugga( false )
                       }}>
                       <Icon icon={ `close` } />
                     </IconButton>
                   </Grid>
                 
                 </Grid>
                
               </DialogTitle>

               <DialogContent>
                   <List dense>
                     <ListItem 
                        button
                        onClick={ (e) => {
                        window.open(`/wp-admin/`, `_self`)
                        toggleOverlay( true )
                        toggleDebugga( false )
                      }}>
                        <ListItemText 
                          primary={ `WordPress Dashboard` }
                        />
                      </ListItem>

                      <ListItem 
                        button
                        onClick={ (e) => {
                        window.open(`/wp-admin/admin.php?page=advicator`, `_self`)
                        toggleOverlay( true )
                        toggleDebugga( false )
                      }}>
                        <ListItemText 
                          primary={ `Plugin Settings` }
                        />
                      </ListItem>

                      <ListItem 
                        button
                        onClick={ (e) => {
                        window.open(`https://github.com/listingslab-software/advicator`, `_blank`)
                        toggleDebugga( false )
                      }}>
                        <ListItemText 
                          primary={ `GitHub Repository` }
                        />
                      </ListItem>

                      <ListItem 
                        button
                        onClick={ (e) => {
                        window.open(`https://github.com/listingslab-software/advicator/tree/develop/docs`, `_blank`)
                        toggleDebugga( false )
                      }}>
                        <ListItemText 
                          primary={ `Learn More` }
                        />
                      </ListItem>

                   </List>               
               </DialogContent>
        </Dialog>
}

/*

<Typography 
                      gutterBottom
                      className={ clsx (classes.lightFont )}
                      variant={ `body1` } >
                     Links
                   </Typography>

<Typography 
                      gutterBottom
                      className={ clsx (classes.lightFont )}
                      variant={ `body2` } >
                      Adjust Concentration with the Strength component. 
                   </Typography>
                   
                   <Strength />
                 <pre>
                   { JSON.stringify( postObj, null, 2 ) }
                 </pre>

  console.log ('post', post)

  const [anchorEl, setAnchorEl] = React.useState( null )
  
  const handleTap = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

*/
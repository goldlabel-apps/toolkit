import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
    Button,
    Menu,
    MenuItem,
} from '@material-ui/core/'
import {
  selectHost,
} from '../redux/pingpong/actions'
import { Icon } from '../theme'

const useStyles = makeStyles(theme => ({
  btnTxt: {
    marginLeft: theme.spacing(),
    marginRight: theme.spacing(),
    textTransform: 'none',
  },
}))

export default function SimpleMenu( props ) {

  const { options } = props
  if ( !options ) return null

  const classes = useStyles()
  const {
    id, 
    label,
    getList,
  } = options
  const list = getList()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl( null )
  }


  return <div className={ clsx( classes.card ) }>
      
      <Button 
        aria-controls={ id }
        aria-haspopup={ "true" }
        onClick={ handleClick }>
        <span className={ clsx( classes.btnTxt ) }>
          { label }
        </span>
        <Icon icon={`leveldown`} />
      </Button>
      
      <Menu
        id={ id }
        anchorEl={ anchorEl }
        keepMounted
        open={ Boolean( anchorEl )}
        onClose={ handleClose }
      >
        
        { list.map( (item, i) => {
          const { host } = item
          return   <MenuItem 
                    key={ `host_${i}` }
                    onClick={ (e) => {
                       e.preventDefault()
                       selectHost ( host ) 
                       setAnchorEl( null )
                    }}>
                      { host }
                   </MenuItem>
        })}
      </Menu>
    </div>
}

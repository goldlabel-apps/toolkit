import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Account from './jsx/Account'
import IconPush2Talk from '@material-ui/icons/TouchApp'
import IconDevice from '@material-ui/icons/PhonelinkSetup'
import IconLocation from '@material-ui/icons/PersonPinCircle'
import IconPrivacy from '@material-ui/icons/VerifiedUserOutlined'

const styles = theme => ({
    iconButton: {
        width: 24,
        height: 24,
    },
    white: {
        color: 'white',
    }
})

class Icon extends Component {

    render() {
        const {
            icon,
            color,
            classes,
        } = this.props
        let iconColor = `inherit`
        if (color) {
            iconColor = color
        }
        switch (icon) {

            case `none`:
                return null

            case 'account': 
                return <Account className={classes.iconButton} color={iconColor} />

            case `push2talk`:
                return (<IconPush2Talk color={iconColor} />) 

            case `push2Talk`:
                return (<IconPush2Talk color={iconColor} />) 

            case `location`:
                return (<IconLocation color={iconColor} />) 
            
            case `device`:
                return (<IconDevice color={iconColor} />)

            case `privacy`:
                return (<IconPrivacy color={iconColor} />)
   
            default: {
                return ( null )
            }
        }
    }
}

export default (
    withStyles(styles, { withTheme: true })(Icon)
)

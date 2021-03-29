import React from 'react'
import clsx from 'clsx' 
import { useSelector } from 'react-redux' 
import { 
  toggleGDPR,
  toggleDialog,
} from '../redux/pingpong/actions'
import {
    makeStyles,
    Avatar,
    CardHeader,
    Button,
    CardContent,
    CardActions,
    Typography,
} from '@material-ui/core/'


const useStyles = makeStyles( theme => ({
	messageBox: {
	},
	btnTxt: {
		color: 'white',
	}
}))

const initialMessage = {
	from: `Listingslab`,
	to: `You`,
	message: `A GDPR Privacy Policy is an important part of moving towards GDPR compliance. This document is an informative, detailed and concise Privacy Policy that informs users of the rights they have under the GDPR. If your business has a presence in the EU, provides goods or services in the EU, or tracks users and behaviours in the EU then it is likely you will require a Privacy Policy that is GDPR compliant. `,
	read: false,
}

const {
	from,
	to,
	message,
} = initialMessage


export default function MessageGDPR( props ) {
	
	const classes = useStyles()
	const pingpongSlice = useSelector(state => state.pingpong)
    const {
      siteAvatar,
    } = pingpongSlice


	return	<div className={clsx( classes.messageBox )}>
				<CardHeader 
					avatar={ <Avatar src={ siteAvatar }/> }
					title={ `${from}` }
					subheader={ `${to}` }
				/>
				<CardContent>
					<Typography>
						{ message } 
					</Typography>
				</CardContent>
				<CardActions>
						
						<Button 
							color={	`primary` }
							variant={ `contained` }
							onClick={ ( e ) => {
								e.preventDefault()
								toggleGDPR( true )
								toggleDialog( false )
							}}>
							<span className={clsx( classes.btnTxt )}>Accept</span>
						</Button>

					</CardActions>
			</div>
}

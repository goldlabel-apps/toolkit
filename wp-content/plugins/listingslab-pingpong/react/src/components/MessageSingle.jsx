import React from 'react'
import clsx from 'clsx' 
import { useSelector } from 'react-redux' 
import { 
  // toggleDialog,
} from '../redux/pingpong/actions'
import {
    makeStyles,
    Avatar,
    CardHeader,
    Button,
    CardContent,
    CardActions,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Badge,
} from '@material-ui/core/' 
import { 
	Icon,
} from '../theme'

const useStyles = makeStyles( theme => ({
	messageBox: {
	},
	plainAccordion: {
		boxShadow: 'none',
		width: '100%',
	},
	btnTxt: {
		color: 'white',
	},
	grow: {
		flexGrow: 1,
	},
	blockify: {
		display: 'block',
	}
}))

export default function MessageSingle( props ) {
	
	const classes = useStyles()
	const pingpongSlice = useSelector(state => state.pingpong)
    const {
     	gdprMessage,
    } = pingpongSlice

	const {
		from,
		subject,
		message,
		avatar,
	} = gdprMessage

	const isOpen = false

	return	<div className={clsx( classes.messageBox )}>
				
				
				
				<Accordion 
					defaultExpanded={ isOpen }
					className={clsx( classes.plainAccordion )}>


					<AccordionSummary
			          expandIcon={ <Icon icon={`panel-toggle`} color={ `primary` }/> }
			          aria-controls={ `Help` }
			          id={ `help` } >
				        <CardHeader 
							avatar={ <Badge badgeContent={ 1 } color={ `primary` } >
										<Avatar src={ avatar }/>
									</Badge> }
							title={ `${from}` }
							subheader={ `${subject}` }
						/>
        			</AccordionSummary>
        			
        			<AccordionDetails className={ clsx ( classes.blockify) }>
						<CardContent>
							<Typography>
								{ message } 
							</Typography>
							
						</CardContent>

						<CardActions>
							<div className={ clsx ( classes.grow) } />

							<Button 
								color={	`primary` }
								variant={ `outlined` }
								onClick={ ( e ) => {
									e.preventDefault()
									
								}}>
								<span className={clsx( classes.none )}>
									Mark as read
								</span>
							</Button>


							<Button 
								color={	`primary` }
								variant={ `contained` }
								onClick={ ( e ) => {
									e.preventDefault()
									
								}}>
								<span className={clsx( classes.btnTxt )}>Accept</span>
							</Button>
						</CardActions>
					</AccordionDetails>
				</Accordion>

			</div>
}
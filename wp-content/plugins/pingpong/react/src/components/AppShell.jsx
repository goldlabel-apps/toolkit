import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Typography,
    Avatar,
    Accordion,
	AccordionSummary,
	AccordionDetails,
	CardHeader,
} from '@material-ui/core/'
import { Icon } from '../theme'

const useStyles = makeStyles(theme => ({
	basic: {
	},
	accordion: {
		border: 'none',
		boxShadow: 'none',
		borderRadius: 'none',
		background: 'none',
	},
	card: {
	},
	btnTxt:{
		marginLeft: theme.spacing(),
		marginRight: theme.spacing(),
	},
	white: {
		color: 'white',
	},
}))

export default function AppShell( props ) {
	
	const classes = useStyles()
	const { children } = props
	// const theme = useTheme()
	// const secondary = theme.palette.secondary.main
	const appSlice = useSelector(state => state.app)
	const { 
		logo,
		wpBloginfo,
		customisedTheme,
	} = appSlice

    React.useEffect(() => {
	}, [])

	return	<div className={classes.basic}>
				<div style={{ background: customisedTheme.darkBg }}>
				<Accordion
					// expanded
					className={ clsx( classes.accordion ) }>
			        <AccordionSummary 
			        	expandIcon={<Icon 
	    								icon={`panel-toggle`} 
	    								color={ `error` } 
	    							/>} >
	    				<CardHeader 
	    					disableTypography
	    					avatar={ <Avatar src={ logo } /> }
	    					title={ <Typography 
	    								style={{ color: customisedTheme.darkText }}
	    								variant={ `h6` }>
						          		{ wpBloginfo.name }
						          </Typography> }
			          		subheader={ <Typography 
			          						style={{ color: customisedTheme.darkText }}
			          						variant={ `body1` }>
						          		{ wpBloginfo.description }
						          	</Typography> }
	    				/>
			          
			        </AccordionSummary>
			        <AccordionDetails>
			        	{ children }
			        </AccordionDetails>
			      </Accordion>
				</div>
	</div>
}
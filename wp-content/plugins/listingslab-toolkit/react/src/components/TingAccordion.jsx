import React from 'react'
import clsx from 'clsx'
import {
  makeStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from '@material-ui/core/'
import { Icon } from '../theme'


const useStyles = makeStyles((theme) => ({
  tingAccordion: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))

export default function TingAccordion( props ) {

  const classes = useStyles()
  const { ting } = props
  if ( !ting ) return null

  const {
    browserName,
    browserMajor,
  } = ting

  return <div className={ clsx( classes.tingAccordion ) }>
      <Accordion
        expanded
      >
        <AccordionSummary
          expandIcon={ <Icon icon={ `leveldown` } /> }
          aria-controls={ `device` }
          id={ `device-header` }
        >
          <Typography className={ classes.heading }>
            Device
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <small>Browser</small> { browserName } { browserMajor }
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={ <Icon icon={ `leveldown` } /> }
          aria-controls={ `location` }
          id={ `location-header` }
        >
          <Typography className={ classes.heading }>
            Location
           </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            location
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={ <Icon icon={ `leveldown` } /> }
          aria-controls={ `other` }
          id={ `other-header` }
        >
          <Typography className={ classes.heading }>
            Other
           </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            other
          </Typography>
        </AccordionDetails>
      </Accordion>


      
    </div>
}

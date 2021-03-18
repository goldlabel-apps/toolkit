import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { gotoKart } from '../lib'
import {
    makeStyles,
    Avatar,
    Button,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Grid,
    Typography,
} from '@material-ui/core/'
// import { Icon } from '../theme'
import { Strength } from './'

const useStyles = makeStyles(theme => ({
  card: {

  },
  padded:{
    margin: theme.spacing(2),
  },
  noBg:{
    background: 'none',
    border: 'none',
    boxShadow: 'none',
  },
  upsellAvatar:{
    height: 100,
    width: 100,
  },
  mightyButton:{
    padding: theme.spacing(),
  },

  lightFont:{
    fontWeight: 'lighter',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 56.25%=16:9
    marginBottom: theme.spacing(),
  },
  trigger:{
    cursor: 'pointer',
  },
  btnText:{
    marginLeft: theme.spacing(),
    marginRight: theme.spacing(),
  },
  grow: {
    flexGrow: 1,
  },
  margin10:{
    margin: 10,
  },
}))

export default function Kart() {
  
  const classes = useStyles()
  const appSlice = useSelector(state => state.app)
  const {
    postObj,
    affiliateId,
    strength,
  } = appSlice
  const {
    post_title,
    post_excerpt,
    product_price,
    product_image,
    advicator_upsell_calm,
    advicator_upsell_relief,
    advicator_upsell_relax,
  } = postObj

  const getDescriptionText = flavor => {
    let strengthText = 'Moderate'
    if ( strength === 1 ) strengthText = 'Mild'
    if ( strength === 3 ) strengthText = 'Stronger'
    let priceText = <Typography variant={ `h6` } className={ clsx (classes.lightFont )}>
                      { flavor } { strengthText } Subscribtion
                    </Typography>
    return priceText
  }



  const getPriceText = flavor => {

   const {
     advicator_upsell_calm,
     advicator_upsell_relax,
     advicator_upsell_relief
   } = postObj

   let price, prices  
   if ( flavor === `Relax` ){
     prices = advicator_upsell_relax.prices
   }
   if ( flavor === `Calm` ){
     prices = advicator_upsell_calm.prices
   }
   if ( flavor === `Relief` ){
     prices = advicator_upsell_relief.prices
   }

    if (strength === 1) price = prices.mild
    if (strength === 2) price = prices.moderate
    if (strength === 3) price = prices.stronger
    let priceText = <Typography variant={ `button` } className={ clsx (classes.none )}>
                      £{ price } per month
                    </Typography>
    return priceText
  }

  React.useEffect(() => {

  }, [ appSlice ])

  return <Card className={ clsx (classes.card, classes.noBg )}>
            
            <CardHeader 
              disableTypography
              title={ <Typography 
                        className={ clsx (classes.lightFont )}
                        variant={ `h3` }
                      >
                        { post_title }
                      </Typography>
                    }
              subheader={ null }
              
            />

            <CardContent>

            <Grid container>
              <Grid item xs={ 3 }>
                  <CardMedia
                    className={ classes.media }
                    image={ product_image }
                    title={ post_title }
                  />
                  <Typography 
                      gutterBottom
                      className={ clsx (classes.lightFont )}
                      variant={ `body1` }>
                    { post_excerpt }
                  </Typography>
                  <Button
                    fullWidth
                    className={ classes.none }
                    variant={`text`}
                    color={ `default` }
                    onClick={ () => {
                      gotoKart(`/cart/?afiiliateId=${ affiliateId }`)
                    }}>
                    Buy now for £{ product_price }
                  </Button>

              </Grid>


              <Grid item xs={ 9 }>

                  <Typography 
                      className={ clsx (classes.lightFont, classes.padded )}
                      variant={ `h5` }
                    >
                    OR... choose your concentration and subscribe
                   </Typography>
   
                   <Strength />

                  <List dense>
                    
                    <ListItem 
                      button
                      onClick={ () => {
                      gotoKart(`/cart/?afiiliateId=${ affiliateId }`)
                    }}>

                      <ListItemText 
                        primary={ getDescriptionText(`Relief`) } 
                        secondary={ getPriceText(`Relief`) } 
                      />

                       <ListItemIcon>
                         <Avatar 
                           className={ clsx (classes.upsellAvatar )}
                           src={ advicator_upsell_relief.image } />
                       </ListItemIcon>

                      

                    </ListItem>

                    <ListItem 
                      button
                      onClick={ () => {
                      gotoKart(`/cart/?afiiliateId=${ affiliateId }`)
                    }}>

                    <ListItemText 
                      primary={ getDescriptionText(`Calm`) }
                      secondary={ getPriceText(`Calm`) } 
                    />
                    <ListItemIcon>
                         <Avatar 
                           className={ clsx (classes.upsellAvatar )}
                           src={ advicator_upsell_calm.image } />
                    </ListItemIcon>
                      
                    </ListItem>


                    <ListItem 
                      button
                      onClick={ () => {
                      gotoKart(`/cart/?afiiliateId=${ affiliateId }`)
                    }}>
                      <ListItemText 
                        primary={ getDescriptionText(`Relax`) } 
                        secondary={ getPriceText(`Relax`) } 
                      />
                      
                      <ListItemIcon>
                         <Avatar 
                           className={ clsx (classes.upsellAvatar )}
                           src={ advicator_upsell_relax.image } />
                       </ListItemIcon>
                      
                    </ListItem>

                  </List>

              </Grid>


            </Grid>

            </CardContent>

            

          </Card>
}


/*
<CardActions>
              <div className={ clsx( classes.grow) } />
              
              
            </CardActions>
*/
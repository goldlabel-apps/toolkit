
import { 
  toggleOverlay,
} from '../../redux/app/actions'

const gotoKart = endpoint => {
	console.log ('gotoKart overlay')
	toggleOverlay( true )
	window.open( endpoint, `_self`)
	return true
}

export default gotoKart

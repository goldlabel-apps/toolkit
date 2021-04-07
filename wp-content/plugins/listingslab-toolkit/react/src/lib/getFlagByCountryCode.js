
import { getStore } from '../'

const getFlagByCountryCode = countryCode => {
    
    if ( !countryCode ) return false    
	const state = getStore().getState()
	const {
        environment,
    } = state.app

    // console.log ('environment', environment)

    const { baseurl } = environment    
    return `${ baseurl }svg/flags/${ countryCode.toLowerCase() }.svg`
}

export default getFlagByCountryCode

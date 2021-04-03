
import { getStore } from '../'

const getFlagByCountryCode = countryCode => {
	let flagSrcPath = ``
	const state = getStore().getState()
	const {
        toolkitData,
    } = state.app
    const { wpurl } = toolkitData
    flagSrcPath = `${ wpurl }/wp-content/plugins/listingslab-toolkit/public/`
    if ( !countryCode ) return `${ flagSrcPath }svg/flags/gb-sct.svg`
    let flagSrc = `${ flagSrcPath }svg/flags/${ countryCode.toLowerCase() }.svg`
    return flagSrc
}

export default getFlagByCountryCode

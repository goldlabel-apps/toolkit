
import { getStore } from '../'

const getFlagByCountryCode = countryCode => {

	let flagSrcPath = ``
	const state = getStore().getState()
	const {
        wpBloginfo,
    } = state.app

    const { wpurl } = wpBloginfo
    flagSrcPath = `${ wpurl }/wp-content/plugins/toolkit-admin/public/`
    
    if ( !countryCode ) return `${ flagSrcPath }/svg/locale_flags/gb-sct.svg`

    let flagSrc = `${ flagSrcPath }/svg/flags/${ countryCode.toLowerCase() }.svg`
    // console.log ( `flagSrc`, flagSrc )
    return flagSrc
}

export default getFlagByCountryCode
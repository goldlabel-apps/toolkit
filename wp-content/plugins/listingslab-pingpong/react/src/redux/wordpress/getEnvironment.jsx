import pJSON from '../../../package.json'

let postData = false
let blogInfo = false
let customLogo = false

if ( window.postData ) postData = window.postData
if ( window.blogInfo ) blogInfo = window.blogInfo
if ( window.customLogo ) customLogo = window.customLogo

export const getEnvironment = () => {
	let environment = {
		appVersion: pJSON.version,
		host: window.location.host,
		postData,
		blogInfo,
		customLogo,
	}
	if ( !blogInfo ) {
		return {
			...environment,
			assetPath: `/`,
		}
	}
	return {
			...environment,
			assetPath: `/wp-content/plugins/listingslab-toolkit/react/build/`,
	}
}

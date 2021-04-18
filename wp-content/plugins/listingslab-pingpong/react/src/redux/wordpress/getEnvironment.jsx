import pJSON from '../../../package.json'

export const localDev = {
    "name": "Site Title",
    "description": "Site Description",
    "url": "/",
    "admin_email": "listingslab@gmail.com",
    "avatar": "https://listingslab.com/wp-content/uploads/2021/03/cropped-cropped-logo192-1.png",
}

let postData = {}
if ( window.postData ) postData = window.postData

export const getEnvironment = () => {
	let environment = {
		version: pJSON.version,
		postData,
		host: window.location.host,
		selectedHost: window.location.host,
	}
	let wpData = window.wpData
	if ( !wpData ) {
		return {
			...environment,
			...localDev,
			assetPath: `/`,
		}
	}
	return {
			...environment,
			...wpData,
			assetPath: `/wp-content/plugins/listingslab-toolkit/react/build/`,
	}
}

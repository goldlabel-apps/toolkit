import pJSON from '../../../package.json'

export const localDev = {
    "name": "Site Title",
    "description": "Site Owner",
    "url": "/",
    "admin_email": "test@test.com",
    "avatar": "png/IconToolKit.png",
    "pingpong": true,
}

export const getEnvironment = () => {
	let environment = {
		version: pJSON.version,
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

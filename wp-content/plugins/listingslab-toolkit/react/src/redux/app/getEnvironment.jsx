import pJSON from '../../../package.json'

export const localDev = {
    "name": "Site Title",
    "description": "Site Owner",
    "baseurl": "/",
    "admin_email": "test@test.com",
    "avatar": "https://listingslab.com/wp-content/uploads/2021/03/cropped-ListingslabIcon.png"
}

export const getEnvironment = () => {
	
	let environment = {
		version: pJSON.version,
	}
	let wpData = window.wpData

	if ( !wpData ) {
		environment = {
			...environment,
			...localDev,
		}
	}
	// console.log ('getEnvironment', environment)

	return environment
}


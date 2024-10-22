
import { getStore } from '../'
import moment from 'moment'

export const getTingTimeAgo = ting => {
    if ( !ting ) return false
    const {
        updated
    } = ting
    return moment(updated).fromNow()
}


export const getTingPrimaryStr = ting => {
    if ( !ting ) return false
    const {
        device,
        browserName,
        countryName,
        docTitle,
    } = ting
    let deviceStr = `${countryName ? `${countryName},` : `` } ${browserName ? `${browserName}, ` : `` } ${ device !== `desktop` ? device : `` } ${ docTitle ? docTitle : `` }`
    return deviceStr
}

export const getTingSecondaryStr = ting => {
    if ( !ting ) return false
    const {
        id
    } = ting
    return `id: ${ id }`
}

export const getTingDeviceStr = ting => {
    if ( !ting ) return false
    const {
        device,
        browserName,
    } = ting
    let deviceStr = `${browserName} ${ device }`
    return deviceStr
}

export const getTingHost = ting => {
    if ( !ting ) return false
    const {
        host
    } = ting
    return host
}

export const getTingPage = ting => {
    if ( !ting ) return false
    const {
        path,
        docTitle,
    } = ting
    return `${ path } ${ docTitle }`
}

export const getTingTitle = ting => {
    if ( !ting ) return false
    const {
        showMode
    } = getStore().getState().pingpong
    let tingTitle = `Ting Title`
    if (showMode === `device`) tingTitle = getTingDeviceStr( ting )
    if (showMode === `location`) tingTitle = getTingGeoStr( ting )
    return tingTitle
}

export const getTingSubheading = ting => {
    if ( !ting ) return false
    let tingSubheading = getTingDeviceStr( ting )
    return tingSubheading
}

export const getTingGeoStr = ting => {
    if ( !ting ) return false
    const {
        countryName,
        // continentName,
        city,
    } = ting
    let geoStr = `${ countryName } ${ city }`
    return geoStr
}




/*

const example = {
    "id": "sI6js3jOFEH55Qgq9mvM",
    "ip": "111.206.221.69",
    "lng": "103.93094",
    "countryTld": ".cn",
    "browserName": "Mobile Safari",
    "stateProv": "",
    "osVersion": "9.1",
    "callingCode": "+86",
    "currencyCode": "CNY",
    "browserVersion": "9.0",
    "currencyName": "Yuan Renminbi",
    "lat": "36.56754",
    "created": 1617170332062,
    "host": "listingslab.com",
    "district": "",
    "path": "/big-data-freedom-and-you/",
    "countryCode2": "CN",
    "device": "Apple iPhone",
    "osName": "iOS",
    "organization": "China Unicom Beijing Province Network",
    "zipcode": "",
    "continentName": "Asia",
    "timeZone": "Asia/Shanghai",
    "city": "China",
    "geonameId": "10680273",
    "countryCapital": "Beijing",
    "fingerprint": "listingslab.com_60c1918583d73818dffeeafd29b9a802",
    "isEu": false,
    "languages": "zh-CN,yue,wuu,dta,ug,za",
    "continentCode": "AS",
    "currencySymbol": "¥",
    "countryName": "China",
    "updated": 1617170327425,
    "countryCode3": "CHN",
    "browserMajor": "9",
    "isp": "China Unicom Beijing Province Network"
}

*/
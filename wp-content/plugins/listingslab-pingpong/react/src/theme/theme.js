import { getCustomisedTheme } from '../lib'
const customisedTheme = getCustomisedTheme()

export const theme = { 

  palette: {
    type: 'light',
    primary: {
      main: customisedTheme.darkBg,
    },
    secondary: {
      main: customisedTheme.lightBg,
    },
    success: {
      main: customisedTheme.darkBg,
    },
    info: {
      main: customisedTheme.lightBg,
    },
    // warning:{
    //   main: `#eeeeee`,
    // },
    // error:{
    //   main: `#fff`,
    // },
  }
}

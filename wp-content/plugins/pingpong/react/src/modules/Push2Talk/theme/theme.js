const customisedTheme = {
  darkBg: window.darkBg ? window.darkBg : '#126b72',
  darkText: window.darkText ? window.darkText : '#ffffff',
  lightBg: window.lightBg ? window.lightBg : '#18a3ad',
  lightText: window.lightText ? window.lightText : '#ffffff',
}

export const theme = { 
  palette: {
    type: 'light',
    background: {
      default: customisedTheme.darkBg,
      paper: customisedTheme.darkBg,
    },
    text: {
      primary: customisedTheme.lightText,
      secondary: customisedTheme.lightText,
    },
    primary: {
      main: customisedTheme.darkBg,
    },
    secondary: {
      main: customisedTheme.lightBg,
    },
    error: {
      main: customisedTheme.darkText,
    },
  }
}

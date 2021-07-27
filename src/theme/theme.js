import {extendTheme} from '@chakra-ui/react'
import {createBreakpoints} from '@chakra-ui/theme-tools'




const fonts = {
    body: "Open Sans, sans-serif",
    heading: "Open Sans, sans-serif",
    mono: "Open Sans, sans-serif",
}

// todo - choose the brand colors

const colors = {
    'brand': {
        400: '#141414',
    },
};

const breakpoints = createBreakpoints({
    sm: '20em', // 320px
    md: '30em', // 480
    lg: '37.5em', // 600
    xl: '48em', // 768
    '2xl': '64em', // 1024
})

const theme = extendTheme({
    colors: colors,
    // todo set the focus outline color
    shadows: {
        outline: '0 0 0 3px rgba(66, 153, 225, 0.6);'
    },
    fonts,
    breakpoints,
    styles: {
        global: {
            // todo set the default font color and line height
            "html, body": {
                color: "gray.600",
                lineHeight: "tall",
            },
            a: {
                textDecoration: "none",
            },
            ':focus:not(:focus-visible):not([role="dialog"]):not([role="menu"])': {
                boxShadow: 'none !important'
            }
        }
    }
    // icons: {
    //
    // },
})

export default theme
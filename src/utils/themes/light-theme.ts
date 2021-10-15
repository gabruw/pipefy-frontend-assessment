import COLOR from 'assets/styles/color';

//#endregion

const { PRIMARY, SECONDARY, INFO, NEGATIVE } = COLOR;

const lightTheme = {
    primary: {
        dark: PRIMARY.DARK,
        main: PRIMARY.MEDIUM,
        light: PRIMARY.LIGHT
    },
    secondary: {
        dark: SECONDARY.DARK,
        main: SECONDARY.MEDIUM,
        light: SECONDARY.LIGHT
    },
    info: {
        main: INFO.MEDIUM,
        light: INFO.LIGHT
    },
    error: {
        dark: NEGATIVE.DARK,
        main: NEGATIVE.MEDIUM,
        light: NEGATIVE.LIGHT
    },
    background: {
        paper: SECONDARY.LIGHT,
        default: SECONDARY.LIGHT
    }
};

export default lightTheme;

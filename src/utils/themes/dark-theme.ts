import COLOR from 'assets/styles/color';

//#endregion

const { PRIMARY, SECONDARY, INFO, NEGATIVE } = COLOR;

const darkTheme = {
    primary: {
        dark: SECONDARY.LIGHT,
        main: PRIMARY.MEDIUM,
        light: PRIMARY.LIGHT
    },
    secondary: {
        dark: SECONDARY.MEDIUM,
        main: PRIMARY.LIGHT,
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
        paper: PRIMARY.DARK,
        default: PRIMARY.DARK
    }
};

export default darkTheme;

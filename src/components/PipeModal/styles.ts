//#region Imports

import { darken, makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const toHex = require('colornames');

const useStyles = makeStyles({
    container: {
        width: '100%',
        flexDirection: 'column',
        ...ALIGN.CENTER
    },
    closeContainer: {
        width: '100%',
        ...ALIGN.RIGHT
    },
    iconClose: {
        cursor: 'pointer'
    },
    header: {
        width: '100%',
        ...ALIGN.CENTER,
        alignItems: 'flex-start'
    },
    iconContainer: {
        width: '20%',
        ...ALIGN.LEFT
    },
    iconPipe: {
        width: 120,
        height: 120,
        color: ({ color }: any) => color && darken(toHex(color), 0.5)
    },
    infoContainer: {
        width: '80%',
        marginTop: 12,
        flexWrap: 'wrap',
        ...ALIGN.LEFT
    },
    name: {
        fontSize: 22,
        width: '100%',
        fontWeight: 'bold',
        color: ({ color }: any) => color && darken(toHex(color), 0.3)
    },
    date: {
        width: '100%'
    },
    body: {
        width: 400,
        flexWrap: 'wrap',
        ...ALIGN.CENTER
    },
    cardContainer: {
        width: 300,
        marginBottom: 10,
        ...ALIGN.BETWEEN
    },
    description: {
        width: 450,
        wordBreak: 'break-all',
        ...ALIGN.CENTER
    }
});

export default useStyles;

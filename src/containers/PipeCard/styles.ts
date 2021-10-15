//#region Imports

import ALIGN from 'assets/styles/align';
import { makeStyles, darken, lighten } from '@material-ui/core/styles';

//#endregion

const toHex = require('colornames');

const useStyles = makeStyles((theme) => ({
    card: {
        margin: 5,
        height: 250,
        borderColor: ({ color }: any) => color,
        backgroundColor: ({ color }: any) => lighten(toHex(color), 0.7),
        cursor: ({ isCursorPointer }: any) => (isCursorPointer ? 'pointer' : 'unset')
    },
    cardContent: {
        height: '90%',
        flexWrap: 'wrap',
        flexDirection: 'column',
        ...ALIGN.BETWEEN
    },
    visibility: {
        width: '100%',
        ...ALIGN.LEFT
    },
    iconContainer: {
        ...ALIGN.CENTER
    },
    icon: {
        width: 65,
        height: 65,
        color: ({ color }: any) => darken(toHex(color), 0.3)
    },
    name: {
        fontSize: 17,
        fontWeight: 'bold',
        color: theme.palette.primary.dark,
        ...ALIGN.CENTER
    },
    count: {
        fontSize: 15,
        color: ({ color }: any) => darken(toHex(color), 0.9),
        ...ALIGN.CENTER
    }
}));

export default useStyles;

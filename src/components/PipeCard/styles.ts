//#region Imports

import ALIGN from 'assets/styles/align';
import { makeStyles, darken, lighten } from '@material-ui/core/styles';

//#endregion

const toHex = require('colornames');

const useStyles = makeStyles({
    card: {
        margin: 5,
        height: 250,
        cursor: 'pointer',
        borderColor: ({ color }: any) => color,
        backgroundColor: ({ color }: any) => lighten(toHex(color), 0.7)
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
    icon: {
        width: 65,
        height: 65,
        color: ({ color }: any) => darken(toHex(color), 0.3)
    },
    name: {
        fontSize: 17,
        color: '#000000',
        fontWeight: 'bold'
    },
    count: {
        fontSize: 15,
        color: ({ color }: any) => darken(toHex(color), 0.9)
    }
});

export default useStyles;

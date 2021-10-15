//#region Imports

import { darken, makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const toHex = require('colornames');

const useStyles = makeStyles((theme) => ({
    header: {
        width: '100%',
        flexWrap: 'wrap',
        ...ALIGN.CENTER,
        alignItems: 'flex-start'
    },
    iconPipe: {
        width: 120,
        height: 120,
        color: ({ color }: any) => color && darken(toHex(color), 0.5)
    },
    name: {
        fontSize: 22,
        marginTop: 12,
        fontWeight: 'bold',
        color: ({ color }: any) => color && darken(toHex(color), 0.3)
    },
    date: {
        color: theme.palette.primary.dark
    }
}));

export default useStyles;

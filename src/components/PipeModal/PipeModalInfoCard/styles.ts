//#region Imports

import { makeStyles, darken } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const toHex = require('colornames');

const useStyles = makeStyles((theme) => ({
    container: {
        margin: 5,
        borderWidth: 2,
        borderRadius: 5,
        padding: '5px 8px',
        borderStyle: 'solid',
        borderColor: ({ color }: any) => color && darken(toHex(color), 0.2),
        ...ALIGN.LEFT
    },
    info: {
        marginLeft: 10,
        ...ALIGN.LEFT
    },
    label: {
        fontSize: 15,
        fontWeight: 'bold',
        color: theme.palette.primary.dark
    },
    text: {
        marginLeft: 5,
        color: theme.palette.primary.dark
    }
}));

export default useStyles;

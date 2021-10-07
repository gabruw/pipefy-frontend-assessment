//#region Imports

import { makeStyles, darken } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const toHex = require('colornames');

const useStyles = makeStyles({
    container: {
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
        fontWeight: 'bold'
    },
    text: {
        marginLeft: 5
    }
});

export default useStyles;

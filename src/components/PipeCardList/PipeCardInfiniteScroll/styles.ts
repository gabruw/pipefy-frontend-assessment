//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = makeStyles({
    infiniteScroll: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    loader: {
        margin: 5,
        height: 250,
        borderStyle: 'dashed',
        borderColor: '#D2E0EC',
        flexDirection: 'column',
        ...ALIGN.CENTER
    },
    text: {
        fontSize: 18,
        marginTop: 10,
        fontWeight: 'bold'
    }
});

export default useStyles;

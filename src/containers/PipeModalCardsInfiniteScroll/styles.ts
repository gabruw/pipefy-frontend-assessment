//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = makeStyles({
    listContainer: {
        padding: 20,
        width: '100%',
        ...ALIGN.LEFT,
        alignItems: 'flex-start'
    },
    infiniteScroll: {
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden'
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

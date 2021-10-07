//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = makeStyles({
    container: {
        textAlign: 'center'
    },
    infoContainer: {
        padding: '0px 30px',
        flexDirection: 'column',
        ...ALIGN.LEFT,
        alignItems: 'flex-start'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    info: {
        fontSize: 20,
        color: '#4D616E'
    }
});

export default useStyles;

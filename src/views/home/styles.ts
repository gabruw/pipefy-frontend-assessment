//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = makeStyles((theme) => ({
    container: {
        textAlign: 'center',
        backgroundColor: theme.palette.background.default
    },
    infoContainer: {
        padding: '0px 30px',
        flexDirection: 'column',
        ...ALIGN.LEFT,
        alignItems: 'flex-start'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: theme.palette.primary.dark
    },
    info: {
        fontSize: 20,
        color: theme.palette.secondary.dark
    }
}));

export default useStyles;

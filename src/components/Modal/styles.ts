//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = makeStyles((theme) => ({
    modal: {
        ...ALIGN.CENTER
    },
    container: {
        outline: 0,
        maxWidth: 800,
        maxHeight: 600,
        display: 'flex',
        overflowY: 'auto',
        borderRadius: 10,
        flexDirection: 'column',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        backgroundColor: theme.palette.background.paper
    },
    closeContainer: {
        width: '100%',
        ...ALIGN.RIGHT
    },
    closeIcon: {
        cursor: 'pointer',
        color: theme.palette.primary.dark
    }
}));

export default useStyles;

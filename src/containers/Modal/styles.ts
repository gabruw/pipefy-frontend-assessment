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
        display: 'flex',
        borderRadius: 10,
        flexDirection: 'column',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        backgroundColor: theme.palette.background.paper,
        minWidth: ({ isLarge, width = 600 }: any) => isLarge && width
    }
}));

export default useStyles;

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
    }
});

export default useStyles;

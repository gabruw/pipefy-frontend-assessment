//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = makeStyles({
    logo: {
        height: 40,
        pointerEvents: 'none'
    },
    header: {
        minHeight: '10vh',
        flexDirection: 'column',
        fontSize: 'calc(10px + 2vmin)',
        ...ALIGN.CENTER
    }
});

export default useStyles;

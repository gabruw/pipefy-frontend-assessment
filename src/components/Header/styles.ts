//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = makeStyles({
    header: {
        minHeight: '10vh',
        flexDirection: 'column',
        ...ALIGN.CENTER
    },
    logo: {
        height: 40,
        margin: 10
    }
});

export default useStyles;

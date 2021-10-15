//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = makeStyles((theme) => ({
    container: {
        margin: 10,
        ...ALIGN.CENTER
    },
    icon: {
        color: theme.palette.primary.dark
    },
    switch: {
        color: theme.palette.primary.dark
        // '&$checked': {
        //     color: theme.palette.primary.dark
        // },
        // '&$checked + $track': {
        //     backgroundColor: theme.palette.primary.dark
        // }
    }
}));

export default useStyles;

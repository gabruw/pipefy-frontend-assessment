//#region Imports

import { makeStyles } from '@material-ui/core/styles';

//#endregion

const useStyles = makeStyles((theme) => ({
    backdrop: {
        color: '#FFFFFF',
        zIndex: theme.zIndex.drawer + 1
    }
}));

export default useStyles;

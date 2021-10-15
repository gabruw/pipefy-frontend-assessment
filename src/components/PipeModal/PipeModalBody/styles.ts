//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = makeStyles((theme) => ({
    body: {
        marginTop: 20,
        flexWrap: 'wrap',
        ...ALIGN.CENTER
    },
    infoCardContainer: {
        width: '40%',
        flexWrap: 'wrap',
        margin: '10px 0px',
        ...ALIGN.CENTER
    },
    icon: {
        color: theme.palette.primary.dark
    },
    descriptionContainer: {
        width: '100%',
        ...ALIGN.LEFT
    },
    description: {
        padding: '0px 30px',
        wordBreak: 'break-all',
        ...ALIGN.CENTER
    }
}));

export default useStyles;

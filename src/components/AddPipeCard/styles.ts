//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = makeStyles((theme) => ({
    card: {
        margin: 5,
        height: 250,
        borderStyle: 'dashed',
        backgroundColor: 'transparent',
        borderColor: theme.palette.secondary.main
    },
    cardContent: {
        height: '90%',
        flexWrap: 'wrap',
        flexDirection: 'column',
        ...ALIGN.CENTER
    },
    iconContainer: {
        width: 80,
        height: 80,
        borderRadius: 20,
        marginBottom: 10,
        backgroundColor: theme.palette.info.light,
        ...ALIGN.CENTER
    },
    icon: {
        width: 40,
        height: 40,
        color: theme.palette.info.main
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.palette.secondary.dark
    }
}));

export default useStyles;

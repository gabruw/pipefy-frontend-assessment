//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = makeStyles({
    card: {
        margin: 5,
        height: 250,
        borderStyle: 'dashed',
        borderColor: '#D2E0EC',
        backgroundColor: '#FFFFFF'
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
        backgroundColor: '#EAF1FE',
        ...ALIGN.CENTER
    },
    icon: {
        width: 40,
        height: 40,
        color: '#266AF6'
    },
    text: {
        fontSize: 16,
        color: '#4D616E',
        fontWeight: 'bold'
    }
});

export default useStyles;

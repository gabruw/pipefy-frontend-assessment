//#region Imports

import MSnackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import React, { FC } from 'react';
import { useSnackbarDispatch, useSnackbarSelector } from 'storages/system/hooks/snackbar';
import TEST_IDS from 'tests/Snackbar/ids.json';
import useStyles from './styles';

//#endregion

const Snackbar: FC = () => {
    const styles = useStyles();

    const { resetDispatch } = useSnackbarDispatch();
    const { isVisible, text } = useSnackbarSelector();

    return (
        <MSnackbar
            open={isVisible}
            data-testid={TEST_IDS.snackbar}
            onClose={() => resetDispatch()}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
            <Alert
                elevation={6}
                variant='filled'
                severity='error'
                className={styles.alert}
                data-testid={TEST_IDS.alert}
            >
                {text}
            </Alert>
        </MSnackbar>
    );
};

export default Snackbar;

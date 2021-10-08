//#region Imports

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import React, { FC } from 'react';
import useLoaderContext from 'storages/loader/context';
import TEST_IDS from 'utils/constant/test-props/Loader/ids.json';
import useStyles from './styles';

//#endregion

const Loader: FC = () => {
    const styles = useStyles();
    const { state } = useLoaderContext();

    return (
        <Backdrop data-testid={TEST_IDS.backdrop} className={styles.backdrop} open={state.isLoading}>
            <CircularProgress data-testid={TEST_IDS.icon} size={60} />
        </Backdrop>
    );
};

export default Loader;

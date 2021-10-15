//#region Imports

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import React, { FC } from 'react';
import { useLoaderSelector } from 'storages/system/hooks/loader';
import TEST_IDS from 'tests/Loader/ids.json';
import useStyles from './styles';

//#endregion

const Loader: FC = () => {
    const styles = useStyles();
    const { isLoading } = useLoaderSelector();

    return (
        <Backdrop data-testid={TEST_IDS.backdrop} className={styles.backdrop} open={isLoading}>
            <CircularProgress data-testid={TEST_IDS.icon} size={60} />
        </Backdrop>
    );
};

export default Loader;

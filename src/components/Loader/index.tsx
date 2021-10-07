//#region Imports

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import React, { FC } from 'react';
import useLoaderContext from 'storages/loader/context';
import useStyles from './styles';

//#endregion

const Loader: FC = () => {
    const styles = useStyles({});
    const { state } = useLoaderContext();

    return (
        <Backdrop className={styles.backdrop} open={state.isLoading}>
            <CircularProgress size={60} />
        </Backdrop>
    );
};

export default Loader;

//#region Imports

import Skeleton from '@material-ui/lab/Skeleton';
import React, { FC } from 'react';
import TEST_IDS from 'tests/PipeSkeletonCard/ids.json';
import useStyles from './styles';

//#endregion

const PipeSkeletonCard: FC = () => {
    const styles = useStyles();

    return (
        <Skeleton data-testid={TEST_IDS.skeleton} animation='wave' variant='rect' width='100%'>
            <div className={styles.card}></div>
        </Skeleton>
    );
};

export default PipeSkeletonCard;

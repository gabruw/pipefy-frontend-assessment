//#region Imports

import Grid from '@material-ui/core/Grid';
import Skeleton from '@material-ui/lab/Skeleton';
import React, { FC } from 'react';
import TEST_IDS from 'utils/constant/test-props/PipeCardSkeleton/ids.json';
import useStyles from './styles';

//#endregion

const PipeCardSkeleton: FC = () => {
    const styles = useStyles();

    return (
        <Grid data-testid={TEST_IDS.skeleton} xs={12} sm={4} md={3} lg={2} item>
            <Skeleton animation='wave' variant='rect' width='100%'>
                <div className={styles.card}></div>
            </Skeleton>
        </Grid>
    );
};

export default PipeCardSkeleton;

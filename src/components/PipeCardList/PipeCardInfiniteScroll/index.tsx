//#region Imports

import Grid from '@material-ui/core/Grid';
import CardPipe from 'components/PipeCard';
import PipeCardSkeleton from 'components/PipeCardSkeleton';
import Pipe from 'models/pipe';
import React, { FC, useCallback, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import usePipeContext from 'storages/pipe/context';
import TEST_IDS from 'utils/constant/test-props/PipeCardList/PipeCardInfiniteScroll/ids.json';
import useStyles from './styles';

//#endregion

const PipeCardInfiniteScroll: FC = ({ children }) => {
    const styles = useStyles();

    const { state } = usePipeContext();

    const [hasMorePipes, setHasMorePipes] = useState(true);
    const [localPipes, setLocalPipes] = useState<Array<Pipe>>([]);

    useEffect(() => {
        if (state.pipes.length) {
            setLocalPipes(state.pipes.slice(0, 16));
        }
    }, [state, setLocalPipes]);

    const fetchMoreData = useCallback((): void => {
        if (localPipes.length >= state.pipes.length) {
            setHasMorePipes(false);
        } else {
            setTimeout(() => {
                const slice = state.pipes.slice(localPipes.length, localPipes.length + 5);
                setLocalPipes((prev) => prev.concat(slice));
            }, 1500);
        }
    }, [localPipes, state, setHasMorePipes, setLocalPipes]);

    return (
        <InfiniteScroll
            next={fetchMoreData}
            hasMore={hasMorePipes}
            loader={<PipeCardSkeleton />}
            dataLength={localPipes.length}
            className={styles.infiniteScroll}
        >
            {localPipes.map((pipe: Pipe, index: number) => (
                <Grid key={index} data-testid={TEST_IDS.gridItemCardPipe} xs={12} sm={4} md={3} lg={2} item>
                    <CardPipe pipe={pipe} />
                </Grid>
            ))}

            {children}
        </InfiniteScroll>
    );
};

export default PipeCardInfiniteScroll;

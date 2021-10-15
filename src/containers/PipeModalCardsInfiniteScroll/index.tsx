//#region Imports

import Grid from '@material-ui/core/Grid';
import PipeSkeletonCard from 'components/PipeSkeletonCard';
import CardPipe from 'containers/PipeCard';
import Edge from 'models/edge';
import React, { FC, useCallback, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useCardService from 'services/card/useCardService';
import usePipeContext from 'storages/pipe/context';
import TEST_IDS from 'tests/PipeModalCardsInfiniteScroll/ids.json';
import useStyles from './styles';

//#endregion

const PipeModalCardsInfiniteScroll: FC = () => {
    const styles = useStyles();

    const { state } = usePipeContext();
    const { getCardsByCardId } = useCardService();

    const [nodes, setNodes] = useState<Array<Edge>>([]);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);

    const fetch = useCallback(
        async (after = null): Promise<void> => {
            setLoading(true);

            const { data } = await getCardsByCardId(state.pipe?.id, after);

            setNodes((prev) => [...prev, ...data.cards.edges]);
            setHasMore(data.pageInfo?.hasNextPage);

            setLoading(false);
        },
        [setLoading, getCardsByCardId, state, setNodes, setHasMore]
    );

    useEffect(() => {
        fetch();
    }, []);

    const fetchMoreData = useCallback(async (): Promise<void> => {
        const last = nodes[nodes.length - 1];
        await fetch(last?.cursor);
    }, [nodes, fetch]);

    return (
        <InfiniteScroll
            height={400}
            loader={<></>}
            next={fetchMoreData}
            dataLength={nodes.length}
            hasMore={Boolean(!hasMore)}
            className={styles.infiniteScroll}
        >
            <Grid data-testid={TEST_IDS.gridContainer} className={styles.listContainer} spacing={1} container>
                {nodes.map(({ node }: Edge, index: number) => (
                    <Grid key={index} xs={12} sm={6} md={6} lg={4} item>
                        <CardPipe pipe={node.pipe} isModalCard />
                    </Grid>
                ))}

                {loading && (
                    <Grid xs={12} sm={6} md={6} lg={4} item>
                        <PipeSkeletonCard />
                    </Grid>
                )}
            </Grid>
        </InfiniteScroll>
    );
};

export default PipeModalCardsInfiniteScroll;

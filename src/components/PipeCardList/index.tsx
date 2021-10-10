//#region Imports

import Grid from '@material-ui/core/Grid';
import AddPipeCard from 'components/AddPipeCard';
import PipeModal from 'components/PipeModal';
import React, { FC, useEffect } from 'react';
import usePipesService from 'services/pipe/service';
import usePipeContext from 'storages/pipe/context';
import { useLoaderDispatch } from 'storages/system/hooks/loader';
import TEST_IDS from 'utils/constant/test-props/PipeCardList/ids.json';
import PipeCardInfiniteScroll from './PipeCardInfiniteScroll';
import useStyles from './styles';

//#endregion

const PipeCardList: FC = () => {
    const styles = useStyles();

    const { setPipes } = usePipeContext();
    const { setIsLoadingDispatch } = useLoaderDispatch();

    const { getPipesByOrganization } = usePipesService();
    const [fetchPipes, { data, loading }] = getPipesByOrganization;

    useEffect(() => {
        fetchPipes();
    }, [fetchPipes]);

    useEffect(() => {
        if (data) {
            const sortedPipes = [...data.organization.pipes].sort((act, next) =>
                act.name.trim().localeCompare(next.name.trim())
            );

            setPipes(sortedPipes);
        }
    }, [data, setPipes]);

    useEffect(() => {
        setIsLoadingDispatch(loading);
    }, [setIsLoadingDispatch, loading]);

    return (
        <Grid data-testid={TEST_IDS.gridContainer} className={styles.listContainer} spacing={2} container>
            <PipeCardInfiniteScroll>
                <Grid data-testid={TEST_IDS.gridItemAddPipeCard} xs={12} sm={4} md={3} lg={2} item>
                    <AddPipeCard />
                </Grid>
            </PipeCardInfiniteScroll>

            <PipeModal />
        </Grid>
    );
};

export default PipeCardList;

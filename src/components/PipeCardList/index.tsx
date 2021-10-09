//#region Imports

import Grid from '@material-ui/core/Grid';
import AddPipeCard from 'components/AddPipeCard';
import CardPipe from 'components/PipeCard';
import PipeModal from 'components/PipeModal';
import Pipe from 'models/pipe';
import React, { FC, Fragment, useEffect } from 'react';
import usePipesService from 'services/pipe/service';
import usePipeContext from 'storages/pipe/context';
import { useLoaderDispatch } from 'storages/system/hooks/loader';
import TEST_IDS from 'utils/constant/test-props/PipeCardList/ids.json';
import useStyles from './styles';

//#endregion

const PipeCardList: FC = () => {
    const styles = useStyles();

    const { state, setPipes } = usePipeContext();
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
        <Fragment>
            <Grid data-testid={TEST_IDS.gridContainer} className={styles.listContainer} spacing={2} container>
                {state.pipes.map((pipe: Pipe, index: number) => (
                    <Grid data-testid={TEST_IDS.gridItemCardPipe + index} key={index} xs={12} sm={4} md={3} lg={2} item>
                        <CardPipe pipe={pipe} />
                    </Grid>
                ))}

                <Grid data-testid={TEST_IDS.gridItemAddPipeCard} xs={12} sm={4} md={3} lg={2} item>
                    <AddPipeCard />
                </Grid>
            </Grid>

            <PipeModal />
        </Fragment>
    );
};

export default PipeCardList;

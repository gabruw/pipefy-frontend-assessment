//#region Imports

import Grid from '@material-ui/core/Grid';
import AddPipeCard from 'components/AddPipeCard';
import CardPipe from 'components/PipeCard';
import PipeModal from 'components/PipeModal';
import Pipe from 'models/pipe';
import React, { FC, Fragment, useEffect } from 'react';
import usePipesService from 'services/pipe/service';
import useLoaderContext from 'storages/loader/context';
import usePipeContext from 'storages/pipe/context';
import useStyles from './styles';

//#endregion

const PipeCardList: FC = () => {
    const styles = useStyles();

    const { setIsLoading } = useLoaderContext();
    const { state, setPipes } = usePipeContext();
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
        setIsLoading(loading);
    }, [setIsLoading, loading]);

    return (
        <Fragment>
            <Grid className={styles.listContainer} spacing={2} container>
                {state.pipes.map((pipe: Pipe, index: number) => (
                    <Grid item xs={12} sm={4} md={3} lg={2}>
                        <CardPipe key={index} pipe={pipe} />
                    </Grid>
                ))}

                <Grid item xs={12} sm={4} md={3} lg={2}>
                    <AddPipeCard />
                </Grid>
            </Grid>

            <PipeModal />
        </Fragment>
    );
};

export default PipeCardList;

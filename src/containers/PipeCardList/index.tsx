//#region Imports

import Grid from '@material-ui/core/Grid';
import AddPipeCard from 'components/AddPipeCard';
import PipeModal from 'components/PipeModal';
import CardPipe from 'containers/PipeCard';
import { Organizations } from 'models/organization';
import Pipe from 'models/pipe';
import React, { FC, useCallback, useEffect } from 'react';
import useOrganizationService from 'services/organization/useOrganizationService';
import usePipeContext from 'storages/pipe/context';
import TEST_IDS from 'tests/PipeCardList/ids.json';
import useStyles from './styles';

//#endregion

const PipeCardList: FC = () => {
    const styles = useStyles();

    const { state, setPipes } = usePipeContext();
    const { getPipesByOrganizationId } = useOrganizationService();

    const sortPipes = useCallback(
        (data: Organizations): void => {
            const sortedPipes = [...data.organization.pipes].sort((act, next) =>
                act.name.trim().localeCompare(next.name.trim())
            );
            setPipes(sortedPipes);
        },
        [setPipes]
    );

    const fetch = useCallback(async (): Promise<void> => {
        const { data } = await getPipesByOrganizationId();
        sortPipes(data);
    }, []);

    useEffect(() => {
        fetch();
    }, []);

    return (
        <Grid data-testid={TEST_IDS.gridContainer} className={styles.listContainer} spacing={2} container>
            {state.pipes.map((pipe: Pipe, index: number) => (
                <Grid key={index} data-testid={TEST_IDS.gridItemCardPipe} xs={12} sm={4} md={3} lg={2} item>
                    <CardPipe pipe={pipe} />
                </Grid>
            ))}

            <Grid data-testid={TEST_IDS.gridItemAddPipeCard} xs={12} sm={4} md={3} lg={2} item>
                <AddPipeCard />
            </Grid>

            <PipeModal />
        </Grid>
    );
};

export default PipeCardList;

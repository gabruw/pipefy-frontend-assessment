//#region Imports

import Filter9PlusIcon from '@material-ui/icons/Filter9Plus';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PipeModalCardsInfiniteScroll from 'containers/PipeModalCardsInfiniteScroll';
import React, { FC, useMemo } from 'react';
import usePipeContext from 'storages/pipe/context';
import TEST_IDS from 'tests/PipeModal/PipeModalBody/ids.json';
import PipeModalInfoCard from '../PipeModalInfoCard';
import useStyles from './styles';

//#endregion

const PipeModalBody: FC = () => {
    const { state } = usePipeContext();
    const styles = useStyles();

    const visibility = useMemo(() => (state.pipe?.public ? 'Public' : 'Private'), [state]);

    return (
        <div className={styles.body}>
            <div className={styles.infoCardContainer}>
                <PipeModalInfoCard label='Cards' color={state.pipe?.color} text={state?.pipe?.cards_count}>
                    <Filter9PlusIcon data-testid={TEST_IDS.countInfoCard} className={styles.icon} />
                </PipeModalInfoCard>

                <PipeModalInfoCard text={visibility} label='Visibility' color={state.pipe?.color}>
                    <VisibilityIcon data-testid={TEST_IDS.visibilityInfoCard} className={styles.icon} />
                </PipeModalInfoCard>
            </div>

            {state.pipe?.description && (
                <div className={styles.descriptionContainer}>
                    <div data-testid={TEST_IDS.description} className={styles.description}>
                        {state.pipe?.description}
                    </div>
                </div>
            )}

            <PipeModalCardsInfiniteScroll />
        </div>
    );
};

export default PipeModalBody;

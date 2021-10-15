//#region Imports

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AppsIcon from '@material-ui/icons/Apps';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Pipe from 'models/pipe';
import React, { FC, useCallback } from 'react';
import usePipesService from 'services/pipe/usePipesService';
import usePipeContext from 'storages/pipe/context';
import TEST_IDS from 'tests/PipeCard/ids.json';
import useStyles from './styles';

//#endregion

interface PipeProps {
    pipe: Pipe;
    isModalCard?: boolean;
}

const CardPipe: FC<PipeProps> = ({ pipe, isModalCard }) => {
    const styles = useStyles({ color: pipe.color, isCursorPointer: !isModalCard });

    const { getPipeById } = usePipesService();
    const { modalRef, setPipe } = usePipeContext();

    const fetch = useCallback(
        async (id): Promise<void> => {
            const { data } = await getPipeById(id);

            setPipe(data.pipe);
            modalRef?.current.show();
        },
        [getPipeById, setPipe, modalRef]
    );

    return (
        <Card
            variant='outlined'
            className={styles.card}
            data-testid={TEST_IDS.card}
            onClick={() => !isModalCard && fetch(pipe.id)}
        >
            <CardContent className={styles.cardContent}>
                <div data-testid={TEST_IDS.visibilityIcon} className={styles.visibility}>
                    {pipe.public ? <LockOpenIcon /> : <LockIcon />}
                </div>

                <div className={styles.iconContainer}>
                    <AppsIcon data-testid={TEST_IDS.appIcon} className={styles.icon} />
                </div>

                <div data-testid={TEST_IDS.name} className={styles.name}>
                    {pipe.name}
                </div>

                <div data-testid={TEST_IDS.cardsCount} className={styles.count}>{`${pipe.cards_count} cards`}</div>
            </CardContent>
        </Card>
    );
};

export default CardPipe;

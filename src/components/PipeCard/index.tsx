//#region Imports

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AppsIcon from '@material-ui/icons/Apps';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Pipe from 'models/pipe';
import React, { FC, useEffect } from 'react';
import usePipesService from 'services/pipe/service';
import usePipeContext from 'storages/pipe/context';
import { useLoaderDispatch } from 'storages/system/hooks/loader';
import TEST_IDS from 'utils/constant/test-props/PipeCard/ids.json';
import useStyles from './styles';

//#endregion

interface PipeProps {
    pipe: Pipe;
}

const CardPipe: FC<PipeProps> = ({ pipe }) => {
    const styles = useStyles({ color: pipe.color });

    const { modalRef, setPipe } = usePipeContext();
    const { setIsLoadingDispatch } = useLoaderDispatch();

    const { getPipeById } = usePipesService();
    const [fetchPipe, { loading, data }] = getPipeById;

    useEffect(() => {
        if (data) {
            setPipe(data.pipe);
            modalRef?.current.show();
        }
    }, [data, setPipe, modalRef]);

    useEffect(() => {
        setIsLoadingDispatch(loading);
    }, [loading]);

    return (
        <Card
            variant='outlined'
            className={styles.card}
            data-testid={TEST_IDS.card}
            onClick={() => fetchPipe({ variables: { id: pipe.id } })}
        >
            <CardContent className={styles.cardContent}>
                <div data-testid={TEST_IDS['visibility-icon']} className={styles.visibility}>
                    {pipe.public ? <LockOpenIcon /> : <LockIcon />}
                </div>

                <div>
                    <AppsIcon data-testid={TEST_IDS['app-icon']} className={styles.icon} />
                </div>

                <div data-testid={TEST_IDS.name} className={styles.name}>
                    {pipe.name}
                </div>
                <div data-testid={TEST_IDS['cards-count']} className={styles.count}>{`${pipe.cards_count} cards`}</div>
            </CardContent>
        </Card>
    );
};

export default CardPipe;

//#region Imports

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AppsIcon from '@material-ui/icons/Apps';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Pipe from 'models/pipe';
import React, { FC, useEffect } from 'react';
import usePipesService from 'services/pipe/service';
import useLoaderContext from 'storages/loader/context';
import usePipeContext from 'storages/pipe/context';
import useStyles from './styles';

//#endregion

interface PipeProps {
    pipe: Pipe;
}

const CardPipe: FC<PipeProps> = ({ pipe }) => {
    const styles = useStyles({ color: pipe.color });

    const { setIsLoading } = useLoaderContext();
    const { modalRef, setPipe } = usePipeContext();

    const { getPipeById } = usePipesService();
    const [fetchPipe, { loading, data }] = getPipeById;

    useEffect(() => {
        if (data) {
            setPipe(data.pipe);
            modalRef?.current.show();
        }
    }, [data, setPipe, modalRef]);

    useEffect(() => {
        setIsLoading(loading);
    }, [setIsLoading, loading]);

    return (
        <Card className={styles.card} variant='outlined' onClick={() => fetchPipe({ variables: { id: pipe.id } })}>
            <CardContent className={styles.cardContent}>
                <div className={styles.visibility}>{pipe.public ? <LockOpenIcon /> : <LockIcon />}</div>

                <div>
                    <AppsIcon className={styles.icon} />
                </div>

                <div className={styles.name}>{pipe.name}</div>
                <div className={styles.count}>{`${pipe.cards_count} cards`}</div>
            </CardContent>
        </Card>
    );
};

export default CardPipe;

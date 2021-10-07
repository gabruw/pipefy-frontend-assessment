//#region Imports

import Header from 'components/Header';
import PipeCardList from 'components/PipeCardList';
import React, { FC } from 'react';
import { PipeContextProvider } from 'storages/pipe/context';
import useStyles from './styles';

//#endregion

const Home: FC = () => {
    const styles = useStyles();

    return (
        <PipeContextProvider>
            <div className={styles.container}>
                <Header />

                <div className={styles.infoContainer}>
                    <div className={styles.title}>Your pipes</div>
                    <div className={styles.info}>Here are all your processes.</div>
                </div>

                <PipeCardList />
            </div>
        </PipeContextProvider>
    );
};

export default Home;

//#region Imports

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AddIcon from '@material-ui/icons/Add';
import React, { FC } from 'react';
import TEST_IDS from 'tests/AddPipeCard/ids.json';
import useStyles from './styles';

//#endregion

const AddPipeCard: FC = () => {
    const styles = useStyles();

    return (
        <Card className={styles.card} variant='outlined'>
            <CardContent className={styles.cardContent}>
                <div className={styles.iconContainer}>
                    <AddIcon data-testid={TEST_IDS.icon} className={styles.icon} />
                </div>

                <div data-testid={TEST_IDS.title} className={styles.text}>
                    Add new pipe
                </div>
            </CardContent>
        </Card>
    );
};

export default AddPipeCard;

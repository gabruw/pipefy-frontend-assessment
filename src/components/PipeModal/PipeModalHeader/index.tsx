//#region Imports

import Grid from '@material-ui/core/Grid';
import AppsIcon from '@material-ui/icons/Apps';
import React, { FC, useMemo } from 'react';
import usePipeContext from 'storages/pipe/context';
import TEST_IDS from 'tests/PipeModal/PipeModalHeader/ids.json';
import useStyles from './styles';

//#endregion

const PipeModalHeader: FC = () => {
    const { state } = usePipeContext();
    const styles = useStyles({ color: state.pipe?.color });

    const date = useMemo(() => state.pipe?.created_at ?? Date.now(), [state]);

    return (
        <div className={styles.header}>
            <Grid spacing={1} container>
                <Grid xs={12} sm={3} md={2} lg={2} item>
                    <AppsIcon data-testid={TEST_IDS.appIcon} className={styles.iconPipe} />
                </Grid>

                <Grid xs={12} sm={9} md={10} lg={10} item>
                    <Grid spacing={1} container>
                        <Grid data-testid={TEST_IDS.name} className={styles.name} xs={12} item>
                            {state.pipe?.name}
                        </Grid>

                        <Grid data-testid={TEST_IDS.date} className={styles.date} xs={12} item>
                            {new Date(date).toLocaleDateString('pt-Br')}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default PipeModalHeader;

//#region Imports

import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import React, { FC, useCallback, useState } from 'react';
import { useThemeDispatch } from 'storages/system/hooks/theme';
import TEST_IDS from 'tests/ThemeSwitch/ids.json';
import useStyles from './styles';

//#endregion

const ThemeSwitch: FC = () => {
    const styles = useStyles();

    const [isThemeSwitched, setIsThemeSwitched] = useState<boolean>(false);
    const { toggleDispatch } = useThemeDispatch();

    const handleChange = useCallback(() => {
        setIsThemeSwitched((prev) => !prev);
        toggleDispatch();
    }, [setIsThemeSwitched, toggleDispatch]);

    return (
        <Grid className={styles.container} container>
            <Grid className={styles.icon} item>
                <Brightness5Icon data-testid={TEST_IDS.dayIcon} />
            </Grid>

            <Grid item>
                <Switch
                    name='theme-switch'
                    checked={isThemeSwitched}
                    className={styles.switch}
                    data-testid={TEST_IDS.switch}
                    onChange={() => handleChange()}
                />
            </Grid>

            <Grid className={styles.icon} item>
                <NightsStayIcon data-testid={TEST_IDS.nightIcon} />
            </Grid>
        </Grid>
    );
};

export default ThemeSwitch;

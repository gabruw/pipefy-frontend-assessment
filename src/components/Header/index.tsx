//#region Imports

import React, { FC } from 'react';
import TEST_IDS from 'utils/constant/test-props/Header/ids.json';
import useStyles from './styles';

//#endregion

const Header: FC = () => {
    const styles = useStyles();

    return (
        <header className={styles.header}>
            <img
                alt='logo'
                className={styles.logo}
                data-testid={TEST_IDS.logo}
                src='https://files.readme.io/9e810f9-small-developers3x.png'
            />
        </header>
    );
};

export default Header;

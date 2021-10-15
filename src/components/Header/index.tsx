//#region Imports

import Logo from 'assets/images/header-logo.png';
import ThemeSwitch from 'components/ThemeSwitch';
import React, { FC } from 'react';
import TEST_IDS from 'tests/Header/ids.json';
import useStyles from './styles';

//#endregion

const Header: FC = () => {
    const styles = useStyles();

    return (
        <header className={styles.header}>
            <img data-testid={TEST_IDS.logo} className={styles.logo} src={Logo} alt='logo' />
            <ThemeSwitch />
        </header>
    );
};

export default Header;

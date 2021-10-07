//#region Imports

import React, { FC } from 'react';
import useStyles from './styles';

//#endregion

const Header: FC = () => {
    const styles = useStyles();

    return (
        <header className={styles.header}>
            <img className={styles.logo} src='https://files.readme.io/9e810f9-small-developers3x.png' alt='logo' />
        </header>
    );
};

export default Header;

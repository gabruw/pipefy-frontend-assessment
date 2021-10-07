//#region Imports

import React, { FC } from 'react';
import { ReactNode } from 'react-transition-group/node_modules/@types/react';
import useStyles from './styles';

//#endregion

interface PipeModalInfoProps {
    label: string;
    color?: string;
    children: ReactNode;
    text?: string | number;
}

const PipeModalInfo: FC<PipeModalInfoProps> = ({ children, text, label, color }) => {
    const styles = useStyles({ color });

    return (
        <div className={styles.container}>
            {children}

            <div className={styles.info}>
                <label className={styles.label}>{label}:</label>
                <div className={styles.text}>{text}</div>
            </div>
        </div>
    );
};

export default PipeModalInfo;

//#region Imports

import React, { FC } from 'react';
import { ReactNode } from 'react-transition-group/node_modules/@types/react';
import TEST_IDS from 'tests/PipeModal/PipeModalInfo/ids.json';
import useStyles from './styles';

//#endregion

interface PipeModalInfoProps {
    label: string;
    color?: string;
    children: ReactNode;
    text?: string | number;
}

const PipeModalInfoCard: FC<PipeModalInfoProps> = ({ children, text, label, color }) => {
    const styles = useStyles({ color });

    return (
        <div className={styles.container}>
            {children}

            <div className={styles.info}>
                <label data-testid={TEST_IDS.label} className={styles.label}>
                    {label}:
                </label>

                <div data-testid={TEST_IDS.text} className={styles.text}>
                    {text}
                </div>
            </div>
        </div>
    );
};

export default PipeModalInfoCard;

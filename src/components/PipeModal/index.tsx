//#region Imports

import AppsIcon from '@material-ui/icons/Apps';
import CloseIcon from '@material-ui/icons/Close';
import Filter9PlusIcon from '@material-ui/icons/Filter9Plus';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Modal from 'containers/Modal';
import React, { FC, useMemo } from 'react';
import usePipeContext from 'storages/pipe/context';
import TEST_IDS from 'utils/constant/test-props/PipeModal/ids.json';
import PipeModalInfo from './PipeModalInfo';
import useStyles from './styles';

//#endregion

const PipeModal: FC = () => {
    const { modalRef, state, setPipe } = usePipeContext();
    const styles = useStyles({ color: state?.pipe?.color });

    const date = useMemo(() => state?.pipe?.created_at ?? Date.now(), [state]);
    const visibility = useMemo(() => (state?.pipe?.public ? 'Public' : 'Private'), [state]);

    return (
        <Modal ref={modalRef} onClose={() => setPipe()}>
            <div className={styles.container}>
                <div className={styles.closeContainer}>
                    <CloseIcon
                        className={styles.iconClose}
                        data-testid={TEST_IDS.closeIcon}
                        onClick={() => modalRef?.current.hide()}
                    />
                </div>

                <div className={styles.header}>
                    <div className={styles.iconContainer}>
                        <AppsIcon data-testid={TEST_IDS.appIcon} className={styles.iconPipe} />
                    </div>

                    <div className={styles.infoContainer}>
                        <div data-testid={TEST_IDS.name} className={styles.name}>
                            {state?.pipe?.name}
                        </div>

                        <div data-testid={TEST_IDS.date} className={styles.date}>
                            {new Date(date).toLocaleDateString('pt-Br')}
                        </div>
                    </div>
                </div>

                <div className={styles.body}>
                    <div className={styles.cardContainer}>
                        <PipeModalInfo label='Cards' text={state?.pipe?.cards_count} color={state?.pipe?.color}>
                            <Filter9PlusIcon />
                        </PipeModalInfo>

                        <PipeModalInfo label='Visibility' text={visibility} color={state?.pipe?.color}>
                            <VisibilityIcon />
                        </PipeModalInfo>
                    </div>

                    <div data-testid={TEST_IDS.description} className={styles.description}>
                        {state?.pipe?.description}
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default PipeModal;

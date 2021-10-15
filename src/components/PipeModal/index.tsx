//#region Imports

import Modal from 'components/Modal';
import React, { FC } from 'react';
import usePipeContext from 'storages/pipe/context';
import PipeModalBody from './PipeModalBody';
import PipeModalHeader from './PipeModalHeader';

//#endregion

const PipeModal: FC = () => {
    const { modalRef, setPipe } = usePipeContext();

    return (
        <Modal ref={modalRef} onClose={() => setPipe()}>
            <PipeModalHeader />
            <PipeModalBody />
        </Modal>
    );
};

export default PipeModal;

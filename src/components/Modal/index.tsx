//#region Imports

import MaterialModal from '@material-ui/core/Modal';
import CloseIcon from '@material-ui/icons/Close';
import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { ForwardRefRenderFunction, Ref } from 'react-transition-group/node_modules/@types/react';
import TEST_IDS from 'tests/Modal/ids.json';
import useStyles from './styles';

//#endregion

interface ModalProps {
    children?: any;
    onOpen?: () => any;
    onClose?: () => any;
}

interface ImperativeHandleProps {
    show: () => void;
    hide: () => void;
    toggle: () => void;
}

const Modal: ForwardRefRenderFunction<ImperativeHandleProps, ModalProps> = (
    { children, onOpen, onClose }: ModalProps,
    ref: Ref<ImperativeHandleProps>
) => {
    const styles = useStyles();
    const [isVisible, setIsVisible] = useState(false);

    useImperativeHandle(
        ref,
        (): ImperativeHandleProps => ({
            show: () => setIsVisible(true),
            hide: () => setIsVisible(false),
            toggle: () => setIsVisible(!isVisible)
        })
    );

    useEffect(() => {
        if (isVisible && onOpen) {
            onOpen();
        } else if (!isVisible && onClose) {
            onClose();
        }
    }, [isVisible]);

    return (
        <MaterialModal className={styles.modal} open={isVisible} hideBackdrop closeAfterTransition>
            <div data-testid={TEST_IDS.container} className={styles.container}>
                <div className={styles.closeContainer}>
                    <CloseIcon
                        className={styles.closeIcon}
                        data-testid={TEST_IDS.closeIcon}
                        onClick={() => setIsVisible(false)}
                    />
                </div>

                {children}
            </div>
        </MaterialModal>
    );
};

export default forwardRef<ImperativeHandleProps, ModalProps>(Modal);

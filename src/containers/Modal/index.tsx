//#region Imports

import { Theme, useTheme } from '@material-ui/core';
import MaterialModal from '@material-ui/core/Modal';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { ForwardRefRenderFunction, Ref } from 'react-transition-group/node_modules/@types/react';
import useStyles from './styles';

//#endregion

interface ModalProps {
    children?: any;
    width?: number;
    onOpen?: () => any;
    onClose?: () => any;
}

interface ImperativeHandleProps {
    show: () => void;
    hide: () => void;
    toggle: () => void;
}

const Modal: ForwardRefRenderFunction<ImperativeHandleProps, ModalProps> = (
    { children, width, onOpen, onClose }: ModalProps,
    ref: Ref<ImperativeHandleProps>
) => {
    const theme: Theme = useTheme();
    const isLarge = useMediaQuery(theme.breakpoints.up('lg'));

    const styles = useStyles({ isLarge, width });

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
        <MaterialModal className={styles.modal} open={isVisible} closeAfterTransition hideBackdrop>
            <div className={styles.container}>{children}</div>
        </MaterialModal>
    );
};

export default forwardRef<ImperativeHandleProps, ModalProps>(Modal);

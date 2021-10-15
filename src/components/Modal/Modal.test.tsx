//#region Imports

import { render, screen, fireEvent } from '@testing-library/react';
import Modal from 'components/Modal';
import TEST_IDS from 'tests/Modal/ids.json';
import { modalRef } from 'tests/Modal/props';

//#endregion

describe('Modal Component', () => {
    it('check if modal is toggle', () => {
        render(<Modal ref={modalRef} />);

        modalRef.current.toggle();
        const modalOpened = screen.getByTestId(TEST_IDS.container);

        modalRef?.current.toggle();
        const modalClosed = screen.queryByTestId(TEST_IDS.container);

        expect(modalClosed).toBeFalsy();
        expect(modalOpened).toBeTruthy();
    });

    it('check if modal onOpen works', () => {
        let text: string = '';
        const expectedText: string = 'Opened';

        const onOpen = () => {
            text = expectedText;
        };

        render(<Modal ref={modalRef} onOpen={() => onOpen()} />);

        modalRef.current.show();
        expect(text).toBe(expectedText);
    });

    it('check if modal onClose works', () => {
        let text: string = '';
        const expectedText: string = 'Closed';

        const onClose = () => {
            text = expectedText;
        };

        render(<Modal ref={modalRef} onClose={() => onClose()} />);

        modalRef.current.show();
        modalRef.current.hide();

        expect(text).toBe(expectedText);
    });

    it('check if close icon onClick works', () => {
        render(<Modal ref={modalRef} />);

        modalRef.current.toggle();

        const element = screen.getByTestId(TEST_IDS.closeIcon);
        fireEvent.click(element);

        expect(element).toBeTruthy();
    });

    it('check if modal children was render', () => {
        const text: string = 'Test';
        const testId: string = 'div-test';

        render(
            <Modal ref={modalRef}>
                <div data-testid={testId}>{text}</div>
            </Modal>
        );

        modalRef.current.show();
        const element = screen.getByTestId(testId);

        expect(element.textContent).toBe(text);
    });
});

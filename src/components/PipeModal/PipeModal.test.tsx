//#region Imports

import { fireEvent, render, screen } from '@testing-library/react';
import PipeModal from 'components/PipeModal';
import { FC, useEffect } from 'react';
import usePipeContext, { PipeContextProvider } from 'storages/pipe/context';
import pipe from 'utils/constant/test-props/PipeCard/props';
import TEST_IDS from 'utils/constant/test-props/PipeModal/ids.json';

//#endregion

const Element: FC = () => {
    const { modalRef, state, setPipe } = usePipeContext();
    modalRef?.current?.show();

    useEffect(() => {
        if (!state.pipe) {
            setPipe(pipe);
        }
    }, [state, setPipe]);

    return <PipeModal />;
};

describe('PipeModal Component', () => {
    beforeEach(() => {
        render(
            <PipeContextProvider>
                <Element />
            </PipeContextProvider>
        );
    });

    it('check if the close icon was render', () => {
        const element = screen.getByTestId(TEST_IDS.closeIcon);
        expect(element).toBeTruthy();
    });

    it('check if close icon onClick works', () => {
        const element = screen.getByTestId(TEST_IDS.closeIcon);
        fireEvent.click(element);

        expect(element).toBeTruthy();
    });

    it('check if the app icon was render', () => {
        const element = screen.getByTestId(TEST_IDS.appIcon);
        expect(element).toBeTruthy();
    });

    it('check if the name is the same as expected', () => {
        const element = screen.getByTestId(TEST_IDS.name);
        expect(element.textContent).toBe(pipe.name);
    });

    it('check if the date is the same as expected', () => {
        const element = screen.getByTestId(TEST_IDS.date);
        expect(element.textContent).toBe(pipe.created_at.toLocaleDateString('pt-Br'));
    });

    it('check if the description is the same as expected', () => {
        const element = screen.getByTestId(TEST_IDS.description);
        expect(element.textContent).toBe(pipe.description);
    });
});

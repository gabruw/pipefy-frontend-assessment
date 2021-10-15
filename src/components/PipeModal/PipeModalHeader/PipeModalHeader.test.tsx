//#region Imports

import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import { PipeContextProvider } from 'storages/pipe/context';
import { PIPE_MOCK } from 'tests/PipeCard/mocks';
import TPipeModal from 'tests/PipeModal/components/TPipeModal';
import TEST_IDS from 'tests/PipeModal/PipeModalHeader/ids.json';
import { getCardsByCardIdMock } from 'tests/PipeModalCardsInfiniteScroll/apollo-mocks';

//#endregion

describe('PipeModalHeader Component', () => {
    beforeEach(() => {
        render(
            <MockedProvider mocks={getCardsByCardIdMock}>
                <PipeContextProvider>
                    <TPipeModal />
                </PipeContextProvider>
            </MockedProvider>
        );
    });

    it('check if the app icon was render', () => {
        const element = screen.getByTestId(TEST_IDS.appIcon);
        expect(element).toBeTruthy();
    });

    it('check if the name is the same as expected', () => {
        const element = screen.getByTestId(TEST_IDS.name);
        expect(element.textContent).toBe(PIPE_MOCK.name);
    });

    it('check if the date is the same as expected', () => {
        const element = screen.getByTestId(TEST_IDS.date);
        expect(element.textContent).toBe(PIPE_MOCK.created_at.toLocaleDateString('pt-Br'));
    });
});

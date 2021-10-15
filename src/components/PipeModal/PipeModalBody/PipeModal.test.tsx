//#region Imports

import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { PipeContextProvider } from 'storages/pipe/context';
import store from 'storages/system/store';
import { PIPE_MOCK } from 'tests/PipeCard/mocks';
import TPipeModal from 'tests/PipeModal/components/TPipeModal';
import TEST_IDS from 'tests/PipeModal/PipeModalBody/ids.json';
import { getCardsByCardIdMock } from 'tests/PipeModalCardsInfiniteScroll/apollo-mocks';

//#endregion

describe('PipeModalBody Component', () => {
    beforeEach(() => {
        getCardsByCardIdMock[0].request.variables.after = null;

        render(
            <Provider store={store}>
                <MockedProvider mocks={getCardsByCardIdMock}>
                    <PipeContextProvider>
                        <TPipeModal />
                    </PipeContextProvider>
                </MockedProvider>
            </Provider>
        );
    });

    it('check if the description is the same as expected', () => {
        const element = screen.getByTestId(TEST_IDS.description);
        expect(element.textContent).toBe(PIPE_MOCK.description);
    });

    it('check if the count info card was render', async () => {
        const element = await screen.findByTestId(TEST_IDS.countInfoCard);
        expect(element).toBeTruthy();
    });

    it('check if the visibility info card was render', async () => {
        const element = await screen.findByTestId(TEST_IDS.visibilityInfoCard);
        expect(element).toBeTruthy();
    });
});

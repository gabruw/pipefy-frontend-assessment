//#region Imports

import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { PipeContextProvider } from 'storages/pipe/context';
import store from 'storages/system/store';
import { getCardsByCardIdMock } from 'tests/PipeModalCardsInfiniteScroll/apollo-mocks';
import TPipeModalCardsInfiniteScroll from 'tests/PipeModalCardsInfiniteScroll/components/TPipeModalCardsInfiniteScroll';
import TEST_IDS from 'tests/PipeModalCardsInfiniteScroll/ids.json';

//#endregion

describe('PipeModalCardsInfiniteScroll Component', () => {
    beforeEach(() => {
        getCardsByCardIdMock[0].request.variables.after = null;

        render(
            <Provider store={store}>
                <MockedProvider mocks={getCardsByCardIdMock}>
                    <PipeContextProvider>
                        <TPipeModalCardsInfiniteScroll />
                    </PipeContextProvider>
                </MockedProvider>
            </Provider>
        );
    });

    it('check if the grid container was render', () => {
        const element = screen.getByTestId(TEST_IDS.gridContainer);
        expect(element).toBeTruthy();
    });
});

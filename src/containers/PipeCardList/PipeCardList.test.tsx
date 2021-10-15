//#region Imports

import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import PipeCardList from 'containers/PipeCardList';
import { Provider } from 'react-redux';
import { PipeContextProvider } from 'storages/pipe/context';
import store from 'storages/system/store';
import { getPipesByOrganizationIdMock } from 'tests/PipeCardList/apollo-mocks';
import TEST_IDS from 'tests/PipeCardList/ids.json';

//#endregion

describe('PipeCardList Component', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <MockedProvider mocks={getPipesByOrganizationIdMock}>
                    <PipeContextProvider>
                        <PipeCardList />
                    </PipeContextProvider>
                </MockedProvider>
            </Provider>
        );
    });

    it('check if the grid container was render', () => {
        const element = screen.getByTestId(TEST_IDS.gridContainer);
        expect(element).toBeTruthy();
    });

    it('check if the grid item for add pipe card was render', () => {
        const element = screen.getByTestId(TEST_IDS.gridItemAddPipeCard);
        expect(element).toBeTruthy();
    });
});

//#region Imports

import { MockedProvider, MockLink } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import PipeModal from 'components/PipeModal';
import PipeCard from 'containers/PipeCard';
import { Provider } from 'react-redux';
import { PipeContextProvider } from 'storages/pipe/context';
import store from 'storages/system/store';
import { getPipeByIdMock } from 'tests/PipeCard/apollo-mocks';
import TEST_IDS from 'tests/PipeCard/ids.json';
import { PIPE_MOCK } from 'tests/PipeCard/mocks';

//#endregion

describe('PipeCard Component', () => {
    beforeEach(() => {
        const link = new MockLink(getPipeByIdMock);

        render(
            <Provider store={store}>
                <MockedProvider link={link}>
                    <PipeContextProvider>
                        <PipeCard pipe={PIPE_MOCK} />
                        <PipeModal />
                    </PipeContextProvider>
                </MockedProvider>
            </Provider>
        );
    });

    it('check if the visibility icon was render', () => {
        const element = screen.getByTestId(TEST_IDS.visibilityIcon);
        expect(element).toBeTruthy();
    });

    it('check if the app icon was render', () => {
        const element = screen.getByTestId(TEST_IDS.appIcon);
        expect(element).toBeTruthy();
    });

    it('check if the name is the same as expected', () => {
        const element = screen.getByTestId(TEST_IDS.name);
        expect(element.textContent).toBe(PIPE_MOCK.name);
    });

    it('check if the card count is the same as expected', () => {
        const element = screen.getByTestId(TEST_IDS.cardsCount);
        expect(element.textContent).toBe(`${PIPE_MOCK.cards_count} cards`);
    });
});

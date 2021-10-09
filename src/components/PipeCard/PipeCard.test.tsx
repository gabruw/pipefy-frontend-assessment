//#region Imports

import { MockedProvider } from '@apollo/client/testing';
import { fireEvent, render, screen } from '@testing-library/react';
import PipeCard from 'components/PipeCard';
import PipeModal from 'components/PipeModal';
import { Provider } from 'react-redux';
import { PipeContextProvider } from 'storages/pipe/context';
import store from 'storages/system/store';
import MODAL_TEST_IDS from 'utils/constant/test-props/Modal/ids.json';
import PIPE_CARD_TEST_IDS from 'utils/constant/test-props/PipeCard/ids.json';
import pipe, { APOLLO_MOCKS } from 'utils/constant/test-props/PipeCard/props';

//#endregion

describe('PipeCard Component', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <MockedProvider mocks={APOLLO_MOCKS}>
                    <PipeContextProvider>
                        <PipeCard pipe={pipe} />
                        <PipeModal />
                    </PipeContextProvider>
                </MockedProvider>
            </Provider>
        );
    });

    it('check if the visibility icon was render', () => {
        const element = screen.getByTestId(PIPE_CARD_TEST_IDS['visibility-icon']);
        expect(element).toBeTruthy();
    });

    it('check if the app icon was render', () => {
        const element = screen.getByTestId(PIPE_CARD_TEST_IDS['app-icon']);
        expect(element).toBeTruthy();
    });

    it('check if the name is the same as expected', () => {
        const element = screen.getByTestId(PIPE_CARD_TEST_IDS.name);
        expect(element.textContent).toBe(pipe.name);
    });

    it('check if the card count is the same as expected', () => {
        const element = screen.getByTestId(PIPE_CARD_TEST_IDS['cards-count']);
        expect(element.textContent).toBe(`${pipe.cards_count} cards`);
    });

    it('check if card onClick works', async () => {
        const card = screen.getByTestId(PIPE_CARD_TEST_IDS.card);
        fireEvent.click(card);

        const modal = await screen.findByTestId(MODAL_TEST_IDS.modal);
        expect(modal).toBeTruthy();
    });
});

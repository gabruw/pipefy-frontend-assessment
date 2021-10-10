//#region Imports

import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import PipeCardInfiniteScroll from 'components/PipeCardList/PipeCardInfiniteScroll';
import Pipe from 'models/pipe';
import { FC, useEffect } from 'react';
import { Provider } from 'react-redux';
import usePipeContext, { PipeContextProvider } from 'storages/pipe/context';
import store from 'storages/system/store';
import pipe from 'utils/constant/test-props/PipeCard/props';
import TEST_IDS from 'utils/constant/test-props/PipeCardList/PipeCardInfiniteScroll/ids.json';
import { APOLLO_MOCKS } from 'utils/constant/test-props/PipeCardList/props';

//#endregion

const Element: FC = () => {
    const { setPipes } = usePipeContext();

    useEffect(() => {
        const array: Array<Pipe> = [];

        for (let i = 0; i <= 30; i++) {
            array.push(pipe);
        }

        setPipes(array);
    }, [setPipes]);

    return <PipeCardInfiniteScroll />;
};

describe('PipeCardInfiniteScroll Component', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <MockedProvider mocks={APOLLO_MOCKS}>
                    <PipeContextProvider>
                        <Element />
                    </PipeContextProvider>
                </MockedProvider>
            </Provider>
        );
    });

    it('check if the cards was render', async () => {
        const element = await screen.findAllByTestId(TEST_IDS.gridItemCardPipe);
        expect(element.length).toBe(16);
    });
});

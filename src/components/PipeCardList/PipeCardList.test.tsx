//#region Imports

import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import PipeCardList from 'components/PipeCardList';
import { FC } from 'react';
import { LoaderContextProvider } from 'storages/loader/context';
import { PipeContextProvider } from 'storages/pipe/context';
import TEST_IDS from 'utils/constant/test-props/PipeCardList/ids.json';
import { APOLLO_MOCKS } from 'utils/constant/test-props/PipeCardList/props';

//#endregion

describe('PipeCardList Component', () => {
    beforeEach(() => {
        render(
            <MockedProvider mocks={APOLLO_MOCKS}>
                <LoaderContextProvider>
                    <PipeContextProvider>
                        <PipeCardList />
                    </PipeContextProvider>
                </LoaderContextProvider>
            </MockedProvider>
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

//#region Imports

import { render, screen } from '@testing-library/react';
import Loader from 'components/Loader';
import { Provider } from 'react-redux';
import store from 'storages/system/store';
import TEST_IDS from 'utils/constant/test-props/Loader/ids.json';

//#endregion

describe('Loader Component', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <Loader />
            </Provider>
        );
    });

    it('check if the backdrop was render', () => {
        const element = screen.getByTestId(TEST_IDS.backdrop);
        expect(element).toBeTruthy();
    });

    it('check if the icon was render', () => {
        const element = screen.getByTestId(TEST_IDS.icon);
        expect(element).toBeTruthy();
    });
});

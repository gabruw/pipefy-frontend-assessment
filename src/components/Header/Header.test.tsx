//#region Imports

import { render, screen } from '@testing-library/react';
import Header from 'components/Header';
import { Provider } from 'react-redux';
import store from 'storages/system/store';
import TEST_IDS from 'tests/Header/ids.json';

//#endregion

describe('Header Component', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <Header />
            </Provider>
        );
    });

    it('check if the logo was render', () => {
        const element = screen.getByTestId(TEST_IDS.logo);
        expect(element).toBeTruthy();
    });
});

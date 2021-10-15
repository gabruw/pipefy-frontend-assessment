//#region Imports

import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'storages/system/store';
import TSnackbar from 'tests/Snackbar/components/TSnackbar';
import TEST_IDS from 'tests/Snackbar/ids.json';

//#endregion

describe('Snackbar Component', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <TSnackbar />
            </Provider>
        );
    });

    it('check if the alert was render', () => {
        const element = screen.getByTestId(TEST_IDS.alert);
        expect(element).toBeTruthy();
    });

    it('check if the snackbar was render', () => {
        const element = screen.getByTestId(TEST_IDS.snackbar);
        expect(element).toBeTruthy();
    });

    it('check if the name is the same as expected', () => {
        const element = screen.getByTestId(TEST_IDS.alert);
        expect(element.textContent).toBe('Text test');
    });
});

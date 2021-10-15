//#region Imports

import { render, screen } from '@testing-library/react';
import ThemeSwitch from 'components/ThemeSwitch';
import { Provider } from 'react-redux';
import store from 'storages/system/store';
import TEST_IDS from 'tests/ThemeSwitch/ids.json';

//#endregion

describe('ThemeSwitch Component', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <ThemeSwitch />
            </Provider>
        );
    });

    it('check if the day icon was render', () => {
        const element = screen.getByTestId(TEST_IDS.dayIcon);
        expect(element).toBeTruthy();
    });

    it('check if the switch was render', () => {
        const element = screen.getByTestId(TEST_IDS.switch);
        expect(element).toBeTruthy();
    });

    it('check if the night icon was render', () => {
        const element = screen.getByTestId(TEST_IDS.nightIcon);
        expect(element).toBeTruthy();
    });
});

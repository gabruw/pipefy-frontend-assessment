//#region Imports

import { render, screen } from '@testing-library/react';
import Header from 'components/Header';
import TEST_IDS from 'utils/constant/test-props/Header/ids.json';

//#endregion

describe('Header Component', () => {
    beforeEach(() => {
        render(<Header />);
    });

    it('check if the logo was render', () => {
        const element = screen.getByTestId(TEST_IDS.logo);
        expect(element).toBeTruthy();
    });
});

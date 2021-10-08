//#region Imports

import { render, screen } from '@testing-library/react';
import AddPipeCard from 'components/AddPipeCard';
import TEST_IDS from 'utils/constant/test-props/AddPipeCard/ids.json';

//#endregion

describe('AddPipeCard Component', () => {
    beforeEach(() => {
        render(<AddPipeCard />);
    });

    it('check if the icon was render', () => {
        const element = screen.getByTestId(TEST_IDS.icon);
        expect(element).toBeTruthy();
    });

    it('check if the title is the same as expected', () => {
        const element = screen.getByTestId(TEST_IDS.title);
        expect(element.textContent).toBe('Add new pipe');
    });
});

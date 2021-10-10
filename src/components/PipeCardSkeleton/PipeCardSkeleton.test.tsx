//#region Imports

import { render, screen } from '@testing-library/react';
import PipeCardSkeleton from 'components/PipeCardSkeleton';
import TEST_IDS from 'utils/constant/test-props/PipeCardSkeleton/ids.json';

//#endregion

describe('PipeCardSkeleton Component', () => {
    beforeEach(() => {
        render(<PipeCardSkeleton />);
    });

    it('check if the skeleton was render', () => {
        const element = screen.getByTestId(TEST_IDS.skeleton);
        expect(element).toBeTruthy();
    });
});

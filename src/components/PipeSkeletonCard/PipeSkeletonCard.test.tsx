//#region Imports

import { render, screen } from '@testing-library/react';
import PipeSkeletonCard from 'components/PipeSkeletonCard';
import TEST_IDS from 'tests/PipeSkeletonCard/ids.json';

//#endregion

describe('PipeSkeletonCard Component', () => {
    beforeEach(() => {
        render(<PipeSkeletonCard />);
    });

    it('check if the skeleton was render', () => {
        const element = screen.getByTestId(TEST_IDS.skeleton);
        expect(element).toBeTruthy();
    });
});

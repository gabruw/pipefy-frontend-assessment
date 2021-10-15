//#region Imports

import { render, screen } from '@testing-library/react';
import PipeModalInfo from 'components/PipeModal/PipeModalInfoCard';
import { PIPE_MOCK } from 'tests/PipeCard/mocks';
import TEST_IDS from 'tests/PipeModal/PipeModalInfo/ids.json';
import { PIPE_MODAL_INFO_PROPS } from 'tests/PipeModal/PipeModalInfo/props';

//#endregion

const childrenText: string = 'Test';
const childrenName: string = 'test-div';

describe('PipeModalInfo Component', () => {
    beforeEach(() => {
        render(
            <PipeModalInfo
                color={PIPE_MOCK.color}
                text={PIPE_MODAL_INFO_PROPS.text}
                label={PIPE_MODAL_INFO_PROPS.label}
            >
                <div data-testid='test-div'>{childrenText}</div>
            </PipeModalInfo>
        );
    });

    it('check if the text is the same as expected', () => {
        const element = screen.getByTestId(TEST_IDS.text);
        expect(element.textContent).toBe(PIPE_MODAL_INFO_PROPS.text);
    });

    it('check if the label is the same as expected', () => {
        const element = screen.getByTestId(TEST_IDS.label);
        expect(element.textContent).toBe(PIPE_MODAL_INFO_PROPS.label + ':');
    });

    it('check if the children is the same as expected', () => {
        const element = screen.getByTestId(childrenName);
        expect(element.textContent).toBe(childrenText);
    });
});

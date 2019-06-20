// WHAT SHOULD THE OBJECT LOOK LIKE?

import GET_PRACTICES, { getPractices } from './index';

describe('getPractices', () => {
    it('Should return practices', () => {
        const practice = 'List Practice';
        const action = getPractices(practice);
        expect(action.type).toEqual(GET_PRACTICES);
        expect(action.practice).toEqual(practice);
    });
});
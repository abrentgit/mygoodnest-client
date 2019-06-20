// WHAT SHOULD THE OBJECT LOOK LIKE?

import GET_PRACTICES from './index';

describe('getPractices', () => {
    it('Should return practices', () => {
        const title = 'List title';
        const action = addList(title);
        expect(action.type).toEqual(ADD_LIST);
        expect(action.title).toEqual(title);
    });
});
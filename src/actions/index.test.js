
import { GET_PRACTICES, getPractices, GET_ENTRY, getEntry } from './index';

describe('getPractices', () => {
    it('Should return practices', () => {
        const practice = 'List Practice';
        const action = getPractices(practice);
        expect(action.type).toEqual(GET_PRACTICES);
        expect(action.practice).toEqual(practice);
    });
});

describe('getEntry', () => {
    it('should get a single entry', () => {
        const entry = 'List Entry';
        const action = getEntry(entry);
        expect(action.type).toEqual(GET_ENTRY);
        expect(action.entry).toEqual(entry);
    })
})
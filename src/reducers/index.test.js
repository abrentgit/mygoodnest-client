
describe('getPractices', () => {
    it('should return the initial state', () => {

        const practiceNameOne = 'Yoga';
        const practiceNameTwo = 'Meditation'

        const practiceOne = {
            name: practiceNameOne
        }
        const practicerTwo = {
            name: practiceNameTwo
        }
        let state = {
            practices: [practiceOne, practicerTwo]
        };
        expect(state).toEqual({
            practices: [
                {
                    name: practiceNameOne
                },
                {
                    name: practiceNameTwo
                }
            ]
        })
    })
})

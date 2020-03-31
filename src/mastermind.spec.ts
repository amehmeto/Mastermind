import {evaluate} from './mastermind'

describe('Mastermind kata', () => {
    it('should return [0, 0] given [blue], [red]', () => {
        expect(evaluate(['blue'], ['red'])).toStrictEqual([0, 0])
    })
})
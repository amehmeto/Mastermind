import {evaluate} from './mastermind'

describe('Mastermind kata', () => {
    it('should return 0 well-placed and 0 misplaced given [blue] secret and [red] guess', () => {
        const secret = ['blue']
        const guess = ['red']
        const WELL_PLACED = 0
        const MISPLACED = 0
        expect(evaluate(secret, guess))
            .toStrictEqual([WELL_PLACED, MISPLACED])
    })
}
)
import {evaluate} from './mastermind'

describe('Mastermind kata', () => {
    it.each(
        [
            [0, 0, ['blue'], ['red']],
        ]
    )('should return %i well-placed and %i misplaced given %o secret and %o guess', (wellplaced: number, misplaced: number, secret: string[], guess:string[] ) => {
        expect(evaluate(secret, guess))
            .toStrictEqual([wellplaced, misplaced])
    })
})
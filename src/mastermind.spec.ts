import {evaluate} from './mastermind'

describe('Mastermind kata', () => {
    it.each(
        [
            [0, 0, ['blue'], ['red']],
            [0, 0, ['purple'], ['yellow']],
            [1, 0, ['blue'], ['blue']],
            [1, 0, ['red'], ['red']],
            [0, 0, ['blue', 'blue'], ['red', 'red']],
            [0, 1, ['blue', 'red'], ['purple', 'blue']],
            [0, 1, ['green', 'red'], ['purple', 'green']],
            [0, 1, ['green', 'red'], ['red', 'orange']],
            [0, 2, ['green', 'red'], ['red', 'green']],
            [2, 0, ['green', 'red'], ['green', 'red']],
            [0, 0, ['green', 'white', 'black'], ['red', 'purple', 'yellow']],
            [0, 1, ['green', 'white', 'black'], ['red', 'green', 'yellow']],
            [1, 1, ['green', 'white', 'black'], ['red', 'green', 'black']],
            [1, 2, ['green', 'white', 'black'], ['white', 'green', 'black']],
            [3, 0, ['green', 'white', 'black'], ['green', 'white', 'black']],
        ]
    )('should return %i well-placed and %i misplaced given %o secret and %o guess', (wellplaced: number, misplaced: number, secret: string[], guess:string[] ) => {
        expect(evaluate(secret, guess))
            .toStrictEqual([wellplaced, misplaced])
    })
})
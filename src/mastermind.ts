export function evaluate(secret: string[], guess: string[]): GuessResult {
    let guessResult: GuessResult = [0, 0]
    for (let i = 0 ; secret[i] ; i++)
        if (guess.includes(secret[i]))
            guessResult = countIfWellPlaced(guess, secret, i, guessResult)
    return guessResult
}

function countIfWellPlaced(
    guess: string[],
    secret: string[],
    i: number,
    guessResult: GuessResult
): GuessResult {
    const WELLPLACED = 0, MISPLACED = 1;
    isSameIndex(guess, secret, i) ? guessResult[WELLPLACED]++ : guessResult[MISPLACED]++
    return guessResult
}

function isSameIndex(guess: string[], secret: string[], i: number) {
    return guess[i] === secret[i]
}

type GuessResult = [number, number]
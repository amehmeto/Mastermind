export function evaluate(secret: string[], guess: string[]): GuessResult {
    let guessResult: GuessResult = [0, 0]
    for (let i = 0 ; secret[i] ; i++)
        if (guess.includes(secret[i]))
            guessResult = incrementGuessResult(guess, secret, i, guessResult)
    return guessResult
}

function incrementGuessResult(guess: string[], secret: string[], i: number, guessResult: GuessResult): GuessResult {
    const wellplaced = 0, misplaced = 1
    if (isSameIndex(guess, secret, i))
        guessResult[wellplaced]++
    else
        guessResult[misplaced]++
    return guessResult
}

function isSameIndex(guess: string[], secret: string[], i: number) {
    return guess[i] === secret[i];
}

type GuessResult = [number, number]
export function evaluate(secret: string[], guess: string[]): GuessResult {
    let misplaced: number = 0
    let wellplaced: number = 0
    for (let i = 0; secret[i]; i++) {
        if (guess.includes(secret[i])) {
            if (isSameIndex(guess, secret, i))
                wellplaced++
            else
                misplaced++
        }
    }
    return [wellplaced, misplaced]
}

function isSameIndex(guess: string[], secret: string[], i: number) {
    return guess[i] === secret[i];
}

function areArraysEqual(a: string[], b: string[]) {
    return JSON.stringify(a) === JSON.stringify(b)
}

type GuessResult = [number, number]
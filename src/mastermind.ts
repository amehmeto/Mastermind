export function evaluate(secret: string[], guess: string[]): GuessResult {
    if (areArraysEqual(secret, guess))
        return [1, 0]
    return [0, 0]
}

function areArraysEqual(a: string[], b: string[]) {
    return JSON.stringify(a) === JSON.stringify(b)
}

type GuessResult = [number, number]
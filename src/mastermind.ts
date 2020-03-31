export function evaluate(secret: string[], guess: string[]): GuessResult {
    if (JSON.stringify(secret) === JSON.stringify(guess))
        return [1, 0]
    return [0, 0]
}

type GuessResult = [number, number]
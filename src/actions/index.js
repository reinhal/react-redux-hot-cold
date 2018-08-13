export const MAKE_GUESS = 'MAKE GUESS';
export const makeGuess = guess => ({
    type: MAKE_GUESS,
    guess
});

export const RESTART_GAME = 'RESTART GAME';
export const restartGame = correctAnswer => ({
    type: RESTART_GAME,
    correctAnswer
});
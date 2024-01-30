function evaluateGuess(guess,correctAnswer){
    if(guess === correctAnswer){
        return 'correct!'
    }
    return 'incorrect!' 
}
function createRound(deck){
    return {
        deck,
        currentCard:deck[0],
        turns:0,
        incorrectGuesses:[],
    }
}
function takeTurn(guess,round){
    var guessCheck
    if(guess === round.currentCard.correctAnswer){
        guessCheck = 'Correct!'
    }else{
        round.incorrectGuesses.push(round.currentCard.id)
        guessCheck = 'Incorrect!'
    }
    round.turns ++;
    round.currentCard = round.deck[round.turns];
    return guessCheck
}
function calculatePercentCorrect(round){
    var incorrectPercent = (round.incorrectGuesses.length / round.turns) * 100
    incorrectPercent = Math.round(incorrectPercent)
    var correctPercent = 100 - incorrectPercent
    return correctPercent
}
function endRound(round){
var percent = calculatePercentCorrect(round)
console.log(`** Round over! ** You answered ${percent}% of the questions correctly!`)
}
module.exports = {
    evaluateGuess,
    createRound,
    takeTurn,
    calculatePercentCorrect,
    endRound
}
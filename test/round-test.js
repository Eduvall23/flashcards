const chai = require("chai");
const expect = chai.expect;

const { evaluateGuess, takeTurn, createRound, calculatePercentCorrect } = require("../src/round");
const { prototypeData } = require("../src/data");

describe("round", function () {
  it("should be a function", function () {
    expect(evaluateGuess).to.be.a("function");
  });
  it("should return an object", function () {
    var round = createRound(prototypeData);
    expect(round.deck).to.deep.equal(prototypeData)
    expect(round.currentCard).to.equal(prototypeData[0]);
    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([]);
  });
  it('should update the round',function(){
    var round = createRound(prototypeData)
    var answer = takeTurn("array",round)
    expect(round.currentCard).to.equal(prototypeData[1])
    expect(round.turns).to.equal(1)
    expect(round.incorrectGuesses).to.deep.equal([1])
    expect(answer).to.equal("Incorrect!")
  })
  it('should calc the correct percent',function(){
    var round = createRound(prototypeData)
    takeTurn('array',round)
    takeTurn('array',round)
    takeTurn('array',round)
    expect(calculatePercentCorrect(round)).to.equal(33)
  })
});

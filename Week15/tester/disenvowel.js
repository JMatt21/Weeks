var expect = require("chai").expect;
var disenvowel = function(word){
    return word.replace(/[aeiou]/gi, "");
};
// describe("Disenvowel", function () {
//     it("should return strings without vowels", function () {
//         expect(disenvowel('pizza').to.equal('pzz'));
//     });
//     it("should throw when non alpha-numeric characters are put in.", function () {
//         // Like ª ◙ ☺ ☻ ∞ ⌠ µ Ω etc...
//         disenvowel('p☺zz◘');
//     }).to.throw(Error);
// });

console.log(disenvowel('hello there genral kenobi'));
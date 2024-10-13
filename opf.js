// https://ouverture-pas-facile.fr/riddles/pickles/decibel.htm
// niveau 6 =  convertir en ascii 
// niveau 20 = convertir en binaire
// niveau 22 = unsound

let level6 = ['d','l','r','t','s','a',null,'o','f','h'];
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const riddleTab = []
const baseWord = 'decibel';
const compareWord = 'unsound';
const firstStep = [];
const secondStep = [];
[...baseWord].forEach((letter) => {
        console.log(letter.charCodeAt(0));
        firstStep.push(letter.charCodeAt(0));
    
});
riddleTab.push(firstStep);

firstStep.forEach((ascii) => {
    secondStep.push(decimalToBinary(ascii));
});

riddleTab.push(secondStep);

console.log(riddleTab);

function decimalToBinary(decimal) {
  if (decimal === 0) {
    return '0';
  }
  let binary = '';
  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }
  return binary;
}


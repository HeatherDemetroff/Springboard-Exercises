const friend = "BRUTUS"
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const firstLetter = friend[0];
const index = alphabet.indexOf(firstLetter.toLowerCase());
console.log(index);

// Question 1: Javascript indexing starts at 0. Each character has a corresponding index based on it's position in the string.

const encryptedIndex = shiftValue + index;
const encrytedLetter = alphabet[encryptedIndex];
console.log(encrytedLetter);

// Question 2: The modulus operator, %

const alphabetLength = alphabet.length;
console.log(alphabetLength);
const newIndex = (shiftValue + index) % alphabetLength;
console.log(newIndex);
const encrypteFirstLetter = alphabet[newIndex];
console.log(encrypteFirstLetter);

const encryptedMessage = 'EUXWXV';
const messageSlice = encryptedMessage.slice(0, 3);
console.log(messageSlice);
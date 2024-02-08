const friend = "BRUTUS"
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

let encryptedName = "";

for (let i = 0; i < friend.length; i++) {
    const currentLetter = friend[i];
    const currentIndex = alphabet.indexOf(currentLetter.toLowerCase());
    const newIndex = (currentIndex + shiftValue) % alphabet.length;
    encryptedName += alphabet[newIndex].toUpperCase();
}

// Question 1: Manually encrypting each letter creates redundant code and is a lot more work than necessary

// Question 2: The modulus operator will wrap back around to the start if the shift value surpasses the alphabet's length

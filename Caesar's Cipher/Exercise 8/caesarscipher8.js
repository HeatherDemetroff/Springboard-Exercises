const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encryptedLetter(letter, shiftValue){
    const currentIndex = alphabet.indexOf(letter.toLowerCase());
    const newIndex = (currentIndex + shiftValue) % alphabet.length;
    return alphabet[newIndex];
}

function encryptMessage(word, shiftValue){
    let encryptedMessage = "";
    for(let i = 0; i < word.length; i++){
        encryptedMessage += encryptedLetter(word[i], shiftValue);
    }
    return encryptedMessage;
}

function decryptLetter(letter, shiftValue){
    const currentIndex = alphabet.indexOf(letter.toLowerCase());
    const newIndex = (currentIndex - shiftValue + alphabet.length) % alphabet.length;
    return alphabet[newIndex];
}

function decryptMessage(word, shiftValue){
    let decryptedMessage = ""; 
    for(let i = 0; i < word.length; i++){
        decryptedMessage += decryptLetter(word[i], shiftValue);
    }
    return decryptedMessage;
}

let encryptedMessage = encryptMessage(friend, shiftValue);
console.log(encryptedMessage);

let decryptedMessage = decryptMessage(encryptedMessage, shiftValue);
console.log(decryptedMessage);

// Question: Yes, "BRUTUS" would be decrypted. The decryption function is the inverse of the encryption function.
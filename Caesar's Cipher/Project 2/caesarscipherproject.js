const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encrypt (message, shiftValue)
{
    let encryptedMessage = "";
    let counter = 0;

    // created a loop splitting apart the message into letters
    for(let i = 0; i < message.length; i++){
        const currentLetter = message[i];
        if(counter === 2){
            // created a random letter by using math.random in a range of 0 to alphabet.length
           const randomInt = Math.floor(Math.random() * alphabet.length);
           const randomLetter = alphabet[randomInt]; 
           encryptedMessage += randomLetter;
           // resets counter to 0
           counter = 0;
        }
        // checked if current letter is = to a space, if so add it to encryptedMessage       
        if(!alphabet.includes(currentLetter.toLowerCase())){
            encryptedMessage += currentLetter;
        }
        // found the index of the letter compared to the alphabet and shift index of current letter by shiftValue
        else {
           const currentIndex = alphabet.indexOf(currentLetter.toLowerCase());
           const newIndex = (currentIndex + shiftValue) % alphabet.length;
           encryptedMessage += alphabet[newIndex];
        }
        counter++;
    }
  return encryptedMessage;
}

function decrypt (encryptedMessage, shiftValue)
{
  let decryptedMessage = "";

  for(let i = 0; i < encryptedMessage.length; i++){
    const currentLetter = encryptedMessage[i];
    if(!alphabet.includes(currentLetter.toLowerCase())){
        decryptedMessage += currentLetter;
    }
    else {
        // add one to index and check if it's an even number
        if((i + 1) % 3 !== 0){
            const currentIndex = alphabet.indexOf(currentLetter.toLowerCase());
            // https://stackoverflow.com/questions/40692016/javascript-modulo-operator-behaves-differently-from-other-languages/70073304#70073304
            const newIndex = (((currentIndex - shiftValue) % alphabet.length) + alphabet.length) % alphabet.length;
            decryptedMessage += alphabet[newIndex];
        }
    }
  }
  return decryptedMessage;
}

const testMessage = "Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.";
const dMessage = decrypt(testMessage, 42);
console.log(dMessage);
function fizzBuzz(n){
    if(n > 100 && n < 0){
        console.log('Not a valid input');
        return;
    }
    for(let i = 1; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz');
        }
        else if(i % 3 === 0){
            console.log('Fizz');
        }
        else if(i % 5 === 0){
            console.log('Buzz');
        }
        else{
            console.log(i)
        }
    }
return;
}
fizzBuzz(16) 
fizzBuzz(20)

function letterCount(word){
    let output = {}
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    if(typeof word !== 'string'){
        console.error('Invalid');
        return;
    }
    for(const letter of word){
        if (!alphabet.includes(letter.toLowerCase())){
            console.error('Invalid');
            return;
        }
    }

    for(let letter of word){
        let lowerCaseLetter = letter.toLowerCase();
        if(output[lowerCaseLetter]!== undefined){
            output[lowerCaseLetter]++;
        }
        else{
            output[lowerCaseLetter] = 1;
        }
    }
    
return output;
}

console.log(letterCount('lilo'));
console.log(letterCount('cheese400'));
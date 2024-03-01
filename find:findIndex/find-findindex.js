/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(usersArray, username) {
  return usersArray.find(function(user){
    return user.username === username;
  })
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
  let foundIndex = usersArray.findIndex(function(user){
    return user.username === username;
  })
  if(foundIndex === -1) return;

  return usersArray.splice(foundIndex,1)[0];
}

function extractValue(arr, key){
  return arr.reduce(function(acc,next){
      acc.push(next[key]);
      return acc;
  },[]);
}

function vowelCount(str){
  const vowels = "aeiou";
  return str.split('').reduce(function(acc,next){
      let lowerCased = next.toLowerCase()
      if(vowels.indexOf(lowerCased) !== -1){
          if(acc[lowerCased]){
              acc[lowerCased]++;
          } else {
              acc[lowerCased] = 1;
          }
      }
      return acc;
  }, {});
}

function addKeyAndValue(arr, key, value){
  return arr.reduce(function(acc,next,idx){
      acc[idx][key] = value;
      return acc;
  },arr);
}

function partition(arr, cb){
  return arr.reduce(function(acc,next){
      if(cb(next)){
          acc[0].push(next);
      } else {
          acc[1].push(next);
      }
      return acc;
  }, [[],[]]);
}
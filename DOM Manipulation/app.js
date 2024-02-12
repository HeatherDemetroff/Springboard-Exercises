document.getElementById('container');
document.querySelector('#container');
document.querySelectorAll('.second');
document.querySelector('ol.third');

let containerSelection = document.querySelector('#container');
containerSelection.innerText = 'Hello!';

let footerSelection = document.querySelector(".footer");
footerSelection.classList.add('main');
footerSelection.classList.remove('main');

let listElement = document.createElement('li');
listElement.innerText = 'four';

let newLi = document.querySelector('ul');
newLi.append(listElement);

let orderedList = document.querySelectorAll('ol li');
for(let item of orderedList){
    item.style.backgroundColor = 'green';
}

let footer = document.querySelector('.footer');
footer.remove();
const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// a function that searches the fruit array and returns a result
function search(str) {
	let results = [];
	console.log(str);
	// loops through all fruits and adds them to results if user input is included in fruit list
	fruits.forEach(fruit => {
		if (fruit.toLowerCase().includes(str.toLowerCase())) {
			results.push(fruit);
		}
	});

	return results;
}

function searchHandler(e) {
	// retrieve the search box and dropdown elements
	const searchBox = document.getElementById("fruit");
	let searchBoxVal = searchBox.value;
	const dropdown = document.querySelector(".suggestions");

	if (searchBoxVal === '') {
		// If the search box is empty, hide the dropdown
		dropdown.style.display = 'none';
	} else {
		let results = search(searchBoxVal);
		console.log(results);
		showSuggestions(results, searchBoxVal);
		// Show the dropdown
		dropdown.style.display = 'block';
	}
	// if search box is empty, clear the results
	if (searchBoxVal === '') {
		ul.innerHTML = '';
	} else {
		// if search box is not empty, perform search
		let results = search(searchBoxVal);
		console.log(results);
		// show search results in the dropdown
		showSuggestions(results, searchBoxVal);
	}
}
// function that shows the search results in the dropdown
function showSuggestions(results, inputVal) {
	const ul = document.getElementById("searchResults");
	ul.innerHTML = "";
	results.forEach(result => {
		let li = document.createElement("li");
		li.textContent = result;
		li.addEventListener('click', useSuggestion);
		ul.appendChild(li);
	});

}

// a function that populates the search box with the clicked suggestion
function useSuggestion(e) {
	const searchBox = document.getElementById("fruit");
	console.log(e);
	searchBox.value = e.target.innerText;
}

// event listener that handles clicks of the dropdown
const dropdown = document.querySelector(".suggestions");
dropdown.addEventListener('click', useSuggestion);

dropdown.addEventListener('mouseleave', function () {
	// When the mouse leaves the dropdown, hide the dropdown
	dropdown.style.display = 'none';
});

// 
input.addEventListener('keyup', searchHandler);
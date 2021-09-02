// Javascript Section
// Varibles that will not change 

var cityInputEl = document.querySelector('#cityInput'); 
var cardBoxesEl = document.querySelector('#resultCards'); // the Five day cards
var searchformEl = document.querySelector('#search-box'); // Search box for the city
var searchHistoryEl = document.querySelector('#searchHistory'); // Previously searched cities go here

var loadCities = function() {
    var lastSearch = localStorage.getItem('lastSearch'); 
    if (lastSearch) {
        var citySearch = localStorage.getItem('citySearch');
    }
}



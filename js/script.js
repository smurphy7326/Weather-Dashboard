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

// Search Button is clicked 
var submitButton = function(event) {
    event.preventDefault();
    var city = cityInputEl.nodeValue.trim();
    if(city) {
        getLATLON(city)
        cityInputEl.value = '';
    } else ('Please enter a city');
    }


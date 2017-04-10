var dish = document.querySelectorAll('.recipe');
var searchBox = document.querySelector('.search-box');

document.querySelector('.search-btn').addEventListener('click', function () {
    'use strict';
    for (var i = 0; i < dish.length; i++) {
        if (searchBox.value === 'Beef Stew' && !dish[i].textContent.startsWith('Beef')) {
            dish[i].style.display = 'none';
        } else if (searchBox.value === 'Juicy Steak' && !dish[i].textContent.startsWith('Juicy')) {
            dish[i].style.display = 'none';
        } else if (searchBox.value === 'Italian Spaghetti' && !dish[i].textContent.startsWith('Italian')) {
            dish[i].style.display = 'none';
        } else {
            dish[i].style.display = 'block';
        }
    }
});
document.querySelector('.search-box').addEventListener('click', function () {
    'use strict';
    searchBox.value = '';
});
document.querySelector('#show-btn').addEventListener('click', function () {
    for (var i = 0; i < dish.length; i++) {
        dish[i].style.display = 'block'
    }
});
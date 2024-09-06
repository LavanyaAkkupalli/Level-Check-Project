// script.js

// document.getElementById('colorButton').addEventListener('click', function() {
//     const articleText = document.querySelector('article p');
//     articleText.style.color = articleText.style.color === 'blue' ? 'black' : 'blue';
// });
document.getElementById('colorButton').addEventListener('click', function() {
    // Select all elements you want to change the color of
    const elementsToChange = document.querySelectorAll('article p, article h4');
    
    // Loop through each element and toggle the color
    elementsToChange.forEach(function(element) {
        element.style.color = element.style.color === 'blue' ? 'black' : 'blue';
    });
});




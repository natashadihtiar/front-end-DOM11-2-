'use strict';
const $box = document.querySelectorAll('.box');
const array = ['blue', 'green', 'yellow'];
$box.forEach(box => {
    box.addEventListener('click', function() {
        const colours = array.shift();
        array.push(colours);
        this.style.background = colours;
    }); 
});

'use strict';

let buttons= document.querySelectorAll('.button');

const handleClick = function () {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(){
            console.log (i);
        }); 
}
}



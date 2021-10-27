'use strict';

let buttons = document.querySelectorAll('.button');

const handleClick = () => {
    for (let i = 0; i < buttons.length; i+=1)
    {
        buttons[i].addEventListener('click', function(){
            console.log (this.innerHTML);
        }) 
}
}



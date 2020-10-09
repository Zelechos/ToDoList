'use strict'
window.addEventListener('load',()=>{
    var text = document.getElementById('Text');
    var word = text.getElementsByTagName('span');
    var i=0;

    function rotator(){
        word[i].className= "d-none";
        i = ( i + 1 ) % word.length;
        word[i].className= "d-initial";
    }
    setInterval(rotator , 900);
});

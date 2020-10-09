window.addEventListener('scroll',()=>{
    var head = document.querySelector('nav');
    var button = document.querySelector('button');
    var logo = document.querySelector('img');


    head.classList.toggle('sticky', window.scrollY > 0);
    
    if(button.classList.toggle('sticky', window.scrollY > 0)){
        button.className = "navbar-toggler bg-dark";
    }else{
        button.className = "navbar-toggler bg-light";
    }

    if(logo.classList.toggle('sticky', window.scrollY > 0)){
        logo.src = "log.png";
    }else{
        logo.src = "log1.png";
    }

});
const el1 = document.querySelector(".fas");
const el2 = document.querySelector(".close .fas");
const hamburgerMenu = document.querySelector(".hamburger-menu");

el1.addEventListener( 'click',
    function(){
        hamburgerMenu.classList.add ("active");
    }
);

el2.addEventListener( 'click',
    function(){
        hamburgerMenu.classList.remove ("active");
    }
);
const el1 = document.querySelector(".fas");
const el2 = document.querySelector(".close .fas");
const hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];

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

window.addEventListener( 'resize',
    function(){
        if(screen.width>1000){
            hamburgerMenu.classList.remove ("active");
        }
    }
);
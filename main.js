const el1 = document.querySelector(".fas");
const el2 = document.querySelector(".close .fas");
const hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];

el1.addEventListener( 'click',
    function(){
        hamburgerMenu.style.display = "block";
    }
);

el2.addEventListener( 'click',
    function(){
        hamburgerMenu.style.display = "none";
    }
);

window.addEventListener( 'resize',
    function(){
        if(screen.width>1000){
            hamburgerMenu.style.display = "none";
        }
    }
);


const el1 = document.getElementsByClassName("fas")[0];
const el2 = document.getElementsByClassName("fas")[1];
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

console.log(screen.width);

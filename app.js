let navbar = document.querySelector(".custom-navbar")

window.addEventListener("scroll", ()=>{
    if(window.scrollY>0){
        navbar.style.backgroundColor = "transparent"
        navbar.style.backdropFilter = "blur(20px)"

    }else{
        navbar.style.backgroundColor = "white"
    }
})
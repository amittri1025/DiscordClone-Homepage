const burgerMenu = document.querySelector(".burger-menu");
const closeMenu = document.getElementById("menu-close");
const Menu = document.querySelector(".mob-menu");
const backtotop = document.querySelector(".backtotop")
const body = document.querySelector('body')
const loader = document.getElementById('loader')

burgerMenu.addEventListener("click", ()=>{
    Menu.classList.add("menu-visible")
})

closeMenu.addEventListener("click", ()=>{
    Menu.classList.remove("menu-visible")
})
function pageloads(){
    setTimeout(()=>{
        if(body.classList[0]=="loader"){
            loader.style.transition="opacity ease 1s"
            loader.style.opacity="0"
            body.classList.remove("loader")
        }
        
    }, 2000)
    
    setTimeout(()=>{
    
            loader.remove()
    
    }, 2300)
    
}

window.addEventListener('scroll' , function(){
    backtotop.classList.toggle('active' , window.scrollY > 500)
  });

  backtotop.addEventListener('click', ()=>{
    document.documentElement.scrollTop= 0;
  })



    console.log(body.classList[0]=="loader")

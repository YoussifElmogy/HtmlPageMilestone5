// window.onload=()=>{
//     document.querySelector(".loader").style.display="none"
// }

$(window).on("load",function(){
    $(".loader").hide();
     
})
// remove and add active class 
var links = document.querySelectorAll(".nav-link")

links.forEach(link=>{
    link.addEventListener('click',()=>{
        removeClass();
        link.classList.add("active");

    })
})

function removeClass(){
    links.forEach(link=>{
        link.classList.remove("active");
    
    })
}
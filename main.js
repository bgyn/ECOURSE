const arrowDownEl=document.querySelector(".fa-chevron-down");
const titleBoxEl=document.querySelector(".title_box");
const subjectsLinksEl=document.querySelector(".subjects_links");
const arrowDown2El=document.querySelector(".arrow-down");
const webDesignsLinksEl=document.querySelector(".web_design_links");
const circleEl=document.querySelectorAll(".circle");
const wrapperEl=document.querySelector(".wrapper");
const hamburgerEl=document.querySelector(".hamburger");
const headerEl=document.querySelector(".header");
let counter=0;
titleBoxEl.addEventListener("click",()=>{
    subjectsLinksEl.classList.toggle("active");
})

arrowDown2El.addEventListener('click',()=>{
    webDesignsLinksEl.classList.toggle("active");
})
function removeClass()
{
    circleEl.forEach((circle)=>{
        circle.classList.remove("active");
    })
}
circleEl.forEach((circle,index)=>{
    circle.addEventListener("click",()=>{
        removeClass();
        circle.classList.add("active");
        wrapperEl.style.transform=`translate(${-100*index}vw)`;
    })
})
setInterval(()=>{
        wrapperEl.style.transform=`translate(${-100*counter}vw)`;
        removeClass();
        circleEl[counter].classList.add("active");
        counter++;
        if(counter===3){
            counter=0
        }
    },10000
)
hamburgerEl.addEventListener("click",()=>{
    headerEl.classList.toggle("active");
})
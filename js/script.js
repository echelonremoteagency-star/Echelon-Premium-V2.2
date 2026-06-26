/* ==========================================
   ECHELON PREMIUM V2.2
========================================== */

document.addEventListener("DOMContentLoaded", () => {

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

if(window.scrollY > 60){

header.style.background="rgba(7,19,33,.90)";
header.style.padding="14px 5%";

}else{

header.style.background="rgba(7,19,33,.65)";
header.style.padding="20px 5%";

}

});

});

/* ===========================
SCROLL REVEAL
=========================== */

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll(".section,.division-card,.article-card,.stat-card,.faq-item,.glass-card").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

/* ===========================
SMOOTH SCROLL
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

/* ===========================
SCROLL TO TOP BUTTON
=========================== */

const topButton=document.createElement("button");

topButton.innerHTML="↑";

topButton.className="topButton";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.classList.add("showTop");

}else{

topButton.classList.remove("showTop");

}

});

topButton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

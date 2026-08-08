document.addEventListener("DOMContentLoaded",()=>{

// Registration
//const form=document.querySelector(".registration-form form");
const msg=document.getElementById("msg");

if(form){

form.addEventListener("submit",e=>{

//e.preventDefault();

if(msg){

msg.innerHTML="<div class='success'>ðŸŽ‰ Registration Successful!</div>";

}

form.reset();

});

}

// Counter
const stats=document.querySelector(".stats");

const counters=document.querySelectorAll(".counter");

if(stats && counters.length){

const runCounter=()=>{

counters.forEach(counter=>{

const target=parseInt(counter.dataset.count);

const suffix=counter.textContent.includes("+")?"+":"";

let count=0;

const increment=Math.ceil(target/80);

const update=()=>{

count+=increment;

if(count<target){

counter.innerText=count.toLocaleString();

requestAnimationFrame(update);

}else{

counter.innerText=target.toLocaleString()+suffix;

}

};

update();

});

};

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

runCounter();

observer.disconnect();

}

});

});

observer.observe(stats);

}

// FAQ

document.querySelectorAll(".faq-question").forEach(question=>{

question.addEventListener("click",()=>{

document.querySelectorAll(".faq-item").forEach(item=>{

if(item!==question.parentElement){

item.classList.remove("active");

}

});

question.parentElement.classList.toggle("active");

});

});

	
	const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Close menu after clicking a link
document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

    });

});
	
	
// Scroll Button

const topBtn=document.getElementById("topBtn");

if(topBtn){

window.addEventListener("scroll",()=>{

topBtn.style.display=window.scrollY>400?"block":"none";

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

});

window.addEventListener("load", function(){

    const loader = document.getElementById("loader");

    setTimeout(function(){

        loader.classList.add("loader-hide");

    }, 800);

});

const form = document.getElementById("registrationForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", async function(e){

    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch(form.action,{
        method:"POST",
        body:formData
    });

    if(response.ok){

        successMessage.classList.add("show");

        form.reset();

    }else{

        alert("Something went wrong. Please try again.");

    }
	if (closeMessage) {
    closeMessage.addEventListener("click", function () {
        successMessage.classList.remove("show");
    });
}

});

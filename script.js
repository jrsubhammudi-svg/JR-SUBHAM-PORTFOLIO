// Dark / Light Mode

const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = function(){

document.body.classList.toggle("dark");


if(document.body.classList.contains("dark")){

themeBtn.innerHTML = "☀️";

}else{

themeBtn.innerHTML = "🌙";

}

};



// Simple Visitor Counter

let count = localStorage.getItem("jr_subham_visit");


if(count){

count++;

}else{

count = 1;

}


localStorage.setItem("jr_subham_visit", count);



console.log("Visitors: " + count);

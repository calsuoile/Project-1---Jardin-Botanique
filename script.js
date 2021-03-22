
const openActivities = document.querySelectorAll(".openActivities");
const article = document.querySelectorAll(".article");
const closeActivities = document.querySelectorAll(".closeActivities");

for (let i = 0; i < openActivities.length; i ++){
    openActivities[i].addEventListener("click", function(){
        article[i].style.display = "block";
    }
)}

for (let i = 0; i < closeActivities.length; i ++){
    closeActivities[i].addEventListener("click", function(){
        article[i].style.display = "none";
    }
)}

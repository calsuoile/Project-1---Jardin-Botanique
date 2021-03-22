
const openActivities = document.querySelector(".openActivities");
const article = document.querySelector(".article");
const closeActivities = document.querySelector(".closeActivities");

openActivities.addEventListener("click", function(){
    article.style.display = "block";
})

closeActivities.addEventListener("click", function(){
    article.style.display = "none";
})

//-------Nha Vy----//
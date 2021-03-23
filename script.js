
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

//Début pop up bouton valider réservation//
const validationButton = document.querySelector(".bouton-booking")
const bookingDone = "Votre réservation a bien été prise en compte.";
validationButton.addEventListener('click', function(){
    alert(bookingDone);
});
//Fin pop up bouton valider réservation//

//Début pop up bouton soumettre formulaire//
const validationForm = document.querySelector(".bouton-form")
const formSent = "Votre message a bien été envoyé.";
validationForm.addEventListener('click', function(){
    alert(formSent);
});
//Fin pop up bouton soumettre formulaire//






<div id="menuburger">
<div class="bar1"></div>
<div class="bar2"></div>
<div class="bar3"></div>
</div>
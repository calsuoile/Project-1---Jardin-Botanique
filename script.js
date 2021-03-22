
const openActivities = document.querySelector(".openActivities");
const article = document.querySelector(".article");
const closeActivities = document.querySelector(".closeActivities");

openActivities.addEventListener("click", function(){
    article.style.display = "block";
})

closeActivities.addEventListener("clicl", function(){
    article.style.display = "none";
})

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
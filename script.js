
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
const validationButton = document.getElementById("valid-button1");
const bookingDone = "Votre réservation a bien été prise en compte.";
validationButton.addEventListener('click', function(){
    alert(bookingDone);
});
//Fin pop up bouton valider réservation//

//Début pop up bouton soumettre formulaire//
const validationForm = document.getElementById("valid-button2");
const formSent = "Votre message a bien été envoyé.";
validationForm.addEventListener('click', function(){
    alert(formSent);
});
//Fin pop up bouton soumettre formulaire//

//Début Alerte champs vide//
const formValid = document.getElementById("valid-button2");
const nomPrenom = document.getElementById("nom");
const missNomPrenom = document.getElementById("missNomPrenom");

formValid.addEventListener('click', validation);

function validation(event){
    if (nomPrenom.validity.valueMissing){
        event.preventDefault();
        missNomPrenom.textContent = "Champs non renseigné";
        missNomPrenom.style.color = "red";
    }else {
        alert(formSent);
    }
}

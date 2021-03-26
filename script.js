const openActivities = document.querySelectorAll(".openActivities");
const article = document.querySelectorAll(".article");
const closeActivities = document.querySelectorAll(".closeActivities");

for (let i = 0; i < openActivities.length; i++) {
  openActivities[i].addEventListener("click", function () {
    article[i].style.display = "block";
  });
}

for (let i = 0; i < closeActivities.length; i++) {
  closeActivities[i].addEventListener("click", function () {
    article[i].style.display = "none";
  });
}

//Début pop up bouton valider réservation
//const validationButton = document.getElementById("valid-button1");
////const bookingDone = "Votre réservation a bien été prise en compte.";
//validationButton.addEventListener("click", function () {
//alert(bookingDone);
//});
const bookingValid = document.getElementById("valid-button1");
const aGe = document.getElementById("age");
const missAge = document.getElementById("missAge");
const nomPrenom1 = document.getElementById("nom1");
const missNomPrenom1 = document.getElementById("missNomPrenom1");
const numberPerson = document.getElementById("person-number");
const missPersonNumber = document.getElementById("missPersonNumber");
const bookingDone = "Votre réservation a bien été prise en compte.";

bookingValid.addEventListener("click", validationBooking);

function validationBooking(event) {
  if (aGe.validity.valueMissing) {
    event.preventDefault();
    missAge.innerHTML = "Champs non renseigné";
    missAge.style.color = "red";
    aGe.style.border = "1px solid red";
  }
  if (nomPrenom1.validity.valueMissing) {
    event.preventDefault();
    missNomPrenom1.innerHTML = "Champs non renseigné";
    missNomPrenom1.style.color = "red";
    nomPrenom1.style.border = "1px solid red";
  }
  if (numberPerson.validity.valueMissing) {
    event.preventDefault();
    missPersonNumber.innerHTML = "Champs non renseigné";
    missPersonNumber.style.color = "red";
    numberPerson.style.border = "1px solid red";
  }
  if (
    !aGe.validity.valueMissing &&
    !nomPrenom1.validity.valueMissing &&
    !numberPerson.validity.valueMissing
  ) {
    alert(bookingDone);
  }
}

//Fin pop up bouton valider réservation

//Début formulaire contact
const formValid = document.getElementById("valid-button2");
const nomPrenom = document.getElementById("nom");
const missNomPrenom = document.getElementById("missNomPrenom");
const eMail = document.getElementById("email");
const missMail = document.getElementById("missMail");
const mesSage = document.getElementById("message");
const missMessage = document.getElementById("missMsg");
const formSent = "Votre message a bien été envoyé.";

formValid.addEventListener("click", validation);

function validation(event) {
  if (nomPrenom.validity.valueMissing) {
    event.preventDefault();
    missNomPrenom.innerHTML = "Champs non renseigné";
    missNomPrenom.style.color = "red";
    nomPrenom.style.border = "1px solid red";
  }
  if (eMail.validity.valueMissing) {
    event.preventDefault();
    missMail.innerHTML = "Champs non renseigné";
    missMail.style.color = "red";
    eMail.style.border = "1px solid red";
  }
  if (mesSage.validity.valueMissing) {
    event.preventDefault();
    missMessage.innerHTML = "Champs non renseigné";
    missMessage.style.color = "red";
    mesSage.style.border = "1px solid red";
  }
  if (
    !nomPrenom.validity.valueMissing &&
    !eMail.validity.valueMissing &&
    !mesSage.validity.valueMissing
  ) {
    alert(formSent);
  }
}
//Fin formulaire contact

/*menu burger*/
const burgerMenu = document.getElementById("burger");
const navBar = document.querySelector(".menuweb");
burgerMenu.addEventListener("click", () => {
  navbar.classList.toggle("display-block");
});

// Utilisation du scroll exécute la fonction
window.onscroll = function () {
  myFunction();
};

// Variable pour la navBar
const navbar = document.getElementById("navbar");

// variable et navBar sur le top
const sticky = navbar.offsetTop;

// Suivant la position de la navBar supprimer ou pas la classe sticky
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

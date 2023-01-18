"use strict";

// Get form inputs classes and convert into an array
let getInputs = document.getElementsByClassName("details__form-input");
let inputsArray = Array.from(getInputs);

// Get card classes and convert getCard into an array
let getCard = document.getElementsByClassName("card__front");
let getCardCVC = getCard[0].nextElementSibling.firstElementChild;
let cardChildren = Array.from(getCard[0].children);

/* Removes the logo from the cardChildren array and add the card CVC to it.
Also changes the position of the card number within the array to match the inputs array */
let removedValues = cardChildren.splice(0, 2);
cardChildren.push(getCardCVC);
cardChildren.splice(1, 0, removedValues[1]);

// Get input from fields and put it on credit card images
function updateCards(e) {
    // Returns which field is receiving input
    let activeInput = inputsArray.indexOf(e.target);

    if (e.target.value != "") {
        // Update the card information
        cardChildren[activeInput].innerHTML = e.target.value;

    } else {
        // Revert values on the card images to their default if fields are emptied
        const defaultCardValues = ["NAME", "0000 0000 0000 0000", "MM/YY", "000"]
        cardChildren[activeInput].innerHTML = defaultCardValues[activeInput];
    }
}

// Add event listeners to input fields
function addEventListeners() {
    for (let i = 0; i < 4;) {
        getInputs[i].addEventListener("input", updateCards);
        i++;
    }
}

document.onload = addEventListeners();

// Form verification
function verifyName() {
    
}
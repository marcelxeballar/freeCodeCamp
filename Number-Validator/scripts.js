const selectedCountry = document.getElementById("selected-country");
const countriesList = document.querySelector(".countries-list");
const numberInput = document.getElementById("user-input");
const validateButton = document.getElementById("check-btn");
const clearInput = document.getElementById("clear-input");
const inputWrapper = document.querySelector(".input-wrapper");
let info = document.querySelector(".info");
let infoText = info.querySelector("p");

let infoSpan = document.getElementById("info");
let failedSpan = document.getElementById("failed");

let listIsOpen = false;

let countries = {
  "country-usa": {
    countryName: "United States",
    countryImage: "https://cdn0.iconfinder.com/data/icons/195-flat-flag-psd-icons/70/United-States-of-America.png",
    numCode: "+1 000 000 000",
    info: "Type a US-based phone number as +1 (AAA) BBB-CCCC."
  },
  "country-br": {
    countryName: "Brazil",
    countryImage: "https://cdn0.iconfinder.com/data/icons/195-flat-flag-psd-icons/70/Brazil.png",
    numCode: "+55 0000 00000",
    info: "Type a Brazilian-based phone number as +55 (AA) BBBB-CCCCC."
  },
  "country-ph": {
    countryName: "Philippines",
    countryImage: "https://cdn0.iconfinder.com/data/icons/195-flat-flag-psd-icons/70/Philippines.png",
    numCode: "+63 000 000 0000",
    info: "Type a Philippine-based phone number as +63 (AAA) BBB-CCCC."
  }
  }

function toggleList() {
  countriesList.style.display = listIsOpen ? "none" : "block";
  listIsOpen = !listIsOpen;
}

selectedCountry.addEventListener("click", (event) => {
  event.stopPropagation(); 
  toggleList();
});

document.addEventListener("click", (event) => {
  const targetElement = event.target;

  if (!selectedCountry.contains(targetElement) && !countriesList.contains(targetElement)) {
    countriesList.style.display = "none";
    listIsOpen = false;
  }
});

const countryChoice = document.getElementsByClassName("country-choice");
for (const country of countryChoice){
  country.addEventListener("click", () => {
    selectedCountry.querySelector("img").src = countries[country.id].countryImage;
    selectedCountry.querySelector("p").textContent = countries[country.id].countryName;
    numberInput.placeholder = countries[country.id].numCode;

    changeInfoColor("#3c3221", failedSpan, infoSpan);

    countriesList.style.display = "none";
    infoText.textContent = countries[country.id].info;
    listIsOpen = false;
    numberInput.value = "";
    clearInput.style.display = "none";
  })
}

numberInput.addEventListener("input", () => {
  toggleclearInput(); 
});

document.addEventListener("keydown", (e) => {
  setTimeout(toggleclearInput, 0);
});

function toggleclearInput() {
  if (numberInput.value.length > 0) {
    clearInput.style.display = "block";
  } else {
    clearInput.style.display = "none";
  }
}

clearInput.addEventListener("click", () => {
  numberInput.value = "";
  clearInput.style.display = "none";

});


validateButton.addEventListener("click", () => {
  if (numberInput.value.length > 0) {
    console.log(numberInput.value);
    validateButton.textContent = "Validate Again"
    inputWrapper.style.display= "none";
    document.getElementById("number-display").textContent = numberInput.value;
    document.getElementById("intro-display").classList.add("hidden");

    document.getElementById("info-div").classList.add("hidden");
    document.getElementById("results-div").classList.remove("hidden");

    validateNumber(numberInput.value);

  }
  else {
    alert("Please provide a phone number");
    infoText.textContent = "FAILED! Please provide a phone number."
    changeInfoColor("#b62424", infoSpan, failedSpan);
  }
})


function changeInfoColor(background, toAdd, toRemove){
  info.style.background = background;
  toAdd.classList.add("hidden");
  toRemove.classList.remove("hidden");
}


function validateNumber(number){
  const legalCharacters = /^[0-9()+-]+$/;
  if (legalCharacters.test(number))
  {
  let cleanedNumber = number.replace(/[-+()]/g, "");
  console.log("Legal")
  const regex = /[0-9]/i;
  }
  else {
    console.log("Illegal")
}
}


const selectedCountry = document.getElementById("selected-country");
const countriesList = document.querySelector(".countries-list");
const numberInput = document.getElementById("user-input");
const validateButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const inputWrapper = document.querySelector(".input-wrapper");
let info = document.querySelector(".info");
let infoText = info.querySelector("p");
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
    countriesList.style.display = "none";
    infoText.textContent = countries[country.id].info;
    listIsOpen = false;
    numberInput.value = "";
    clearButton.style.display = "none";
  })
}

numberInput.addEventListener("input", () => {
  toggleClearButton(); 
});

document.addEventListener("keydown", (e) => {
  setTimeout(toggleClearButton, 0);
});

function toggleClearButton() {
  if (numberInput.value.length > 0) {
    clearButton.style.display = "block";
  } else {
    clearButton.style.display = "none";
  }
}

clearButton.addEventListener("click", () => {
  numberInput.value = "";
  clearButton.style.display = "none";
});


validateButton.addEventListener("click", () => {
  if (numberInput.value.length > 0) {
  validateButton.textContent = "Validate Again"
   inputWrapper.style.display= "none";
   document.getElementById("number-display").textContent = numberInput.value;


  }
  else {
    infoText.textContent = "FAILED! The number you provided appears to be invalid."
    info.style.background = "#b62424";
  let infoSpan = document.getElementById("info");
  let failedSpan = document.getElementById("failed");
  infoSpan.classList.add("hidden");
  failedSpan.classList.remove("hidden");
  }
})
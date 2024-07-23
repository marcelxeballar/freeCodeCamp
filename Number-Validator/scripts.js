document.addEventListener("DOMContentLoaded", (event) => {
const countrySelected = document.querySelector(".ct-selected");
const countryList  = document.querySelector(".ct-list");
const tip = document.querySelector(".tip-container");
const input = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn")

const countryInfo = {
  us: {
    name: "United States",
    flag: "https://cdn0.iconfinder.com/data/icons/195-flat-flag-psd-icons/70/United-States-of-America.png",
  },
  br: {
    name: "Brazil",
    flag: "https://cdn0.iconfinder.com/data/icons/195-flat-flag-psd-icons/70/Brazil.png",
  },
  ph: {
    name: "Philippines",
    flag: "https://cdn0.iconfinder.com/data/icons/195-flat-flag-psd-icons/70/Philippines.png",
  },
  icons: {
    info: `info`,
    wrong: `dangerous`,
    correct: `verified`
  },
  message: {
    us: "Type a US phone number as (123) 456-7890.",
    br: "Type a Brazilian phone number as +55 11 91234-5678.",
    ph: "Type a Philippine phone number as +63 912 345 6789.",
    error: "OPPS! It seems you did not provide a number."
  },
}

countryList.innerHTML = `
  <div class="flex-row countries" id="us">
    <img src=${countryInfo.us.flag}>
    <p>${countryInfo.us.name}</p>
  </div>
  <div class="flex-row countries" id="br">
    <img src=${countryInfo.br.flag}>
    <p>${countryInfo.br.name}</p>
  </div>
  <div class="flex-row countries" id="ph">
    <img src=${countryInfo.ph.flag}>
    <p>${countryInfo.ph.name}</p>
  </div>
`;

/* Functions */
/* Functions */

function updateCountrySelected(country){
  countrySelected.innerHTML = `
  <img src=${countryInfo[country].flag}>
  <p>${countryInfo[country].name}</p>
`;
}

function updateTip(background, iconKey, typeOfMessage){
  tip.style.background = background;
  tip.innerHTML = `
  <p class="flex-row">
  <span class="material-symbols-outlined">${countryInfo.icons[iconKey]}</span>
  ${countryInfo.message[typeOfMessage]}
  </p>
`;
}

/* Runs after the innerHTML is loaded. */
/* Runs after the innerHTML is loaded. */

  updateCountrySelected("us");
  updateTip("#895212", "info", "us")
  
  countrySelected.addEventListener("click", (event) => {
    event.stopPropagation();
    countryList.classList.toggle("hidden");
  });

 document.addEventListener("click", () => {
  if(!countryList.classList.contains("hidden")){
    countryList.classList.toggle("hidden");
  }
 })

  const countries =  document.querySelectorAll(".countries");
  countries.forEach(function(country) {
    country.addEventListener("click", function(){
      console.log(country.id)
      updateCountrySelected(`${country.id}`);
      countryList.classList.toggle("hidden");
      updateTip("#895212", "info", country.id)
      countryListIsOpen = true;
    })
  })

  checkButton.addEventListener("click", () => {
    if (input.value === "" && input.value.length === 0){
      alert("Please provide a phone number");
      updateTip("#b62424", "wrong", "error");
    }
    else {
      console.log(input.value)
    }
  })
});
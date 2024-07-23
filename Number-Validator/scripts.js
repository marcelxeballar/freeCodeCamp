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
    text: "Type a US phone number as (123) 456-7890."
  },
  br: {
    name: "Brazil",
    flag: "https://cdn0.iconfinder.com/data/icons/195-flat-flag-psd-icons/70/Brazil.png",
    text: "Type a Brazilian phone number as +55 11 91234-5678."

  },
  ph: {
    name: "Philippines",
    flag: "https://cdn0.iconfinder.com/data/icons/195-flat-flag-psd-icons/70/Philippines.png",
    text: "Type a Philippine phone number as +63 912 345 6789."
  },
  icons: {
    info: `info`,
    wrong: `dangerous`,
    correct: `verified`
  }
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
tip.innerHTML = `
    <p>
    <span class="material-symbols-outlined">${countryInfo.icons.info}</span>
    ${countryInfo.us.text}
    </p>
`;


function updateCountrySelected(country){
  countrySelected.innerHTML = `
  <img src=${countryInfo[country].flag}>
  <p>${countryInfo[country].name}</p>
`;
}


function updateTip(background, text){
  tip.style.background = background;
  tip.querySelector("p").innerText = text;
}

/* Runs after the innerHTML is loaded. */
/* Runs after the innerHTML is loaded. */

  updateCountrySelected("us");
  
  countrySelected.addEventListener("click", () => {
    countryList.classList.toggle("hidden");
  });

  const countries =  document.querySelectorAll(".countries");
  countries.forEach(function(country) {
    country.addEventListener("click", function(){
      console.log(country.id)
      updateCountrySelected(`${country.id}`);
      countryList.classList.toggle("hidden");
      updateTip("#895212", countryInfo[country.id].text)
    })
  })


  checkButton.addEventListener("click", () => {
    if (input.value === "" && input.value.length === 0){
      alert("Please provide a phone number");
      updateTip("#b62424", "DENIED! It's seems you did not provide provided a number.");
    }
    else {
      console.log(input.value)
    }
  })
  
});
document.addEventListener("DOMContentLoaded", (event) => {
const countrySelected = document.querySelector(".ct-selected");
const countryList  = document.querySelector(".ct-list");

const tipResultContainer = document.querySelector(".tip-result-container")

const tipWrapper = document.querySelector(".tip-wrapper");
const resultWrapper = document.querySelector(".result-wrapper")

const input = document.getElementById("user-input");
const deleteInputBtn= document.querySelector(".delete-input");
const checkButton = document.getElementById("check-btn");

const h2 = document.querySelector("h2");
const intro = document.querySelector(".info");
const clearButton = document.getElementById("clear-btn");
let countryID = "US";

const countryInfo = {
  us: {
    name: "United States",
    flag: "https://cdn0.iconfinder.com/data/icons/195-flat-flag-psd-icons/70/United-States-of-America.png",
    placeholder: "+1 (AAA) BB-CCCC"
  },
  br: {
    name: "Brazil",
    flag: "https://cdn0.iconfinder.com/data/icons/195-flat-flag-psd-icons/70/Brazil.png",
    placeholder: "+55 (AA) BBBBB-CCCC"
  },
  ph: {
    name: "Philippines",
    flag: "https://cdn0.iconfinder.com/data/icons/195-flat-flag-psd-icons/70/Philippines.png",
    placeholder: "+63 (AA) BBBB CCCC"
  },
  icons: {
    info: `info`,
    failed: `dangerous`,
    correct: `verified`
  },
  message: {
    error: "OPPS! It seems you did not provide a number.",
  },
}

countryInfo.message.us = `Type a US phone number as ${countryInfo.us.placeholder}.`;
countryInfo.message.br = `Type a BR phone number as ${countryInfo.br.placeholder}.`;
countryInfo.message.ph = `Type a PH phone number as ${countryInfo.ph.placeholder}.`;

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
};

function updateTipResult(background, tipIcon, tipMessage, resultIcon, resultMessage){
  tipResultContainer.style.background = background;
  tipWrapper.innerHTML = `
  <span class="material-symbols-outlined">${countryInfo.icons[tipIcon]}</span>
  <p id="tip-message">${countryInfo.message[tipMessage]}</p>
  `;
  resultWrapper.querySelector("span").textContent = countryInfo.icons[resultIcon];
  resultWrapper.querySelector("p").textContent = resultMessage;
};


const toggleInputDlt = () => {
  if (input.value.length > 0){
    deleteInputBtn.style.display = "block";
  }
  else {
    deleteInputBtn.style.display = "none";
  }
}

/* Runs after the innerHTML is loaded. */
/* Runs after the innerHTML is loaded. */

//Display us-selected 
  updateCountrySelected("us");
  updateTipResult("#895212", "info", "us")

  //Shows Country-list
  countrySelected.addEventListener("click", (event) => {
    event.stopPropagation();
    countryList.classList.toggle("hidden");
  });

  //Hides Countrylist
 document.addEventListener("click", () => {
  if(!countryList.classList.contains("hidden")){
    countryList.classList.toggle("hidden");
  }
 })

  //Changes selected country
  const countries =  document.querySelectorAll(".countries");
  countries.forEach(function(country) {
    country.addEventListener("click", function(){
      updateCountrySelected(`${country.id}`);
      countryList.classList.toggle("hidden");
      updateTipResult("#895212", "info", country.id)
      input.placeholder = countryInfo[country.id].placeholder;
      input.value = "";
      countryID = country.id.toUpperCase();
    })
  });

  //Toggle the trash can icon.
  input.addEventListener("keyup", (event) =>{
    toggleInputDlt()
    console.log(input.value.length)
  });

  deleteInputBtn.addEventListener("click", () => {
    input.value = "";
    toggleInputDlt()
  });


  //Empty
  checkButton.addEventListener("click", () => {
    if (input.value === "" && input.value.length === 0){
      alert("Please provide a phone number");
      updateTipResult("#b62424", "failed", "error");
    }
    else {
      numberValidation(input.value)
    };
  });

  //Number Validator
  function numberValidation(number){
    if (/^[0-9()+\s-]*$/.test(number)){
      console.log(true);
    }
    else {
      h2.textContent = input.value;
      h2.style.marginBottom = "0";
      UIUpdate("none", "none")

      updateTipResult("#b62424", "", "", "failed", `Invalid ${countryID} number: ${input.value}`);
    }
  }

  clearButton.addEventListener("click", () => {
    input.value = "";
    toggleInputDlt();

    h2.textContent = "Validate your phone number.";
    h2.style.marginBottom = "2rem";
    UIUpdate("flex", "block");
    updateTipResult("#895212", "info", countryID.toLowerCase())

    resultWrapper.querySelector("p").textContent = "";
    });

    //UI Update
    function UIUpdate(inputWrapDisplay, introDisplay) {
      document.querySelector(".input-wrapper").style.display = inputWrapDisplay; 
      document.querySelector(".intro").style.display = introDisplay; 
  
      tipWrapper.classList.toggle("hidden");
      resultWrapper.classList.toggle("hidden");
      checkButton.classList.toggle("hidden");
      clearButton.classList.toggle("hidden");
      }
});
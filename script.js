// professional fucking javascript

const rightTriangle = "&#11208;"
const downTriangle = "&#x2BC6;"
const leftTriangle = "&#x2BC7;"

var accountStatus = "active"
const statusLabel = document.getElementById("status")

const contactInfo = "Matrix: @norsu:pikaviestin.fi"

const contactInfoCard = document.getElementById("info")
const contactInfoButton = document.getElementById("info-button")

var isContactInfoDisplayed = false

const url = "http://37.114.46.37:6233/api/getstatus"



setUpInfo()
var accountS = getData()
console.log(accountS)
setStatusLabel(accountS)
setupAccountStatusButtons()


function setStatusLabel(state) {
    if (state == "active") {
        statusLabel.classList = "card-text text-bg-success rounded"
        statusLabel.innerHTML = "Account is active"
        return
            
    } else if (state == "terminated") {
        statusLabel.classList = "card-text text-bg-danger rounded"
        statusLabel.innerHTML = "Account is terminated⚠︎"

    } else if (state == "restricted") {

        statusLabel.classList = "card-text text-bg-warning rounded"
        statusLabel.innerHTML = "Account is restricted"
    } else if (state == "error") {
        statusLabel.classList = "card-text text-bg-danger rounded"
        statusLabel.innerHTML = "Failed to fetch account status⚠︎"
    } else {
        statusLabel.classList = "card-text text-bg-warning rounded"
        statusLabel.innerHTML = "Error, please check devtools console⚠︎"
    }

}


function setUpInfo() {
    contactInfoButton.addEventListener("click", toggleInfo)
}

function toggleInfo() {
    if (isContactInfoDisplayed == false) {
        contactInfoCard.style.visibility = "visible"
        contactInfoCard.style.display = "contents"
        contactInfoButton.innerHTML = "Hide contact information"
        isContactInfoDisplayed = true;
    } else if(isContactInfoDisplayed) {
        contactInfoCard.style.visibility = "hidden"
        contactInfoCard.style.display = "none"
        contactInfoButton.innerHTML = "Show contact information"
        isContactInfoDisplayed = false;

    }
}


async function getData() {
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();

      return JSON.parse(json).state
    } catch (error) {

      return "error"
    }
    
  }
  

function setupAccountStatusButtons() {
    const rawAccountStatusBtn = document.getElementById("raw-status")
    rawAccountStatusBtn.addEventListener("click", function () {
        window.location.href = url
    })
}
// professional fucking javascript

const rightTriangle = "&#11208;"
const downTriangle = "&#x2BC6;"
const leftTriangle = "&#x2BC7;"

const accountStatus = "active"
const statusLabel = document.getElementById("status")

const contactInfo = "Matrix: @norsu:pikaviestin.fi"

const contactInfoCard = document.getElementById("info")
const contactInfoButton = document.getElementById("info-button")

var isContactInfoDisplayed = false

setStatusLabel()
setUpInfo()

function setStatusLabel() {
    if (accountStatus == "active") {
        statusLabel.classList = "card-text text-bg-success rounded"
        statusLabel.innerHTML = "Account is active"
        return
            
    } else if (accountStatus == "terminated") {
        statusLabel.classList = "card-text text-bg-danger rounded"
        statusLabel.innerHTML = "Account is terminated⚠︎"

    } else if (accountStatus == "restricted") {

        statusLabel.classList = "card-text text-bg-warning rounded"
        statusLabel.innerHTML = "Account is restricted"
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

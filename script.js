

const rightTriangle = "&#11208;"
const downTriangle = "&#x2BC6;"
const leftTriangle = "&#x2BC7;"

const accountStatus = "active"
const statusLabel = document.getElementById("status")
const contactInfoElement = document.getElementById("contactinfo")
const contactInfo = "Matrix: @norsu:pikaviestin.fi"


var isContactInfoDisplayed = false
setStatusLabel()

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


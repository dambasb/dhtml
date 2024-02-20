// Get the data from each element on the form
let name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let message = document.getElementById('message');
let subject = document.getElementById('subject');

// Set error
let nameError = true;
let emailError = true;
let messageError = true;

// Allow only number as input
phone.onkeydown = function (event) {
    // Only allow if the e.key
    if (isNaN(event.key)) {
        event.preventDefault();
    }
};

// CHeck valid email
function ValidateEmail(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.value.match(mailformat)) {
        return true;
    }
    else {
        return false;
    }
}


let saveFile = () => {

    let nameErrorMessage = '';
    let emailErrorMessage = '';
    let messageErrorMessage = '';

    if (name.value.length === 0) {
        name.style.borderColor = "red";
        nameErrorMessage = 'Please add your name.\n'
    }

    ValidateEmail(email);

    if (email.value.length === 0 | ValidateEmail(email) === false) {
        email.style.borderColor = "red";
        emailErrorMessage = 'Please add valid email.\n'
    }
    if (message.value.length === 0) {
        message.style.borderColor = 'red';
        messageErrorMessage += 'Please add your message.'
    }

    let errorMessage = nameErrorMessage + emailErrorMessage + messageErrorMessage

    if (errorMessage != '') {
        alert(errorMessage)
        return
    } else {
        // This variable stores all the data.
        let data =
            '\r Name: ' + name.value + ' \r\n ' +
            'Email: ' + email.value + ' \r\n ' +
            'Phone: ' + phone.value + ' \r\n ' +
            'Subject: ' + subject.value + ' \r\n ' +
            'Message: ' + message.value;

        // Convert the text to BLOB.
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = 'formData.txt';	   // The file to save the data.

        let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click();
    }
}
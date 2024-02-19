let saveFile = () => {

    // Get the data from each element on the form
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    if (name.value.length === 0) {
        name.style.borderColor = "red";
    }
    if (email.value.length === 0) {
        email.style.borderColor = "red";
    }
    if (message.value.length === 0) {
        message.style.borderColor = 'red';
    }



    if (name.value.length === 0 | name.value.length === 0 | name.value.length === 0) {
        alert('Plese fill the form.')
        return
    }

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


    // Put the object into storage
    localStorage.setItem('data', JSON.stringify(testObject));

    // Retrieve the object from storage
    var retrievedObject = localStorage.getItem('data');

    console.log('retrievedObject: ', JSON.parse(retrievedObject));

}
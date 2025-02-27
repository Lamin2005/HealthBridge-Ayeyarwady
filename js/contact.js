const form = document.getElementById('form');
const result = document.getElementById('form-message-success');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(form);
    
    // Get the name input value
    const name = formData.get('name');
    
    // Create a custom subject
    const subject = `${name} sent a message from website`;
    
    // Append the custom subject to the form data
    formData.append('subject', subject);
    
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    
    result.innerHTML = "Please wait...";
  

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
    .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
            result.innerHTML = json.message;
        } else {
            console.log(response);
            result.innerHTML = json.message;
        }
    })
    .catch(error => {
        console.log(error);
        result.innerHTML = "Something went wrong!";
    })
    .then(function() {
        form.reset();
        setTimeout(() => {
            result.style.display = "none";
        }, 3000);
    });
});
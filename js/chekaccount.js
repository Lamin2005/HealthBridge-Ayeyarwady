document.getElementById("price").addEventListener("click", function () {
    // Retrieve the logged-in user from session storage
    let loggedInUser = sessionStorage.getItem("loggedInUser");
    let paymentUsers = localStorage.getItem("Paymentusers");

    if (loggedInUser && paymentUsers) {
        loggedInUser = JSON.parse(loggedInUser);  // Convert to object
        paymentUsers = JSON.parse(paymentUsers);  // Convert to array of objects

        // Ensure paymentUsers is an array before searching
        if (Array.isArray(paymentUsers)) {
            // Find the user in the paymentUsers array
            let matchedUser = paymentUsers.find(user => user.id === loggedInUser.id);

            if (matchedUser && matchedUser.status === "approved" && matchedUser.account === "standard" || matchedUser.account === "paltinum" || matchedUser.account === "preminum" ) {
                // Redirect to the platinum-approved page
                window.location.href = "IntermediateChooseDay.html"; 
            } else {
                // Redirect to another page (e.g., an error page or normal dashboard)
                window.location.href = "pricing.html"; 
            }
        } else {
            alert("Invalid data format in localStorage.");
        }
    } else {
        alert("Please Singin");
    }
});

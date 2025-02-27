document.getElementById("price").addEventListener("click", function () {
    // Retrieve the logged-in user from session storage
    let loggedInUser = sessionStorage.getItem("loggedInUser");
    let paymentUsers = localStorage.getItem("Paymentusers");

    if (loggedInUser && paymentUsers) {
        loggedInUser = JSON.parse(loggedInUser);  // Convert string to object
        paymentUsers = JSON.parse(paymentUsers);  // Convert string to array of objects

        if (Array.isArray(paymentUsers)) {
            // Find a user in Paymentusers that matches the logged-in user's ID
            let matchedUser = paymentUsers.find(user => user.id === loggedInUser.id);

            if (matchedUser && matchedUser.status === "approved" && matchedUser.account == "standard") {
                // If user has an account and is approved, redirect to the success page
                alert("Already Buy.")
            } else {
                // If not approved or has no account, redirect to another page
                window.location.href = "payment.html"; 
            }
        } else {
            alert("Error: Payment users data is not in the correct format.");
        }
    } else {
        alert("NO login in");
    }
});

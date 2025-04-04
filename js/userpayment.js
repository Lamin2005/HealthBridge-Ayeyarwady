document.getElementById('userForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const userEmail = document.getElementById('useremail').value;
    const userAccount = document.getElementById('account').value;
    const userPhone = document.getElementById('phone').value;
    const userNumber = document.getElementById('number').value;
    const userMoney = document.getElementById('money').value;
    const userDate = document.getElementById('date').value;


    // Get the users array from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Find the user by email
    const existingUser = users.find((user) => user.email === userEmail);

    if (existingUser) {
        // Update the existing user's data and include the userpayment ID
        const updatedUser = {
            ...existingUser, // Retain existing properties, including ID
            account: userAccount,
            money: userMoney,
            phone: userPhone,
            number: userNumber,
            status: 'pending', // Update status if necessary
            userpaymentId: existingUser.id,
            paymentDate: userDate  // Store the userpayment ID explicitly
        };

        // Get or initialize the `updatedUsers` array from localStorage
        let updatedUsers = JSON.parse(localStorage.getItem('Paymentusers')) || [];

        // Check if this user already exists in `updatedUsers` (by email or id)
        const updatedUserIndex = updatedUsers.findIndex((user) => user.email === userEmail);

        if (updatedUserIndex !== -1) {
            // Replace the existing user in the `updatedUsers` array
            updatedUsers[updatedUserIndex] = updatedUser;
        } else {
            // Add the updated user to the array
            updatedUsers.push(updatedUser);
        }

        // Save the updated array back to localStorage
        localStorage.setItem('Paymentusers', JSON.stringify(updatedUsers));

        alert(`User with email: ${userEmail} has been updated and stored successfully.`);
    } else {
        // If email not found, show an alert
        alert('Email not found in the database. Please check your input or register first.');
    }

    e.target.reset();
});
